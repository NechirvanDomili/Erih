import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockProfiles } from '../data/mockProfiles';
import { useConnections } from '../context/ConnectionContext';
import './MatchingSearch.css';

export default function MatchingSearch() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const { addContact } = useConnections();

    const filtered = mockProfiles.filter((profile) =>
        [profile.institutionName, profile.region, profile.themes, profile.expertise, profile.collaborationGoals]
            .some(field => field.toLowerCase().includes(query.toLowerCase()))
    );

    const handleSendMessage = (institutionName: string) => {
        navigate('/message', { state: { to: institutionName } });
    };

    const handleConnect = (profile: { id: number; institutionName: string; region: string }) => {
        addContact(profile);
        alert(`You are now connected with ${profile.institutionName}`);
    };

    return (
        <div className="matching-container">
            <h2 className="matching-title">Find Matching Profiles</h2>

            <input
                type="text"
                className="matching-search-input"
                placeholder="Search by theme, region, expertise..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <div className="matching-list">
                {filtered.map((p) => (
                    <div key={p.id} className="matching-card">
                        <h3>{p.institutionName} <small>({p.region})</small></h3>
                        <p><strong>Themes:</strong> {p.themes}</p>
                        <p><strong>Expertise:</strong> {p.expertise}</p>
                        <p><strong>Goals:</strong> {p.collaborationGoals}</p>

                        <div className="matching-actions">
                            <button onClick={() => handleConnect(p)}>Connect</button>
                            <button onClick={() => handleSendMessage(p.institutionName)}>Send Message</button>
                        </div>
                    </div>
                ))}

                {filtered.length === 0 && (
                    <p className="matching-no-results">No matching profiles found.</p>
                )}
            </div>
        </div>
    );
}
