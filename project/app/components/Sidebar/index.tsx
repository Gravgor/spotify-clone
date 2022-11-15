    "use client"
    import {useMemo, useState, useEffect} from 'react'
    import Image from 'next/image'
    import Link from 'next/link'
    import spotifyLogo from '../../assets/logo/spotify.png'
    import {AiFillHome} from 'react-icons/ai'
    import {BsMusicNoteList} from 'react-icons/bs'
    import {RiSearchLine} from 'react-icons/ri'
    import {IoLibraryOutline} from 'react-icons/io5'
    import {BsBookmarkHeartFill} from 'react-icons/bs'
    import './Sidebar.css'



    export default function Sidebar(){

        const [location, setLocation] = useState('/dashboard')
        const [playlists, setPlaylists] = useState<any>([])

        useEffect(() => {
            async function fetchData(){
                try {
                    const request = await fetch(`http://localhost:3000/api/user/playlists/${window.sessionStorage.getItem('id')}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    const data = await request.json()
                    setPlaylists(data.userLikedPlylists)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchData()
        }, [])

        return (
            <div className='sidebar'>
                <div className='logo'>
                    <Image src={spotifyLogo} alt="Spotify Logo" width={180} height={60} style={{
                        position: 'absolute',
                        top: '30px',
                        left: '15px',
                    }}
                    priority={true}
                    />
                </div>
                <ul className='list'>
                    <Link className='links' href="/dashboard"
                    onClick={() => setLocation('/dashboard')}
                    >
                            <AiFillHome size={30} style={{
                                color: '#fff',
                                position: 'relative',
                                left: '50px',
                            }}>
                            </AiFillHome>
                            <a className='aSideBar' style={{
                        color: location === '/dashboard' ? '#1DB954' : 'gray',
                    }}>Home</a>
                    </Link>
                    <Link className='links' href="/dashboard/search" style={{
                        color: location === '/dashboard/search' ? '#1DB954' : 'gray',
                    }}
                    onClick={() => setLocation('/dashboard/search')}
                    >
                            <RiSearchLine size={30} style={{
                                color: '#fff',
                                position: 'relative',
                                left: '50px',
                            }}
                            />
                            <a className='aSideBar' style={{
                        color: location === '/dashboard/search' ? '#1DB954' : 'gray',
                            }}>
                                Search
                            </a>
                    </Link>
                    <Link className='links' href="/dashboard/library" style={{
                        color: location === '/dashboard/library' ? '#1DB954' : 'gray',
                    }}
                    onClick={() => setLocation('/dashboard/library')}
                    >
                            <IoLibraryOutline size={30} style={{
                                color: '#fff',
                                position: 'relative',
                                left: '50px',
                            }}/>
                            <a className='aSideBar' style={{
                        color: location === '/dashboard/library' ? '#1DB954' : 'gray',
                            }}>
                                Library
                            </a>
                    </Link>
                </ul>
                <ul className='listTwo'>
                        <a className='Atwo'
                        style={{
                                color: '#fff',
                                position: 'relative',
                                left: '10px',
                                fontSize: '16px',
                        }}
                        >
                                <BsMusicNoteList size={20} style={{
                                    color: '#fff',
                                    position: 'relative',
                                    top: '2px',
                                    left: '-2px',
                                }}>

                                </BsMusicNoteList>
                                Utwórz playliste
                        </a>
                        <a className='Atwo'
                            style={{
                                color: '#fff',
                                position: 'relative',
                                left: '10px',
                                fontSize: '16px',
                            }}>
                                <BsBookmarkHeartFill size={20} style={{
                                    color: '#fff',
                                    position: 'relative',
                                    top: '2px',
                                    left: '-2px',
                                }}></BsBookmarkHeartFill>
                                Polubione Utwory
                            </a>
                </ul>
                <div className='playlists'>
                    <ul className='playlistsList'>
                        {playlists.length > 0 ? playlists.map((playlist: any) => {
                            return (
                                <li className='playlist' key={playlist.id}>
                                    <Link href={`/dashboard/playlist/${playlist.id}`}>
                                        {playlist.name}
                                    </Link>
                                </li>
                            )
                        }) : <h1 className='playlist-error'>
                            Nie masz jeszcze żadnych playlist
                            </h1>}
                    </ul>
                </div>
                <div className='footer'>
                    <p className='footertext'>
                        Polityka prywatności
                    </p>
                </div>
            
            </div>
        )
    }