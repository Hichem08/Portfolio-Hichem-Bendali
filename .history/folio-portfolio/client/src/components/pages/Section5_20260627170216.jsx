import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import a from '../../assets/images/a.jpg'
import after from '../../assets/images/after.jpg'
import Cours from '../../assets/images/Cours.jpg'

export default function Section5({ section }) {
  const title = section?.title || 'GRAPHIC DESIGN'
  const [photoshopIndex, setPhotoshopIndex] = useState(0)
  const [illustratorIndex, setIllustratorIndex] = useState(0)

  // Sample project images - replace with your actual images
  const photoshopProjects = [
    Cours,
    after,
    a,
  ]

  const illustratorProjects = [
    a,
    a,
    a
  ]

  const ProjectCarousel = ({ projects, currentIndex, setCurrentIndex, title }) => {
    const nextProject = () => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }

    const prevProject = () => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    }

    return (
      <motion.div
        className="tech-card animated-border"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <h3 className="tech-card-title">{title}</h3>
        <div className="carousel-container">
          <button className="carousel-arrow carousel-arrow-left" onClick={prevProject}>
            ‹
          </button>
          
          <div className="carousel-image-wrapper">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={projects[currentIndex]}
                alt={`${title} Project ${currentIndex + 1}`}
                className="carousel-image"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
          
          <button className="carousel-arrow carousel-arrow-right" onClick={nextProject}>
            ›
          </button>
        </div>
        
        <div className="carousel-dots">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
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
          {/* Adobe Photoshop Div (Left) */}
          <ProjectCarousel
            projects={photoshopProjects}
            currentIndex={photoshopIndex}
            setCurrentIndex={setPhotoshopIndex}
            title="Adobe Photoshop"
          />

          {/* Adobe Illustrator Div (Right) */}
          <ProjectCarousel
            projects={illustratorProjects}
            currentIndex={illustratorIndex}
            setCurrentIndex={setIllustratorIndex}
            title="Adobe Illustrator"
          />
        </div>
      </motion.div>
    </motion.section>
  )
}
