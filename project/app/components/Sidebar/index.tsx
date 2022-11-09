"use client"
import {useMemo, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import spotifyLogo from '../assets/logo/spotify.png'
import { SideBarA, StyledSidebar, StyledSideBarList, StyledSidebarLogo,StyledSideBarListTwo,SideBarATwo, StyledSideBarPlaylists, StyledFooterSideBar, StyledFooterSideBarText } from "./Sidebar"
import {AiFillHome} from 'react-icons/ai'
import {BsMusicNoteList} from 'react-icons/bs'
import {RiSearchLine} from 'react-icons/ri'
import {IoLibraryOutline} from 'react-icons/io5'
import {BsBookmarkHeartFill} from 'react-icons/bs'




export default function Sidebar(){

    const [location, setLocation] = useState('/')

    return (
        <StyledSidebar>
            <StyledSidebarLogo>
                <Image src={spotifyLogo} alt="Spotify Logo" width={180} height={60} style={{
                    position: 'absolute',
                    top: '30px',
                    left: '15px',
                }}
                priority={true}
                />
            </StyledSidebarLogo>
            <StyledSideBarList>
                <Link className='links' href="/" 
                onClick={() => setLocation('/')}
                >
                        <AiFillHome size={30} style={{
                            color: '#fff',
                            position: 'relative',
                            left: '50px',
                        }}>
                        </AiFillHome>
                        <SideBarA style={{
                    color: location === '/' ? '#1DB954' : 'gray',
                }}>Home</SideBarA>
                </Link>
                <Link className='links' href="/search" style={{
                    color: location === '/search' ? '#1DB954' : 'gray',
                }}
                onClick={() => setLocation('/search')}
                >
                        <RiSearchLine size={30} style={{
                            color: '#fff',
                            position: 'relative',
                            left: '50px',
                        }}
                        />
                        <SideBarA style={{
                    color: location === '/search' ? '#1DB954' : 'gray',
                        }}>
                            Search
                        </SideBarA>
                </Link>
                <Link className='links' href="/library" style={{
                    color: location === '/library' ? '#1DB954' : 'gray',
                }}
                onClick={() => setLocation('/library')}
                >
                        <IoLibraryOutline size={30} style={{
                            color: '#fff',
                            position: 'relative',
                            left: '50px',
                        }}/>
                        <SideBarA style={{
                    color: location === '/library' ? '#1DB954' : 'gray',
                        }}>
                            Library
                        </SideBarA>
                </Link>
            </StyledSideBarList>
            <StyledSideBarListTwo>
                       <SideBarATwo
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
                       </SideBarATwo>
                          <SideBarATwo
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
                          </SideBarATwo>
            </StyledSideBarListTwo>
            <StyledSideBarPlaylists>
                p
            </StyledSideBarPlaylists>
            <StyledFooterSideBar>
                <StyledFooterSideBarText>
                    Polityka prywatności
                </StyledFooterSideBarText>
            </StyledFooterSideBar>
           
        </StyledSidebar>
    )
}