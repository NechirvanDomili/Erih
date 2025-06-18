import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register: React.FC = () => {
<<<<<<< HEAD
  const [form, setForm] = useState({ name: '', email: '', password: '' });
=======
  const [form, setForm] = useState({
    firstName: '',
    name: '',
    email: '',
    password: '',
  });
>>>>>>> restore-changes
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

<<<<<<< HEAD
    if (!form.name || !form.email || !form.password) {
      setError('Please fill out all fields.');
      return;
    }

    // Kein echter Server — wir simulieren Erfolg:
    login(form.name); // Benutzer direkt einloggen
=======
    if (!form.firstName || !form.name || !form.email || !form.password) {
      setError('Please fill out all required fields.');
      return;
    }

    login(`${form.firstName} ${form.name}`); // Nutzername als "Vorname Nachname"
>>>>>>> restore-changes
    setSuccess('Registration successful!');
    setError('');

    setTimeout(() => {
<<<<<<< HEAD
      navigate('/'); // zur Startseite
=======
      navigate('/');
>>>>>>> restore-changes
    }, 1000);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register</h2>

        <input
          type="text"
<<<<<<< HEAD
          name="name"
          placeholder="Name"
=======
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="register-input"
        />

        <input
          type="text"
          name="name"
          placeholder="Last Name"
>>>>>>> restore-changes
          value={form.name}
          onChange={handleChange}
          className="register-input"
        />
<<<<<<< HEAD
=======

>>>>>>> restore-changes
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="register-input"
        />
<<<<<<< HEAD
=======

>>>>>>> restore-changes
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="register-input"
        />

        {error && <div className="register-error">{error}</div>}
        {success && <div className="register-success">{success}</div>}

        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
