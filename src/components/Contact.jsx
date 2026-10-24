import React from 'react';

export default function Contact() {
  const email = 'your.email@example.com';

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div>
            <span className="section-kicker">Get in touch</span>
            <h2 className="section-title">Have a network challenge or an opportunity?</h2>
            <p className="section-copy">
              I’m open to professional conversations, collaboration, and opportunities
              to learn and contribute. Reach out using the contact details below.
            </p>
            <a className="btn btn-light" href={`mailto:${email}`} style={{ marginTop: 14, color: '#fffefa', borderColor: '#ffffff55' }}>
              Send an email <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="contact-details">
            <a className="contact-link" href={`mailto:${email}`}>
              <span className="contact-icon" aria-hidden="true">✉</span>
              <span><small>Email</small><strong>{email}</strong></span>
            </a>
            <div className="contact-link">
              <span className="contact-icon" aria-hidden="true">⌖</span>
              <span><small>Location</small><strong>Karachi, Pakistan</strong></span>
            </div>
            <a className="contact-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <span className="contact-icon" aria-hidden="true">in</span>
              <span><small>LinkedIn</small><strong>Add Shahid’s profile URL</strong></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
