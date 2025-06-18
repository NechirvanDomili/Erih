import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Home.css';
export default function Home() {
    const navigate = useNavigate();
    const { user } = useAuth();

    return (
        <div className="home-container">
            <h1>
                {user
                    ? `Welcome back, ${user}!`
                    : 'Welcome to the Matchmaking Platform for ERIH Members'}
            </h1>

            {!user && (
                <div className="button-group">
                    <button onClick={() => navigate('/login')}>Login</button>
                    <button onClick={() => navigate('/Register')}>Register</button>
                </div>
            )}

            {user && (
                <div className="button-group">
                    <button onClick={() => navigate('/choose-profile-type')}>
                        Create Matching Profile
                    </button>

                    <button onClick={() => navigate('/match')}>Find Partners</button>
                    <button onClick={() => navigate('/contacts')}>My Contacts</button> {/* NEU */}
                </div>
            )}

        </div>
    );
}
