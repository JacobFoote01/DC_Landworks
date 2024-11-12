import React from "react";
import './Pages.css';

const services = [
    { id: 1, title: "Tree Trimming", imgSrc: "/Trimming.jpg", description: "Keep your trees healthy and beautiful with our professional tree trimming services. We specialize in shaping, pruning, and maintaining trees to ensure safety and enhance your landscape." },
    { id: 2, title: "Landscaping", imgSrc: "/Sprinklers.jpg", description: "Transform your outdoors with our expert landscaping services. From design and planting to hardscaping, we create beautiful, functional spaces tailored to your needs." },
    { id: 3, title: "Irrigation Systems", imgSrc: "/Irrigation.jpg", description: "Optimize your landscape with our efficient irrigation services. We design and install custom systems to ensure your plants thrive while conserving water and reducing maintenance." }
];

const Services = () => {
    return (
        <div className="services-container">
            <h1 className="servicesPageTitle">Our Services</h1>
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
