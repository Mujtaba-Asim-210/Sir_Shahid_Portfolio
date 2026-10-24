import React from 'react';

const skillGroups = [
  {
    icon: '⌘',
    title: 'Network Fundamentals',
    description: 'Understanding how devices, services, and network components communicate.',
    tags: ['TCP/IP', 'LAN & WAN', 'DNS / DHCP'],
  },
  {
    icon: '⌁',
    title: 'Network Configuration',
    description: 'Foundational configuration concepts for reliable connectivity and access.',
    tags: ['IP Addressing', 'Subnetting', 'Routing Basics'],
  },
  {
    icon: '↗',
    title: 'Troubleshooting',
    description: 'A structured approach to diagnosing connection issues and narrowing down causes.',
    tags: ['Connectivity', 'Diagnostics', 'Documentation'],
  },
  {
    icon: '▦',
    title: 'Infrastructure',
    description: 'Interest in network devices, cabling, topology, and organized infrastructure.',
    tags: ['Switches', 'Routers', 'Topology'],
  },
  {
    icon: '⌕',
    title: 'IT Support',
    description: 'Helping users with technical issues through clear communication and practical steps.',
    tags: ['User Support', 'Problem Solving', 'Communication'],
  },
  {
    icon: '↻',
    title: 'Continuous Learning',
    description: 'Building technical knowledge through hands-on practice and ongoing development.',
    tags: ['Lab Practice', 'Research', 'Skill Development'],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <span className="section-kicker">Technical expertise</span>
            <h2 className="section-title">The tools behind <span className="accent-text">the connection.</span></h2>
          </div>
          <p className="section-copy">
            A sample overview of networking and IT areas. Specific tools and
            proficiency levels can be updated after confirming Shahid’s experience.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <div className="skill-icon" aria-hidden="true">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-tags">
                {skill.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
