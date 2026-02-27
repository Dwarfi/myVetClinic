import React from 'react'
import './Hero.scss'

const Hero = () => {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero__bg"></div>
      <div className="container">
        <div className="hero__content">
          <p className="hero__subtitle animate-hero">Trusted Veterinary Care Since 2013</p>
          <h1 className="hero__title animate-hero">
            Caring for Your Pets<br />
            <span>Like Family</span>
          </h1>
          <p className="hero__description animate-hero">
            Professional veterinary care with compassion and expertise. 
            Our team of experienced veterinarians is dedicated to keeping 
            your beloved pets healthy and happy.
          </p>
          <div className="hero__buttons animate-hero">
            <button className="btn-primary" onClick={() => scrollToSection('#contact')}>
              Book Appointment
            </button>
            <button className="btn-outline" onClick={() => scrollToSection('#services')}>
              Our Services
            </button>
          </div>
          <div className="hero__stats">
            <div className="hero__stat animate-hero">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
            <div className="hero__stat animate-hero">
              <strong>5000+</strong>
              <span>Happy Pets</span>
            </div>
            <div className="hero__stat animate-hero">
              <strong>15+</strong>
              <span>Veterinarians</span>
            </div>
            <div className="hero__stat animate-hero">
              <strong>24/7</strong>
              <span>Emergency Care</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-dot"></div>
      </div>
    </section>
  )
}

export default Hero
