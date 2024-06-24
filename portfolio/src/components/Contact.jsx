import React, { useState } from 'react';
import '../styling/Contact.css'; // Import your CSS file for Contact component

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        // Constructing the mailto URL
        const mailtoUrl = `mailto:${email}?subject=Message from ${name}&body=${encodeURIComponent(message)}`;

        // Redirecting the user to their default email client (Gmail or any other)
        window.location.href = mailtoUrl;

        // Reset form fields after submission (if needed)
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div id="contact" className="parent-contact">
            <div className="contact">
                <h1 className="contact-heading">Contact Me</h1>
                <p className="contact-description">
                    You can reach out to me using the form below or through my social media profiles.
                </p>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="3"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
