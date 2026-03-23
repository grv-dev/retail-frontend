import { useState } from "react";
import API from "../services/api";
import { setToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   const handleLogin = async () => {
       try {
           const res = await API.post("/auth/login", {
               username,
               password
           });

           setToken(res.data.token);
           navigate("/dashboard");

       } catch (err) {
           alert("Invalid credentials");
       }
   };

   return (
       <div>
           <h2>Login</h2>
           <input
               placeholder="Username"
               onChange={(e) => setUsername(e.target.value)}
           />
           <input
               placeholder="Password"
               type="password"
               onChange={(e) => setPassword(e.target.value)}
           />
           <button onClick={handleLogin}>Login</button>
       </div>
   );
}
