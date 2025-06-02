import { Link } from 'react-router-dom';
import logo from '../assets/erih-logo.png';
import './Header.css';

export default function Header() {
    return (
        <header className="erih-header">
            <div className="erih-left">
                <img src={logo} alt="ERIH Logo" className="erih-logo" />
                <div className="erih-title">European Route of Industrial Heritage</div>
            </div>
            <nav className="erih-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About ERIH</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/news">News & Events</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
}
import './Header.css';