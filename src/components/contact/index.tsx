import React from 'react';

import './style.css';

export const Contact = (): JSX.Element => {
  return (
    <section id="contact">
      <h1>Contact Me!</h1>
      <hr />
      <div className="contact-content">
        <p>Feel free to reach out and ask questions!</p>
      </div>
      <div className="contact-links">
        <a href="mailto:a.kyu.jang@gmail.com">a.kyu.jang@gmail.com</a>
      </div>
    </section>
  );
};

export default Contact;
