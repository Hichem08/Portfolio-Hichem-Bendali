import { motion } from 'framer-motion'
import { useState } from 'react'

// IMPORT YOUR IMAGES HERE
// For example:
import Cours from '../../assets/images/Cours.jpg'
import a from '../../assets/images/a.jpg'
import phone from '../../assets/images/phone.png'
import dash from '../../assets/images/dash.png'
import solar from '../../assets/images/solar.jpeg'
import solar1 from '../../assets/images/solar1.jpeg'
import solar2 from '../../assets/images/solar2.jpeg'
import Europe from '../../assets/images/Europe.jpg'
import logo from '../../assets/images/logo.jpg'

// import imageNameHerei from '../../assets/images/yourImage.jpg'
// Add more imports as needed

export default function Section3({ section }) {
  const heading = section?.title || 'FEATURED SERVICES.'
  const [activeCardIndex, setActiveCardIndex] = useState({ 0: 0, 1: 0, 2: 0 })

  // Programming language icons for floating animation
  const programmingIcons = [
    { id: 1, icon: '⚛️', label: 'React', x: 10, y: 20 },
    { id: 2, icon: '⚛️', label: 'React', x: 90, y: 25 },
    { id: 3, icon: '🐍', label: 'Python', x: 85, y: 15 },
    { id: 4, icon: '☕', label: 'JavaScript', x: 20, y: 75 },
    { id: 5, icon: '🟦', label: 'TypeScript', x: 75, y: 70 },
    { id: 6, icon: '🎨', label: 'CSS', x: 50, y: 10 },
    { id: 7, icon: '🦀', label: 'Rust', x: 15, y: 50 },
    { id: 8, icon: '🔵', label: 'Node.js', x: 80, y: 40 },
    { id: 9, icon: '⚡', label: 'Vue', x: 45, y: 60 },
    { id: 10, icon: '🟠', label: 'Angular', x: 30, y: 85 },
    { id: 11, icon: '🐬', label: 'PHP', x: 70, y: 25 },
  ]

  // Services data with your images
  const services = [
    {
      id: 0,
      title: 'Software Development',
      images: [
        // REPLACE THESE WITH YOUR SOFTWARE IMAGES
         phone,
        dash,
      ],
      link: '/software-details'
    },
    {
      id: 1,
      title: 'Graphic Design',
      images: [
        logo,
        Europe,
        // ADD YOUR THIRD IMAGE HERE
        // Cours,  // or another image
      ],
      link: '/graphic-details'
    },
    {
      id: 2,
      title: 'Solar Energy Panels Installation',
      images: [
        // REPLACE THESE WITH YOUR SOLAR IMAGES
         solar,
        solar1,
      ],
      link: '/solar-details'
    },
  ]

  // Floating animation variants
  const floatingVariants = (delay) => ({
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -20, 0],
      opacity: 1,
      transition: {
        duration: 4,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  })

  const handleNext = (cardId) => {
    const currentIndex = activeCardIndex[cardId]
    const nextIndex = (currentIndex + 1) % services[cardId].images.length
    setActiveCardIndex({ ...activeCardIndex, [cardId]: nextIndex })
  }

  const handlePrev = (cardId) => {
    const currentIndex = activeCardIndex[cardId]
    const prevIndex = currentIndex === 0 ? services[cardId].images.length - 1 : currentIndex - 1
    setActiveCardIndex({ ...activeCardIndex, [cardId]: prevIndex })
  }

  return (
    <motion.section
      className="section section-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Spider Web Background */}
      <svg
        className="spider-web-bg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.15,
        }}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <motion.defs>
          <motion.linearGradient
            id="webGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            animate={{
              x1: ['0%', '100%'],
              y1: ['0%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <stop offset="0%" stopColor="#ff5722" />
            <stop offset="100%" stopColor="#ff5722" stopOpacity="0.3" />
          </motion.linearGradient>
        </motion.defs>

        {/* Concentric circles */}
        <motion.circle
          cx="500"
          cy="500"
          r="100"
          fill="none"
          stroke="url(#webGradient)"
          strokeWidth="1"
          animate={{
            r: [100, 120, 100],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.circle
          cx="500"
          cy="500"
          r="250"
          fill="none"
          stroke="url(#webGradient)"
          strokeWidth="1"
          animate={{
            r: [250, 270, 250],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.2 }}
        />
        <motion.circle
          cx="500"
          cy="500"
          r="400"
          fill="none"
          stroke="url(#webGradient)"
          strokeWidth="1"
          animate={{
            r: [400, 420, 400],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.4 }}
        />

        {/* Radial lines */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const x1 = 500 + 50 * Math.cos(angle)
          const y1 = 500 + 50 * Math.sin(angle)
          const x2 = 500 + 450 * Math.cos(angle)
          const y2 = 500 + 450 * Math.sin(angle)
          return (
            <motion.line
              key={`line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#webGradient)"
              strokeWidth="1"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          )
        })}
      </svg>

      {/* Floating Programming Icons */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        {programmingIcons.map((item, idx) => (
          <motion.div
            key={item.id}
            className="floating-icon"
            style={{
              position: 'absolute',
              left: `${item.x}%`,
              top: `${item.y}%`,
              fontSize: '40px',
              zIndex: 1,
            }}
            variants={floatingVariants(idx * 0.3)}
            initial="initial"
            animate="animate"
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Services Grid with Carousels */}
       <div className="services-carousel-grid">
          {services.map((service, cardIdx) => (
            <motion.div
              key={service.id}
              className="service-carousel-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + cardIdx * 0.15 }}
              viewport={{ once: false }}
              whileHover={{ y: -15 }}
            >
              {/* Card Title */}
              <motion.h3
                className="carousel-card-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + cardIdx * 0.15 }}
              >
                {service.title}
              </motion.h3>

              {/* Image Carousel Container */}
              <div className="carousel-container">
                <motion.div
                  className="carousel-image-wrapper"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + cardIdx * 0.15 }}
                >
                  <motion.img
                    src={service.images[activeCardIndex[service.id]]}
                    alt={`${service.title} image ${activeCardIndex[service.id] + 1}`}
                    className="carousel-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Navigation Arrows */}
                <motion.button
                  className="carousel-arrow carousel-arrow-left"
                  onClick={() => handlePrev(service.id)}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous image"
                >
                  ← 
                </motion.button>

                <motion.button
                  className="carousel-arrow carousel-arrow-right"
                  onClick={() => handleNext(service.id)}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next image"
                >
                  →
                </motion.button>

                {/* Image Counter */}
                <motion.div
                  className="carousel-counter"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + cardIdx * 0.15 }}
                >
                  {activeCardIndex[service.id] + 1} / {service.images.length}
                </motion.div>
              </div>

              {/* Dots Indicator */}
              <div className="carousel-dots">
                {service.images.map((_, dotIdx) => (
                  <motion.button
                    key={dotIdx}
                    className={`dot ${activeCardIndex[service.id] === dotIdx ? 'active' : ''}`}
                    onClick={() => setActiveCardIndex({ ...activeCardIndex, [service.id]: dotIdx })}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to image ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* View Details Button */}
              <motion.a
                href={service.link}
                className="carousel-button"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + cardIdx * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(255, 87, 34, 0.6)',
                  backgroundColor: '#ff5722',
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Details
                <motion.span
                  className="button-arrow"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  ↗
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}