import React from 'react'
import './Team.scss'

const team = [
  {
    initials: 'DR',
    name: 'Dr. Rebecca Morrison',
    title: 'Chief Veterinarian',
    bio: 'Over 15 years of experience in small animal medicine and surgery.',
    color: '#2A9D8F',
  },
  {
    initials: 'DA',
    name: 'Dr. Alex Petrov',
    title: 'Surgeon',
    bio: 'Specialist in orthopedic and soft tissue surgeries for dogs and cats.',
    color: '#264653',
  },
  {
    initials: 'DM',
    name: 'Dr. Maria Kovalenko',
    title: 'Internal Medicine',
    bio: 'Expert in diagnosing and treating complex internal medical conditions.',
    color: '#E76F51',
  },
  {
    initials: 'DJ',
    name: 'Dr. James Wilson',
    title: 'Dentist & Dermatologist',
    bio: 'Specializes in veterinary dentistry and skin conditions in pets.',
    color: '#F4A261',
  },
]

const Team = () => {
  return (
    <section className="team section" id="team">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>Our Team</h2>
          <p>Meet our dedicated team of veterinary professionals</p>
        </div>
        <div className="team__grid">
          {team.map((member, i) => (
            <div key={i} className="team__card animate-on-scroll">
              <div className="team__photo" style={{ background: member.color }}>
                <span>{member.initials}</span>
              </div>
              <div className="team__info">
                <h3 className="team__name">{member.name}</h3>
                <p className="team__title">{member.title}</p>
                <p className="team__bio">{member.bio}</p>
                <div className="team__social">
                  <a href="#" aria-label="LinkedIn">💼</a>
                  <a href="#" aria-label="Email">📧</a>
                  <a href="#" aria-label="Phone">📞</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
