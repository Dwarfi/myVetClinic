import React from 'react'
import './Gallery.scss'

const galleryItems = [
  { label: 'Modern Operating Room', color: '#2A9D8F', icon: '🏥', size: 'large' },
  { label: 'Diagnostic Equipment', color: '#264653', icon: '🔬', size: 'small' },
  { label: 'Comfortable Waiting Area', color: '#E76F51', icon: '🛋️', size: 'small' },
  { label: 'Happy Pets Recovery', color: '#F4A261', icon: '🐕', size: 'medium' },
  { label: 'Vaccination Room', color: '#1F7A6E', icon: '💉', size: 'medium' },
  { label: 'Expert Veterinarians', color: '#3DBFAD', icon: '👩‍⚕️', size: 'small' },
  { label: 'Grooming Studio', color: '#E9C46A', icon: '✂️', size: 'small' },
  { label: 'Pet Care at Its Best', color: '#457B9D', icon: '❤️', size: 'large' },
]

const Gallery = () => {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>Our Gallery</h2>
          <p>Take a look at our modern facilities and happy patients</p>
        </div>
        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`gallery__item gallery__item--${item.size} animate-on-scroll`}
              style={{ background: item.color }}
            >
              <div className="gallery__overlay">
                <span className="gallery__icon">{item.icon}</span>
                <p className="gallery__label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
