import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileForm.css';

export default function InstitutionProfileForm() {
    const [form, setForm] = useState({
        institutionName: '',
        country: '',
        city: '',
        postalCode: '',
        streetAddress: '',
        contactInfo: '',
        introduction: '',
        themes: '',
        expertise: '',
        currentProjects: '',
        collaborationGoals: '',
        referenceProjects: '',
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (
            form.institutionName.trim().length < 10 ||
            form.country.trim() === '' ||
            form.city.trim() === '' ||
            form.postalCode.trim() === '' ||
            form.streetAddress.trim() === '' ||
            form.contactInfo.trim().length < 5 ||
            form.introduction.trim().length < 40 ||
            form.themes.trim().length < 3
        ) {
            setMessage('Please fill in all required fields with valid content.');
            return;
        }

        console.log('Form Data:', form);
        setMessage('Profile saved successfully!');

        setTimeout(() => {
            navigate('/');
        }, 1000);
    };
    const themeOptions = [
        "Application of Power",
        "Chemistry",
        "Communication",
        "Housing",
        "Industrial Architecture",
        "Industry and War",
        "Iron and Steel",
        "Landscapes",
        "Mining",
        "Paper",
        "Production and Manufacturing",
        "Salt",
        "Service and Leisure Industry",
        "Textiles",
        "Transport",
        "Water"
    ];


    return (
        <div className="form-container">
            <form className="profile-form" onSubmit={handleSubmit}>
                <h2>Matching Profile</h2>

                <div className="row-group">
                    <div className="half">
                        <label htmlFor="institutionName">Name of the Institution*</label>
                        <input
                            type="text"
                            id="institutionName"
                            name="institutionName"
                            value={form.institutionName}
                            onChange={handleChange}
                            required
                            minLength={10}
                            maxLength={100}
                        />
                    </div>

                    <div className="half">
                        <label htmlFor="country">Country*</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row-group">
                    <div className="half">
                        <label htmlFor="city">City*</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="half">
                        <label htmlFor="postalCode">Postal Code*</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={form.postalCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>


                <label htmlFor="streetAddress">Street Address*</label>
                <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={form.streetAddress}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="contactInfo">Phone Number*</label>
                <input
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                    value={form.contactInfo}
                    onChange={handleChange}
                    required
                    minLength={5}
                />

                <label htmlFor="introduction">General Introduction of the Institution*</label>
                <textarea
                    id="introduction"
                    name="introduction"
                    value={form.introduction}
                    onChange={handleChange}
                    required
                    minLength={40}
                    maxLength={1000}
                />
                <small>{form.introduction.length} / 1000 characters (min. 40)</small>

                <label htmlFor="themes">Themes / Sector*</label>
                <select
                    id="themes"
                    name="themes"
                    value={form.themes}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Please select a theme --</option>
                    {themeOptions.map((theme) => (
                        <option key={theme} value={theme}>
                            {theme}
                        </option>
                    ))}
                </select>


                <label htmlFor="expertise">Specializations and Expertise (optional)</label>
                <textarea
                    id="expertise"
                    name="expertise"
                    value={form.expertise}
                    onChange={handleChange}
                    minLength={30}
                    maxLength={800}
                />
                <small>{form.expertise.length} / 800 characters (min. 30)</small>

                <label htmlFor="currentProjects">Current Projects (optional)</label>
                <textarea
                    id="currentProjects"
                    name="currentProjects"
                    value={form.currentProjects}
                    onChange={handleChange}
                />

                <label htmlFor="collaborationGoals">Collaboration Goals (optional)</label>
                <textarea
                    id="collaborationGoals"
                    name="collaborationGoals"
                    value={form.collaborationGoals}
                    onChange={handleChange}
                />

                <label htmlFor="referenceProjects">Reference Projects (optional)</label>
                <small className="field-hint">
                    Mention previous or ongoing projects relevant for matchmaking.
                </small>
                <textarea
                    id="referenceProjects"
                    name="referenceProjects"
                    value={form.referenceProjects}
                    onChange={handleChange}
                />

                {message && <div className="form-message">{message}</div>}

                <button type="submit">Save Profile</button>
            </form>
        </div>
    );
}
