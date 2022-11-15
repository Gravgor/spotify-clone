
"use client"
import './Navbar.css'


function logout(){
    window.sessionStorage.clear()
    window.location.replace('/')
}



export default function Navbar(){
    const token = window.sessionStorage.getItem('token')
    return (
        <div className='background'>
            <div className='right'>
                <p className='navbartext'>Premium</p>
                <p className='navbartext'>Pomoc</p>
                <p className='navbartext'>Pobierz</p>
                {token ? <button className='buttonspotify' onClick={(e) => logout()}>Wyloguj się</button> : <button className='buttonspotify'>Zaloguj</button>}
            </div>
        </div>
    )
}