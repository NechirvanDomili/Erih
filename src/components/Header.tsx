import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/erih-logo.png';
import './Header.css';
import { useAuth } from '../context/AuthContext';

export default function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="erih-header">
            <div className="erih-left">
                <img src={logo} alt="ERIH Logo" className="erih-logo" />
                <div className="erih-title">European Route of Industrial Heritage</div>
            </div>
            <nav className="erih-nav">
                <Link to="/">Home</Link>


                {user ? (
                    <>
                        <span style={{ marginLeft: '1rem' }}>Welcome, {user}</span>
                        <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/contacts">My Contacts</Link> {/* NEU */}
                    </>
                )}
            </nav>
        </header>
    );
}
