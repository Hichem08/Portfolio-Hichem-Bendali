import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import a from '../../assets/images/a.jpg'
import after from '../../assets/images/after.jpg'
import Cours from '../../assets/images/Cours.jpg'

export default function Section5({ section }) {
  const title = section?.title || 'GRAPHIC DESIGN'
  
  const [carouselIndices, setCarouselIndices] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0
  })

  // Sample projects for each card
  const cards = [
    {
      id: 0,
      title: "Adobe Photoshop",
      projects: [Cours, after, a]
    },
    {
      id: 1,
      title: "Adobe Illustrator",
      projects: [a, Cours, after]
    },
    {
      id: 2,
      title: "Web Design",
      projects: [after, a, Cours]
    },
    {
      id: 3,
      title: "UI/UX Design",
      projects: [Cours, a, after]
    },
    {
      id: 4,
      title: "Branding",
      projects: [a, after, Cours]
    },
    {
      id: 5,
      title: "Creative Direction",
      projects: [after, Cours, a]
    }
  ]

  const nextProject = (cardId) => {
    setCarouselIndices(prev => ({
      ...prev,
      [cardId]: (prev[cardId] + 1) % cards[cardId].projects.length
    }))
  }

  const prevProject = (cardId) => {
    setCarouselIndices(prev => ({
      ...prev,
      [cardId]: (prev[cardId] - 1 + cards[cardId].projects.length) % cards[cardId].projects.length
    }))
  }

  const setIndex = (cardId, index) => {
    setCarouselIndices(prev => ({
      ...prev,
      [cardId]: index
    }))
  }

  const ProjectCard = ({ card, cardId }) => {
    const currentIndex = carouselIndices[cardId]
    const currentImage = card.projects[currentIndex]

    return (
      <motion.div
        className="tech-card animated-border"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: cardId * 0.1 }}
        viewport={{ once: false }}
      >
        <h3 className="tech-card-title">{card.title}</h3>
        
        <div className="carousel-container">
          <button 
            className="carousel-arrow carousel-arrow-left" 
            onClick={() => prevProject(cardId)}
            aria-label="Previous project"
          >
            ‹
          </button>
          
          <div className="carousel-image-wrapper">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentImage}
                alt={`${card.title} Project ${currentIndex + 1}`}
                className="carousel-image"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
          
          <button 
            className="carousel-arrow carousel-arrow-right" 
            onClick={() => nextProject(cardId)}
            aria-label="Next project"
          >
            ›
          </button>
        </div>
        
        <div className="carousel-dots">
          {card.projects.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setIndex(cardId, idx)}
            />
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.section
      className="section section-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
    >
      <motion.div
        className="graphic-design-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
      >
        <div className="graphic-design-grid">
          {cards.map((card) => (
            <ProjectCard key={card.id} card={card} cardId={card.id} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}