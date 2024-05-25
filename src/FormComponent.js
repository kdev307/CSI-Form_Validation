import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormComponent.css'; // Assuming we have some basic styling

const FormComponent = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        city: '',
        pan: '',
        aadhar: ''
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!form.firstName) newErrors.firstName = 'First Name is required';
        if (!form.lastName) newErrors.lastName = 'Last Name is required';
        if (!form.username) newErrors.username = 'Username is required';
        if (!form.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email address is invalid';
        if (!form.password) newErrors.password = 'Password is required';
        if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (!form.phone) newErrors.phone = 'Phone number is required';
        if (!/^\+?\d{10,15}$/.test(form.phone)) newErrors.phone = 'Phone number is invalid';
        if (!form.country) newErrors.country = 'Country is required';
        if (!form.city) newErrors.city = 'City is required';
        if (!form.pan) newErrors.pan = 'PAN number is required';
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(form.pan)) newErrors.pan = 'PAN number is invalid';
        if (!form.aadhar) newErrors.aadhar = 'Aadhar number is required';
        if (!/^\d{12}$/.test(form.aadhar)) newErrors.aadhar = 'Aadhar number is invalid';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            navigate('/success', { state: form });
        }
    };

    return (
        <div>
            <h1>Form Validation</h1>
            <p>(using React)</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <p>{errors.phone}</p>}
                </div>
                <div>
                    <select name="country" value={form.country} onChange={handleChange}>
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                    </select>
                    {errors.country && <p>{errors.country}</p>}
                </div>
                <div>
                    <select name="city" value={form.city} onChange={handleChange}>
                        <option value="">Select City</option>
                        {form.country === 'India' && (
                            <>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                            </>
                        )}
                        {form.country === 'USA' && (
                            <>
                                <option value="New York">New York</option>
                                <option value="Los Angeles">Queens</option>
                            </>
                        )}
                    </select>
                    {errors.city && <p>{errors.city}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="pan"
                        placeholder="PAN No"
                        value={form.pan}
                        onChange={handleChange}
                    />
                    {errors.pan && <p>{errors.pan}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="aadhar"
                        placeholder="Aadhar No"
                        value={form.aadhar}
                        onChange={handleChange}
                    />
                    {errors.aadhar && <p>{errors.aadhar}</p>}
                </div>
                <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;
