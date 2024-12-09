import React, { useState } from "react"
import './Pages.css'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.city || !formData.description) {
            alert("Please fill out all fields.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert("Please provide a valid email address.");
            return;
        }

        console.log('Form Data', formData);
        alert("Form submitted successfully!");
    }

    return (
        <div className="contactContainer">
            <div className="Contact">
                <h1>Contact Page</h1>
                <form onSubmit={handleSubmit} className="contactForm">
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            City:
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Brief Description:
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button id="submitButton">Submit</button>
                </form>
                <div className="contactInfo">
                    <div>
                        dclandworksut@gmail.com
                    </div>
                    <div>
                        (801) 913-3046
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;