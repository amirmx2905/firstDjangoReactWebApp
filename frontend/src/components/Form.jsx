import { useState } from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"

function Form({ route, method }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")  // Añadir estado para email
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const title = method === "login" ? "Login" : "Register"

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {
            // Incluye el email solo si es registro
            const data = method === "login" 
                ? { username, password } 
                : { username, password, email };
                
            const response = await api.post(route, data)
            
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, response.data.access)  // Nota: corregido de access_token a access
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh)  // Nota: corregido de refresh_token a refresh
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
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mx-5 my-auto p-2 rounded-xl inset-shadow bg-gray-900 w-[30%] text-white">
            <h1 className="text-xl font-bold mb-4">{title}</h1>
            <input 
                className="form-input w-[90%] p-[10px] my-[10px] border-2 border-gray-800 rounded-md box-border"
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />

            {/* Mostrar campo de email solo si es registro */}
            {method === "register" && (
                <input 
                    className="form-input w-[90%] p-[10px] my-[10px] border-2 border-gray-800 rounded-md box-border"
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            )}

            <input 
                className="form-input w-[90%] p-[10px] my-[10px] border-2 border-gray-800 rounded-md box-border"
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />

            <button 
                className="w-[70%] p-[10px] my-[20px] bg-gray-700 border-none rounded-3xl cursor-pointer transition-colors duration-200 ease-in-out hover:bg-gray-600" 
                type="submit"
                disabled={loading}
            >
                {loading ? "Processing..." : title}
            </button>
        </form>
    )
}

export default Form