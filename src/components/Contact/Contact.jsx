import React, { useState } from 'react'
import './Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.phone.trim()) errs.phone = 'Phone is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email'
    if (!formData.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
    } else {
      setSubmitted(true)
      setFormData({ name: '', phone: '', email: '', message: '' })
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>Contact Us</h2>
          <p>Book an appointment or ask us anything</p>
        </div>
        <div className="contact__inner">
          <div className="contact__form-side animate-on-scroll">
            <h3>Book an Appointment</h3>
            {submitted ? (
              <div className="contact__success">
                <span>✅</span>
                <p>Thank you! We'll contact you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className={`contact__field ${errors.name ? 'error' : ''}`}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                  {errors.name && <span className="contact__error">{errors.name}</span>}
                </div>
                <div className={`contact__field ${errors.phone ? 'error' : ''}`}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+38 (0__) ___-__-__"
                  />
                  {errors.phone && <span className="contact__error">{errors.phone}</span>}
                </div>
                <div className={`contact__field ${errors.email ? 'error' : ''}`}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className="contact__error">{errors.email}</span>}
                </div>
                <div className={`contact__field ${errors.message ? 'error' : ''}`}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your pet's condition or reason for visit..."
                  />
                  {errors.message && <span className="contact__error">{errors.message}</span>}
                </div>
                <button type="submit" className="btn-primary contact__submit">
                  Book Appointment
                </button>
              </form>
            )}
          </div>

          <div className="contact__info-side animate-on-scroll">
            <h3>Clinic Information</h3>
            <div className="contact__info-items">
              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>123 Veterinary Street, Kyiv, Ukraine 01001</p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📞</span>
                <div>
                  <strong>Phone Numbers</strong>
                  <p>+38 (044) 123-45-67</p>
                  <p>+38 (067) 123-45-67 (Emergency)</p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>info@myvetclinic.ua</p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">🕐</span>
                <div>
                  <strong>Working Hours</strong>
                  <p>Mon–Fri: 8:00 – 20:00</p>
                  <p>Sat–Sun: 9:00 – 18:00</p>
                  <p>Emergency: 24/7</p>
                </div>
              </div>
            </div>
            <div className="contact__map">
              <div className="contact__map-placeholder">
                <span>🗺️</span>
                <p>Google Maps</p>
                <p>123 Veterinary St, Kyiv</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
