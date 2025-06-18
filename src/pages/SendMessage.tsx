import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SendMessage.css';

export default function SendMessage() {
    const location = useLocation();
    const [form, setForm] = useState({
        to: '',
        subject: '',
        message: '',
        fileName: '',
    });

    const [success, setSuccess] = useState('');

    // Autofill "to" if passed from navigate
    useEffect(() => {
        const prefill = location.state?.to;
        if (prefill) {
            setForm((prev) => ({ ...prev, to: prefill }));
        }
    }, [location.state]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setForm({ ...form, fileName: file.name });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Message Sent:', form);
        setSuccess('Message sent successfully!');
        setForm({ to: '', subject: '', message: '', fileName: '' });
    };

    return (
        <div className="message-container">
            <form className="message-form" onSubmit={handleSubmit}>
                <h2>Send Message</h2>

                <label htmlFor="to">To</label>
                <input
                    type="text"
                    name="to"
                    id="to"
                    value={form.to}
                    onChange={handleChange}
                    placeholder="Recipient institution"
                    required
                />

                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                />

                <div className="file-upload">
                    <label htmlFor="file">Attach file (max 25MB):</label>
                    <input type="file" id="file" onChange={handleFileChange} />
                    {form.fileName && <span className="file-name">{form.fileName}</span>}
                </div>

                {success && <div className="message-success">{success}</div>}

                <button type="submit">Send</button>
            </form>
        </div>
    );
}
