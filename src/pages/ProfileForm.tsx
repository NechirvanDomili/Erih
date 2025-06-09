import { useState } from 'react';
import './ProfileForm.css';

export default function ProfileForm() {
    const [form, setForm] = useState({
        institutionName: '',
        address: '',
        contactInfo: '',
        introduction: '',
        themes: '',
        expertise: '',
        currentProjects: '',
        collaborationGoals: '',
        referenceProjects: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Prüfen nur für die ersten 5 Felder
        if (
            !form.institutionName ||
            !form.address ||
            !form.contactInfo ||
            !form.introduction ||
            !form.themes
        ) {
            setMessage('Please fill in all required fields.');
            return;
        }

        console.log('Form Data:', form);
        setMessage('Profile saved successfully!');
    };

    return (
        <div className="form-container">
            <form className="profile-form" onSubmit={handleSubmit}>
                <h2>Matching Profile</h2>

                <input
                    type="text"
                    name="institutionName"
                    placeholder="Name of the Institution"
                    value={form.institutionName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="contactInfo"
                    placeholder="Contact Information"
                    value={form.contactInfo}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="introduction"
                    placeholder="General Introduction of the Institution"
                    value={form.introduction}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="themes"
                    placeholder="Themes / Sector"
                    value={form.themes}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="expertise"
                    placeholder="Specializations and Expertise (optional)"
                    value={form.expertise}
                    onChange={handleChange}
                />

                <textarea
                    name="currentProjects"
                    placeholder="Current Projects (optional)"
                    value={form.currentProjects}
                    onChange={handleChange}
                />

                <textarea
                    name="collaborationGoals"
                    placeholder="Collaboration Goals (optional)"
                    value={form.collaborationGoals}
                    onChange={handleChange}
                />

                <textarea
                    name="referenceProjects"
                    placeholder="Reference Projects (optional)"
                    value={form.referenceProjects}
                    onChange={handleChange}
                />

                {message && <div className="form-message">{message}</div>}

                <button type="submit">Save Profile</button>
            </form>
        </div>
    );
}
