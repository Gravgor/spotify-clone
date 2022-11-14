import { NextApiRequest,  NextApiResponse} from 'next'
import db from './db'

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
        const {name, description, id} = req.body
        const playlist = await db.playlist.create({
            data: {
                name,
                description,
                userId: id,
                user: {
                    connect: {
                        id
                    }
                }
            }
        })
        res.status(200).json(playlist)
    }
}