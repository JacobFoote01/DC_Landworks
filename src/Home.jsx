import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <main className="homeContainer">
            <section className="Home">
                <div className="homeContent">
                    <h1>Welcome to our page!</h1>
                    <p>
                        We are a trusted landscaping and tree service contractor proudly serving Utah County and select areas of Salt Lake County, Utah.
                        With over a decade of experience and a solid foundation in the latest horticultural practices, we’re here to help you create an
                        outdoor space that’s vibrant, functional, and truly stunning.
                    </p>
                </div>
                <div className="jobProcess">
                    <h2>Our Process</h2>
                    <div className="cardContainer">
                        <div className="card">
                            <img src="/planning.jpg" alt="Planning" className="cardImage" />
                            <h3>Planning</h3>
                            <p>We collaborate with you to design a vision for your outdoor space, ensuring every detail aligns with your preferences.</p>
                        </div>
                        <div className="card">
                            <img src="/Sprinklers.jpg" alt="Landscaping" className="cardImage" />
                            <h3>Landscaping</h3>
                            <p>Our experienced team brings the plan to life using top-quality materials and expert craftsmanship.</p>
                        </div>
                        <div className="card">
                            <img src="/followup.jpg" alt="Follow-Up" className="cardImage" />
                            <h3>Follow-Up</h3>
                            <p>We ensure your satisfaction by conducting a follow-up to address any questions and provide maintenance tips.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
