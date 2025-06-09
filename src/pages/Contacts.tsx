import { useAuth } from '../context/AuthContext';
import { useConnections } from '../context/ConnectionContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Contacts.css';

export default function Contacts() {
    const { user } = useAuth();
    const { contacts } = useConnections();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleSendMessage = (institutionName: string) => {
        navigate('/message', { state: { to: institutionName } });
    };

    if (!user) return null; // Zeige nichts, während umgeleitet wird

    return (
        <div className="contacts-container">
            <h2>My Connections</h2>

            {contacts.length === 0 ? (
                <p>You haven't connected with anyone yet.</p>
            ) : (
                <ul className="contact-list">
                    {contacts.map((c) => (
                        <li key={c.id} className="contact-card">
                            <div>
                                <strong>{c.institutionName}</strong> ({c.region})
                            </div>
                            <button
                                className="message-button"
                                onClick={() => handleSendMessage(c.institutionName)}
                            >
                                Send Message
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
