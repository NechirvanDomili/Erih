import { useNavigate } from 'react-router-dom';
import './ChooseProfileType.css';

export default function ChooseProfileType() {
    const navigate = useNavigate();

    return (
        <div className="choose-container">
            <h2>Create Matching Profile</h2>
            <p>Please select your profile type:</p>

            <div className="profile-options">
                <button onClick={() => navigate('/profile-form-institution')}>
                    I represent an Institution
                </button>

                <button onClick={() => navigate('/profile-form-member')}>
                    I am an Individual Member
                </button>
            </div>
        </div>
    );
}
