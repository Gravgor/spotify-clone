import PocketBase from 'pocketbase';
import './css/index.css'
import PlaylistCard from './server-components/PlayListCard'

const client = new PocketBase('http://127.0.0.1:8090');


async function userPlaylists(){
    const resultList = await fetch('http://localhost:3000/api/playlist', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const result = await resultList.json()
    return result
}

export async function getPlaylist(id: string){
    const result = await client.records.getOne('playLists', id);
    return result as any;
}



export default async function Dashboard(){
    const playlist = await userPlaylists()
    return (
        <div className="dashBoardContainer">
            <h1 className="dashBoardTitle">Spotify Playlists</h1>
            <div className="dashBoardContentPlaylists">
                {playlist.length > 0 ? playlist.map((playList: any) => {
                    {playlist.map((playlist: any) => {
                        return (
                            <PlaylistCard 
                                key={playlist.id}
                                id={playlist.id}
                                name={playlist.playlistName}
                                description={playlist.playlistDescription}
                            />
                        )
                    })}
                }) : <h1 className="dashBoardContentPlaylists__noPlaylists">Brak playlist</h1>}
            </div>                   
        </div>
    )
}