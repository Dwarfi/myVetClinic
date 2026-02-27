import React from 'react'
import './Services.scss'

const services = [
  { icon: '🔪', title: 'Surgery', description: 'Advanced surgical procedures performed by experienced surgeons with state-of-the-art equipment.' },
  { icon: '💉', title: 'Vaccination', description: 'Complete vaccination programs to protect your pets from common diseases and infections.' },
  { icon: '🔍', title: 'Diagnostics', description: 'Comprehensive diagnostic services including blood tests, X-rays, and physical examinations.' },
  { icon: '🦷', title: 'Dentistry', description: 'Professional dental cleaning, tooth extraction, and oral health care for pets.' },
  { icon: '✂️', title: 'Grooming', description: 'Professional grooming services to keep your pets clean, comfortable, and looking their best.' },
  { icon: '🧪', title: 'Laboratory', description: 'On-site laboratory for quick and accurate analysis of blood, urine, and tissue samples.' },
  { icon: '📡', title: 'Ultrasound', description: 'Advanced ultrasound imaging for accurate diagnosis of internal conditions and pregnancies.' },
  { icon: '🚨', title: 'Emergency Care', description: '24/7 emergency veterinary services for critical situations and urgent medical needs.' },
]

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>Our Services</h2>
          <p>Comprehensive veterinary care for all your pet's health needs</p>
        </div>
        <div className="services__grid">
          {services.map((service, i) => (
            <div key={i} className="services__card animate-on-scroll">
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <a href="#contact" className="services__card-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
