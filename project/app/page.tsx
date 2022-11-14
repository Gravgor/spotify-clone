"use client"
import { useEffect } from "react"

export default function MainPage(){

    useEffect(() => {
        setTimeout(() => {
            window.location.replace('/dashboard')
        },1)
    })
    return (
        <div>
            
        </div>
    )

}