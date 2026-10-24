import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-availability"><span className="eyebrow-dot" /> Networking & IT Support</div>
          <h1>
            Connecting
            <span className="name-line">people & systems.</span>
          </h1>
          <p className="hero-description">
            I'm Shahid Ahmed, an IT and networking professional associated with
            APTECH's networking department. I’m passionate about reliable
            connectivity, practical troubleshooting, and keeping digital
            environments running smoothly.
          </p>
          <div className="hero-actions">
            <a className="btn btn-dark" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
            <a className="btn btn-light" href="#about">Explore my profile <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-meta">
            <span><span className="eyebrow-dot" /> Networking & infrastructure</span>
            <span>Based in Karachi, Pakistan</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Decorative Shahid Ahmed initials illustration">
          <div className="portrait-card">
            <div className="portrait-top"><span>IT • NETWORKS</span><span>PROFILE / 01</span></div>
            <div className="portrait-orb" />
            <div className="portrait-initials">SA</div>
            <div className="portrait-bottom">
              <div><strong>Shahid Ahmed</strong><span>Networking Department</span></div>
              <span>APTECH</span>
            </div>
          </div>
          <div className="floating-note">
            <small>MY APPROACH</small>
            <strong>Reliable systems.<br />Thoughtful solutions.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
