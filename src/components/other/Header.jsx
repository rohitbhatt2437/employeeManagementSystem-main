import { useState } from "react"

export default function Header(props){

    const logOutUser = ()=>{
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
        // window.location.reload()
    }

    return (
        <div className="flex items-end justify-between">
            <h1 className="text-2xl font-medium">Hello <br/> <span className="text-3xl font-semibold">username👋</span> </h1>
            <button onClick={logOutUser} className="bg-red-600 text-lg font-md text-white px-5 py-2 rounded-sm">Log out</button>
        </div>
    )
}