
import { NextApiRequest,  NextApiResponse} from 'next'
import db from '../db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET'){
        const playlists = await db.playlist.findMany()
        res.status(200).json(playlists)
        if(playlists === null){
            res.status(404).json({message: 'Playlists not found'})
        }
        if(playlists === undefined){
            res.status(404).json({message: 'Playlists not found'})
        }
    } else if(req.method === 'POST'){
        const {name, description, id, color1, color2} = req.body
        const newID = parseFloat(id)
        const playlist = await db.playlist.create({
            data: {
                name,
                description,
                baseColor: color1,
                secondColor: color2,
                user: {
                    connect: {
                        id: newID
                    }
                }
            }
        })
        const song = await db.song.create({
            data: {
                name: 'New Song',
                artist: 'New Artist',
                playlist: {
                    connect: {
                        id: playlist.id
                    }
                }
            }
        })
        res.status(200).json(playlist)
    }
}