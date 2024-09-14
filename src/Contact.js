import React, { useState } from 'react';
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';  

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //UPDATE AS NECESSARY
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
        ,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((result) => {
        console.log(result.text);
        setStatus('Message Sent!');
      })
      .catch((error) => {
        console.log(error.text);
        setStatus('Failed to send the message.');
      });
  };

  return (
    <div>
      <section id="contact">
        <h2>Contact Me</h2>
        <p>mcolon0523@gmail.com</p>
        <a href="/MariluzSWE.pdf" download="MariluzSWE.pdf" className="resume-download">
          <FaDownload size={10} /> Download Resume
        </a>
        
        <form onSubmit={sendEmail} style={{ marginTop: '30px', textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            ></textarea>
          </div>
          <button
            className="submit-button"
            type="submit"
            style={{ padding: '10px 20px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Send Message
          </button>
        </form>

        <p>{status}</p> {/* Display the status of the email */}
        
        <div style={{ marginTop: '30px' }}>
          <h3>Connect with me</h3>
          <div style={{ fontSize: '24px', margin: '20px 0' }}>
            <a
              href="https://www.linkedin.com/in/mariluzcolon"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '0 10px', color: '#0077b5' }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/mariluzc23"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '0 10px', color: '#333' }}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
