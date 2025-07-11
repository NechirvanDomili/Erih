import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = email.split('@')[0]; // Einfacher Platzhalter
        login(username);
        navigate('/');
    };

    return (
        <div className="erih-page">
            <main className="erih-login-container">
                <form className="erih-login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Sign In</button>
                </form>
            </main>
        </div>
    );
};

export default Login;
