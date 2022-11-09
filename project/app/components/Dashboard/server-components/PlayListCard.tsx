import Image from 'next/image'
import './Card.css'
import { AiFillPlayCircle } from 'react-icons/ai'
import cover from './rapcaviar.png'

export default function PlaylistCard({id, name, image, tracks, description} : any){
    return (
        <div className="card-layout">
            <div className="card-image">
                <Image src={cover} width={200} height={150} alt="Cover"/>
            </div>
            <div className="card-content">
                <p className='playlist-name'>{name}</p>
                <p className='playlist-description'>{description}</p>
            </div>

        </div>
    )

}