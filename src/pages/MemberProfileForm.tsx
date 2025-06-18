import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemberProfileForm.css'; // Du kannst alternativ eine separate Datei wie MemberProfileForm.css verwenden

export default function MemberProfileForm() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: '',
        firstName: '',
        lastName: '',
        membershipStatus: '',
        roleInErih: '',
        isEmployee: true,
        institutionName: '',
        institutionLink: '',
        roleInInstitution: '',
        street: '',
        postalCode: '',
        city: '',
        countryCode: '',
        email: '',
        phone: '',
        website: '',
        socialMedia: '',
        introduction: '',
        expertise: '',
        experience: '',
        interests: '',
        languageSkills: '',
        themes: '', // Added property for themes
    });
    
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

    const [message, setMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox'
                ? (e.target as HTMLInputElement).checked
                : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.firstName || !form.lastName || !form.email) {
            setMessage('Please fill in all required fields.');
            return;
        }

        console.log('Member Profile Data:', form);
        setMessage('Member profile saved successfully!');
        setTimeout(() => navigate('/'), 1000);
    };
    

    return (
        <div className="form-container">
            <form className="profile-form" onSubmit={handleSubmit}>
                <h2>Member Matching Profile</h2>

                <div className="row-group">
                    <div className="half">
                        <label>Title</label>
                        <input name="title" value={form.title} onChange={handleChange} />
                    </div>
                    <div className="half">
                        <label>First Name*</label>
                        <input name="firstName" value={form.firstName} onChange={handleChange} required />
                    </div>
                </div>

                <label>Last Name*</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required />

                <label>Membership Status*</label>
                <select name="membershipStatus" value={form.membershipStatus} onChange={handleChange} required>
                    <option value="">-- Select Membership --</option>
                    <option>Individual Member</option>
                    <option>Individual Supporting Member</option>
                    <option>Honorary Member</option>
                    <option>ERIH Young Professional</option>
                </select>

                <label>Role in the ERIH network (optional)</label>
                <input name="roleInErih" value={form.roleInErih} onChange={handleChange} />

                <label>
                    <input
                        type="checkbox"
                        name="isEmployee"
                        checked={form.isEmployee}
                        onChange={handleChange}
                    />
                    {' '}Employee of an institutional member
                </label>

                {form.isEmployee && (
                    <>
                        <label>Name of the Institution</label>
                        <input name="institutionName" value={form.institutionName} onChange={handleChange} />
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
                        
                    </>
                )}

                <h3>Address & Contact</h3>

                <label>Street / House Number</label>
                <input name="street" value={form.street} onChange={handleChange} />

                <div className="row-group">
                    <div className="half">
                        <label>Postal Code</label>
                        <input name="postalCode" value={form.postalCode} onChange={handleChange} />
                    </div>
                    <div className="half">
                        <label>City</label>
                        <input name="city" value={form.city} onChange={handleChange} />
                    </div>
                </div>



                <label>Email*</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />



                <h3>Professional Information</h3>

                <label>General Introduction of the Person</label>
                <textarea
                    name="introduction"
                    value={form.introduction}
                    onChange={handleChange}
                    maxLength={1500}
                />
                <small>{form.introduction.length} / 1500 characters</small>

                <label>Areas of Expertise</label>
                <textarea name="expertise" value={form.expertise} onChange={handleChange} />

               

                <label>Project Interests</label>
                <textarea name="interests" value={form.interests} onChange={handleChange} />



                {message && <div className="form-message">{message}</div>}

                <button type="submit">Save Member Profile</button>
            </form>
        </div>
    );
}
