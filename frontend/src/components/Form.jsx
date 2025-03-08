import { useState } from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import LoadingIndicator from "./LoadingIndicator"

function Form({ route, method }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")  
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const title = method === "login" ? "Login" : "Register"

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {
            const data = method === "login" 
                ? { username, password } 
                : { username, password, email };
                
            const response = await api.post(route, data)
            
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, response.data.access)  
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh)  
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            console.error("Error:", error.response?.data || error.message)
            alert("Error: " + (error.response?.data?.detail || error.message))
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mx-5 my-auto p-2 rounded-xl inset-shadow bg-gray-800 w-[30%] text-white">
            <h1 className="text-xl font-bold mb-4">{title}</h1>
            <input 
                className="form-input w-[90%] p-[10px] my-[10px] border-2 border-white focus:outline-none focus:ring-1 focus:ring-white rounded-md box-border text-center"
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />

            {method === "register" && (
                <input 
                    className="form-input w-[90%] p-[10px] my-[10px] border-2 border-white focus:outline-none focus:ring-1 focus:ring-white rounded-md box-border text-center"
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            )}

            <input 
                className="form-input w-[90%] p-[10px] my-[10px] border-2 border-white focus:outline-none focus:ring-1 focus:ring-white rounded-md box-border text-center"
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />

            <button 
                className="w-[60%] h-[10%] p-[10px] my-[20px] bg-gray-700 border-none rounded-3xl cursor-pointer transition-all hover:bg-gray-500 hover:font-bold hover:scale-105" 
                type="submit"
                disabled={loading}
            >
                {loading ? <LoadingIndicator /> : title}
            </button>
        </form>
    )
}

export default Form
