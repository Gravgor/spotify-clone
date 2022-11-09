import { getPlaylist } from "../../components/Dashboard";
import './css/index.css'

import { AiFillPlayCircle,AiOutlineHeart } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import Link from "next/link";


export default async function PlaylistPage({params} : any){

    const playList = await getPlaylist(params.id);
    console.log(playList.playListTracks.tracks.length);
    return (
        <div className="playListPage" style={{
            backgroundImage: `linear-gradient(${playList.playListBaseColor}, ${playList.playListSecondColor})`
        }}>
            <div className="playListPage__header">
                <h1 className="playListPage__header__title">PLAYLISTA</h1>
                <h2 className="playListPage__header__subtitle">{playList.playlistName}</h2>
                <h3 className="playListPage__header__description">{playList.playlistDescription}</h3>
                <div className="playlistPage_header_footer">
                    <ul className="playlistPage_header_footer__list">
                        <li className="playlistPage_header_footer__list__item">{playList.playListOwner} • {playList.playListLikes} polubienia • {playList.playListTracks.tracks.length} utworów, 0h 0m</li>
                    </ul>
                </div>
            </div>
            <div className="playListPage__body">
                <div className="playListPage__body__tracks_header">
                    <AiFillPlayCircle fontSize={68} className="playListPage__body__tracks_header__icon_play"/>
                    <AiOutlineHeart fontSize={68} className="playListPage__body__tracks_header__icon"/>
                    <BsThreeDots fontSize={68} color="#fff" className="playListPage__body__tracks_header__icon"/>
                </div>
                {/* display tracks in playlist */}
                <div className="playListPage__body__tracks">
                    <div className="playListPage__body__tracks__list_header">
                        <div className="playListPage__body__tracks__list_header__title">#</div>
                        <div className="playListPage__body__tracks__list_header__title_title">Tytuł</div>
                        <div className="playListPage__body__tracks__list_header__title_margin">Album</div>
                        <div className="playListPage__body__tracks__list_header__title_margin">Data dodania</div>
                        <div className="playListPage__body__tracks__list_header__title_margin">Czas trwania</div>
                    </div>
                    <div className="playListPage__body__tracks__list">
                        {playList.playListTracks.tracks.map((track: any, index: number) => {
                            return (
                                <div key={track.id} className="track-item">
                                    <div className="index_trackname_artist">
                                        <div className="index_trackname_artist__index">{index + 1}</div>
                                        <div className="column">
                                           <div className="index_trackname_artist__trackname">{track.name}</div>
                                            <div className="index_trackname_artist__artist">Oki</div>
                                         </div>
                                    </div>
                                    <div className="album">
                                        <div className="album__name"><Link className="album-link" href={`/album/${track.albumID}`}>{track.album}</Link></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        </div>
    )
}