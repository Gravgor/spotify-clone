import { NextApiRequest,  NextApiResponse} from 'next'
import db from '../../db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET'){
        const {id} = req.query
        const userID = parseInt(id as string)
        const findUser = await db.user.findUnique({
            where: {
                id: userID
            }
        })
        if(!findUser){
            res.status(404).json({error: 'User not found'})
        }else {
            const userLikedPlylists =  await db.likedPlaylists.findMany({
                where: {
                    userId: userID
                }
            })
            res.status(200).json({userLikedPlylists})
    }
}
}