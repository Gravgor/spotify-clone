
import * as jsonwebtoken from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { NextApiRequest,  NextApiResponse} from 'next'
import db from '../db'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST' && req.body.type === 'login') {
        const {email, password} = req.body
        const user = await db.user.findUnique({
        where: {
            email: email
        }
        })
        if (!user) {
        res.status(404).json({error: 'User not found'})
        }
        if(user === null){
          res.status(404).json({error: 'User not found'})
        }
        const userPassword = user?.password as string;
        const passwordIsValid = bcrypt.compareSync(password, userPassword)
        if (!passwordIsValid) {
        res.status(401).json({error: 'Password is incorrect'})
        }
        const token = jsonwebtoken.sign({id: user?.id}, "spotify", {
        expiresIn: '1d'
        })
        res.status(200).json({token, user})
    } else if(req.body.type === "register") {
        const {email, password} = req.body
        const user = await db.user.findUnique({
        where: {
            email: email
        }
        })
        if (user) {
        res.status(409).json({error: 'User already exists'})
        }
        const hashedPassword = bcrypt.hashSync(password, 8)
        await db.user.create({
        data: {
            email: email,
            password: hashedPassword
        }
        })
        res.status(200).json({message: 'User created successfully'})        
    } else{
        res.status(405).json({error: 'Method not allowed'})
    }
} 


