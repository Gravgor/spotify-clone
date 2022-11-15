import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import db from '../../db'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET'){
        const playlists = await db.playlist.findUnique({
            where: {
                id: parseInt(req.query.id as string)
            }
        })
        res.status(200).json(playlists)
        if(playlists === null){
            res.status(404).json({message: 'Playlists not found'})
        }
        if(playlists === undefined){
            res.status(404).json({message: 'Playlists not found'})
        }
    }
}