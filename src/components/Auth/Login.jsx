import { useState } from "react"

export default function Login({handleLogin}){
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
         e.preventDefault()
         handleLogin(email,password)
         setEmail("")
         setPassword("")
         
    }
    return(
        <div className="flex h-screen w-screen items-center justify-center" >
                <div className="border-2 rounded-xl border-emerald-600 p-20" >
                    <form onSubmit={(e)=>{
                        submitHandler(e)
                    }} className="flex flex-col items-center justify-center">
                        <input
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                            
                        }}
                         required 
                         className="outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-gray-400"
                          type="email"
                           placeholder="enter your email"/>
                        <input
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }} 
                        required className="outline-none bg-transparent border-2 border-emerald-600 px-5 mt-3 py-3 text-xl rounded-full placeholder:gray-400" type="password" placeholder="Enter Password" />
                        <button className="w-full mt-3 outline-none bg-emerald-600 px-5 py-3 text-xl rounded-full ">Login</button>
                    </form>
                </div>
            </div>
    )
}