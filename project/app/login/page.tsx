"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import './css/index.css'
import { useRouter } from 'next/navigation'


export default function UserAuth(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleSubmit = (e:any) => {
        e.preventDefault()
        const handleFetch = async () => {
            const type = 'login'
            const res = await fetch('/api/user',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,password, type})
            })
            const data = await res.json()
            window.sessionStorage.setItem('token', data.token)
            window.sessionStorage.setItem('user', data.user)
            window.location.replace('/dashboard')
            
        }
        handleFetch()
    }
    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                    <h1>Log in</h1>
                    <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required/>
                    <button type='submit'>Log in</button>
                    <Link href='/signup'>
                    Dont have an account? Sign up
                </Link>
                    </form>
                </div>
            </div>
            
        </div>
    )
}