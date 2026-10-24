import React from 'react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <span className="section-kicker">A little about me</span>
          <h2 className="section-title">Technology works best when everything <span className="accent-text">connects.</span></h2>
          <div className="about-side-note">
            Focused on dependable connectivity, clear communication, and practical IT solutions.
          </div>
        </div>
        <div className="about-content">
          <p>
            I’m Shahid Ahmed, a networking professional associated with the
            networking department at APTECH. My interests include network
            infrastructure, troubleshooting, system reliability, and helping
            people work confidently with technology.
          </p>
          <p>
            I believe strong technical support starts with understanding the
            problem, communicating clearly, and finding a solution that is both
            effective and maintainable. This portfolio is a snapshot of my
            professional interests, skills, and ongoing learning journey.
          </p>
          <div className="about-stats">
            <div className="stat-card"><strong>IT</strong><span>Technical focus</span></div>
            <div className="stat-card"><strong>LAN / WAN</strong><span>Networking interests</span></div>
            <div className="stat-card"><strong>Always</strong><span>Learning mindset</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
