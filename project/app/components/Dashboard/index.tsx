
import './css/index.css'
import { playlists } from './props/Playlists'
import PlaylistCard from './server-components/PlayListCard'

export default function Dashboard(){
    return (
        <div className="dashBoardContainer">
            <h1 className="dashBoardTitle">Spotify Playlists</h1>
            <div className="dashBoardContentPlaylists">
                {playlists.map((playlist) => {
                    return (
                        <PlaylistCard 
                            key={playlist.id}
                            id={playlist.id}
                            name={playlist.name}
                            image={playlist.image}
                            tracks={playlist.tracks}
                            description={playlist.description}
                        />
                    )
                })}
            </div>
            <h1 className="dashBoardTitle2">Koncentracja </h1>
            
                     
        </div>
    )
}