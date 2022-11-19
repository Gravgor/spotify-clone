
"use client"

import {useState} from "react"
import { useRouter } from "next/navigation"

export default function Signup(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const router = useRouter()



    const handleSubmit = (e: any) => {
        e.preventDefault()
        const handleFetch = async () => {
            const type = "signup"
            const res = await fetch("http://localhost:3000/api/user/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password, type})
            })
            const data = await res.json()
            if(data.error){
                setError(data.error)
            }else{
                window.sessionStorage.setItem("token", data.token)
                window.sessionStorage.setItem("id", data.user.id)
                router.push("/dashboard")
            }
        }
        handleFetch()
    }


    return (
        <div>
            <div className="signup">
                <h1>Signup</h1>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button type="submit">Signup</button>
                    {error && <p>{error}</p>}
                </form>
            </div>

        </div>
    )
}