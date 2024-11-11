import React from "react";
import './Pages.css';

const services = [
    { id: 1, title: "Landscaping", imgSrc: "/Landscaping.jpg", description: "High-quality lawn care services to keep your grass green and healthy." },
    { id: 2, title: "Tree Trimming", imgSrc: "/path/to/tree-trimming.jpg", description: "Professional tree trimming for safety and beauty." },
    { id: 3, title: "Garden Design", imgSrc: "/path/to/garden-design.jpg", description: "Create a beautiful garden tailored to your space." },
    { id: 4, title: "Irrigation Systems", imgSrc: "/path/to/irrigation.jpg", description: "Efficient irrigation systems to keep your plants hydrated." }
];

const Services = () => {
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.id} className="service-item">
                        <img src={service.imgSrc} alt={service.title} className="service-image" />
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
