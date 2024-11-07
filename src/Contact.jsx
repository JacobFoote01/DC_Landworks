import React, { useState } from "react"
import './Pages.css'

const Contact = () => {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        city:'',
        description:'',
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
        console.log('Form Data', formData)
    }

    return (
        <div className="Contact">
            <h1>Contact Page</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
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
            placeholder="Email"
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
            placeholder="Enter your city"
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
            placeholder="Write a brief description"
          />
        </label>
      </div>
      <button type="submit">Submit</button>
            </form>
        </div>
    )
}
    
export default Contact;