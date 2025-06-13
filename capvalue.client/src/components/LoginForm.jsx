import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await login(username, password);
            const { username: user, role } = response.data;

            alert("Connexion réussie !");
            console.log(response.data);
            //Authenticated
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('username', user);
            localStorage.setItem('role', role);
            console.log("Connexion réussie, rôle :", response.data.role);

            if (response.data.role === 'admin') {
                navigate('/admin');
            } else if (response.data.role === 'user') {
                navigate('/user');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error("Erreur de connexion :", error);
            alert("Nom d'utilisateur ou mot de passe incorrect");
        }
    };

    return (
        <div className="wrapper">
            
            <button type="button" className="close-bt"><FiX /></button>

            <form onSubmit={handleSubmit}>
                <h1>Login</h1>

                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                </div>

                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className="icon" />
                </div>

                <div className="remember-me">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#">Mot de passe oublié ?</a>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
