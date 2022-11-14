"use client"
import { useEffect } from "react"

export default function MainPage(){

    useEffect(() => {
       const token = window.sessionStorage.getItem('token')
         if(token){
                window.location.replace('/dashboard')
         }else{
                window.location.replace('/login')
         }
    })
    return (
        <div>
            
        </div>
    )

}