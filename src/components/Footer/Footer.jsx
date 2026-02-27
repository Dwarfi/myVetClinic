import React from 'react'
import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <a href="#home" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollToSection('#home') }}>
                <span>🐾</span> MyVetClinic
              </a>
              <p className="footer__desc">
                Professional veterinary care with compassion and expertise. 
                Serving the community since 2013 with dedication to animal health.
              </p>
              <div className="footer__social">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="YouTube">▶️</a>
              </div>
            </div>

            <div className="footer__links">
              <h4>Quick Links</h4>
              <ul>
                {['Home', 'About', 'Services', 'Team', 'Pricing', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(`#${item.toLowerCase()}`)
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__contact">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <span>📍</span>
                  <span>123 Veterinary Street, Kyiv, Ukraine 01001</span>
                </li>
                <li>
                  <span>📞</span>
                  <a href="tel:+380441234567">+38 (044) 123-45-67</a>
                </li>
                <li>
                  <span>📧</span>
                  <a href="mailto:info@myvetclinic.ua">info@myvetclinic.ua</a>
                </li>
                <li>
                  <span>🕐</span>
                  <span>Mon–Fri: 8:00–20:00, Sat–Sun: 9:00–18:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>© {currentYear} MyVetClinic. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
