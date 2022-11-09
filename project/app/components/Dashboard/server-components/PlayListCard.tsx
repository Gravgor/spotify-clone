"use client"

import Image from 'next/image'
import './Card.css'
import { AiFillPlayCircle } from 'react-icons/ai'
import cover from './rapcaviar.png'
import Link from 'next/link'

export default function PlaylistCard({id, name, image, tracks, description} : any){
    return (
        <div className="card-layout">
            <div className="card-image">
            <Link href={`/playlist/${id}`}>
            <Image src={cover} width={200} height={150} alt="Cover" className='cover'/>
            </Link>
            </div>
            <div className="card-content">
                <p className='playlist-name'>{name}</p>
                <p className='playlist-description'>{description}</p>
            </div>

        </div>
    )

}