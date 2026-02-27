import React, { useEffect, useRef } from 'react'
import './About.scss'

const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 5000, suffix: '+', label: 'Happy Pets' },
  { value: 15, suffix: '+', label: 'Veterinarians' },
  { value: 24, suffix: '/7', label: 'Emergency Care' },
]

const About = () => {
  const statsRef = useRef(null)
  const countersStarted = useRef(false)

  const animateCounter = (el, target, suffix) => {
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        el.textContent = target + suffix
        clearInterval(timer)
      } else {
        el.textContent = Math.floor(start) + suffix
      }
    }, 16)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted.current) {
          countersStarted.current = true
          const counters = statsRef.current?.querySelectorAll('.about__counter-value')
          counters?.forEach((el, i) => {
            animateCounter(el, stats[i].value, stats[i].suffix)
          })
        }
      },
      { threshold: 0.5 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__content animate-on-scroll">
            <div className="section-title" style={{textAlign: 'left'}}>
              <h2 style={{textAlign: 'left'}}>About <span style={{color: '#2A9D8F'}}>MyVetClinic</span></h2>
            </div>
            <p className="about__text">
              Since 2013, MyVetClinic has been providing compassionate and professional 
              veterinary care for pets in our community. We believe every animal deserves 
              the highest quality medical attention in a warm and welcoming environment.
            </p>
            <p className="about__text">
              Our state-of-the-art facility is equipped with the latest diagnostic equipment 
              and staffed by a team of highly qualified veterinarians who are passionate 
              about animal health and well-being.
            </p>
            <div className="about__values">
              <div className="about__value">
                <span className="about__value-icon">❤️</span>
                <div>
                  <strong>Compassionate Care</strong>
                  <p>We treat every pet with love and gentle care</p>
                </div>
              </div>
              <div className="about__value">
                <span className="about__value-icon">🏆</span>
                <div>
                  <strong>Excellence</strong>
                  <p>Highest standards of veterinary medicine</p>
                </div>
              </div>
              <div className="about__value">
                <span className="about__value-icon">🔬</span>
                <div>
                  <strong>Innovation</strong>
                  <p>Latest equipment and modern techniques</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__image-side animate-on-scroll">
            <div className="about__image-placeholder">
              <div className="about__image-inner">
                <span className="about__image-icon">��</span>
                <p>MyVetClinic</p>
                <p>Since 2013</p>
              </div>
            </div>
            <div className="about__badge">
              <span className="about__badge-icon">⭐</span>
              <div>
                <strong>Top Rated</strong>
                <span>Veterinary Clinic</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__stats" ref={statsRef}>
          {stats.map((stat, i) => (
            <div key={i} className="about__stat animate-on-scroll">
              <strong className="about__counter-value">0{stat.suffix}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
