import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../apicall/api";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages
        try {
            const res = await api.post("/users/login", { email, password });
            console.log("User is logged in:", res.data);
            setMessage("Login successful!");
            navigate('/home');
            setEmail("");
            setPassword('');
        } catch (error) {
            console.error("Login error:", error);
            setMessage(error.response?.data?.message || "Login failed. Please try again.");
        }
    }

    return (
        <div className="Login">
            <h2>Login Form</h2>
            {message && <p style={{ color: message.includes('failed') ? 'red' : 'green' }}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
