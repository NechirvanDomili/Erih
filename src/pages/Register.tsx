import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName || !form.name || !form.email || !form.password) {
      setError('Please fill out all required fields.');
      return;
    }

    login(`${form.firstName} ${form.name}`); // Nutzername als "Vorname Nachname"
    setSuccess('Registration successful!');
    setError('');

    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register</h2>

        <input
          type="text"
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
          value={form.name}
          onChange={handleChange}
          className="register-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="register-input"
        />

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
