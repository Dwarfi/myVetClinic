import React from 'react'
import './Testimonials.scss'

const testimonials = [
  {
    text: "MyVetClinic has been taking care of our dog Max for years. The staff is incredibly caring and professional. We wouldn't trust anyone else with our beloved pet!",
    name: 'Anna Kowalski',
    pet: 'Dog Owner',
    rating: 5,
    initials: 'AK',
  },
  {
    text: "Brought my cat Luna in for emergency surgery. The team was amazing — fast, professional, and compassionate. Luna is now fully recovered. Forever grateful!",
    name: 'Oleh Melnyk',
    pet: 'Cat Owner',
    rating: 5,
    initials: 'OM',
  },
  {
    text: "The diagnostic equipment here is top-notch. They identified my rabbit's condition quickly and started treatment right away. Excellent service overall!",
    name: 'Sofia Petrenko',
    pet: 'Rabbit Owner',
    rating: 5,
    initials: 'SP',
  },
  {
    text: "Always professional, always kind. My dogs have been patients here for 5 years. The vets remember each pet personally. Truly outstanding care!",
    name: 'Dmytro Bondar',
    pet: 'Multiple Pets Owner',
    rating: 5,
    initials: 'DB',
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>Client Reviews</h2>
          <p>What our satisfied clients say about us</p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonials__card animate-on-scroll">
              <div className="testimonials__rating">
                {'⭐'.repeat(t.rating)}
              </div>
              <blockquote className="testimonials__text">
                "{t.text}"
              </blockquote>
              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {t.initials}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.pet}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
