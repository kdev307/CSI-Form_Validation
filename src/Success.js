import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const { firstName, lastName, username, email, phone, country, city, pan, aadhar } = location.state;

    return (
        <div>
            <h2>Form Submitted Successfully!</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Country: {country}</p>
            <p>City: {city}</p>
            <p>PAN No: {pan}</p>
            <p>Aadhar No: {aadhar}</p>
        </div>
    );
};

export default Success;
