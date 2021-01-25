import React from 'react';
import emailjs from 'emailjs-com';

export default function EmailJS() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_HJqk6rZi', e.target, 'user_TBproChCTec0PGzaK0B71')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Email penerima</label>
      <input type="email" name="email" />
      <label>Name penerima</label>
      <input type="text" name="name" />
      <label>subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
