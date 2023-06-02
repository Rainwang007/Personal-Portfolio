import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';


function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_720hn7l', 'template_kdr3rhj', e.target, 'EMd-6xhpKw23Mhhc2')
      .then((result) => {
          console.log(result.text);
          setMessageSent(true);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div className="content">
      <h1>Contact Me</h1>
      <p>
        Interested in working with me or have a question? Reach out to me.
      </p>
      <form onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label><br/>
        <input type="text" id="name" name="name"/><br/>
        <label htmlFor="email">Email:</label><br/>
        <input type="email" id="email" name="email"/><br/>
        <label htmlFor="message">Your Message to Rain:</label><br/>
        <textarea id="message" name="message"></textarea><br/>
        <input type="submit" value="Submit"/>
      </form>
      {messageSent && (
        <div>
          <p>Thank you for your interest! I will get back to you as soon as possible^_^</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
