import { getPlaylist } from "../../components/Dashboard";





export default async function PlaylistPage({params} : any){

    const playList = await getPlaylist(params.id);
    console.log(playList);
    return (
        <div>
            <h1>{playList.playlistName}</h1>
            <p>{playList.playlistDescription}</p>
        </div>
    )
}