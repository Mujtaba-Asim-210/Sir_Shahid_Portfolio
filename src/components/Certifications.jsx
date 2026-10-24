import React from 'react';

const certifications = [
  {
    icon: '⌘',
    title: 'Networking Fundamentals',
    issuer: 'Add confirmed course or certification provider',
    note: 'Replace with the exact certificate title and completion date.',
    status: 'Details to confirm',
  },
  {
    icon: '▣',
    title: 'IT Support & Troubleshooting',
    issuer: 'Add confirmed institution or training provider',
    note: 'Add relevant training, practical lab work, or verified experience.',
    status: 'Details to confirm',
  },
  {
    icon: '◎',
    title: 'Network Devices & Infrastructure',
    issuer: 'Add verified course, workshop, or qualification',
    note: 'Only include this item if it reflects Shahid’s actual background.',
    status: 'Details to confirm',
  },
  {
    icon: '↗',
    title: 'Professional Development',
    issuer: 'Add relevant APTECH program or external training',
    note: 'Update with the official name and year once confirmed by the client.',
    status: 'Details to confirm',
  },
];

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <span className="section-kicker">Learning & credentials</span>
        <h2 className="section-title">Knowledge built <span className="accent-text">over time.</span></h2>
        <p className="section-copy">
          These are placeholders for the design. Replace them with Shahid’s actual
          certificates, courses, workshops, or verified achievements before publishing.
        </p>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <article className="cert-card" key={cert.title}>
              <div className="cert-symbol" aria-hidden="true">{cert.icon}</div>
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <p>{cert.note}</p>
                <span className="cert-label">{cert.status}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
