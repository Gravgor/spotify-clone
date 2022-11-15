

export default async function getPlaylist(id: string){
    const res = await fetch(`http://localhost:3000/api/global/playlists/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()
    return data
}