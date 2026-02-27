import React from 'react'
import './Pricing.scss'

const categories = [
  {
    title: 'Consultations',
    icon: '👨‍⚕️',
    services: [
      { name: 'Initial Consultation', price: '500 UAH' },
      { name: 'Follow-up Visit', price: '300 UAH' },
      { name: 'Emergency Visit', price: '800 UAH' },
      { name: 'Online Consultation', price: '250 UAH' },
    ],
  },
  {
    title: 'Vaccinations',
    icon: '💉',
    services: [
      { name: 'Core Vaccine (Dog)', price: '350 UAH' },
      { name: 'Core Vaccine (Cat)', price: '300 UAH' },
      { name: 'Rabies Vaccination', price: '200 UAH' },
      { name: 'Full Vaccination Package', price: '900 UAH' },
    ],
  },
  {
    title: 'Surgery',
    icon: '🔪',
    services: [
      { name: 'Spay/Neuter (Cat)', price: '1500 UAH' },
      { name: 'Spay/Neuter (Dog)', price: '2500 UAH' },
      { name: 'Minor Surgery', price: '2000 UAH' },
      { name: 'Major Surgery', price: 'from 5000 UAH' },
    ],
  },
]

const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>Price List</h2>
          <p>Transparent pricing for all our veterinary services</p>
        </div>
        <div className="pricing__grid">
          {categories.map((cat, i) => (
            <div key={i} className="pricing__card animate-on-scroll">
              <div className="pricing__card-header">
                <span className="pricing__icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <ul className="pricing__list">
                {cat.services.map((item, j) => (
                  <li key={j} className="pricing__item">
                    <span className="pricing__item-name">{item.name}</span>
                    <span className="pricing__item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="pricing__note animate-on-scroll">
          * Prices may vary based on pet size and complexity. Contact us for a precise quote.
        </p>
      </div>
    </section>
  )
}

export default Pricing
