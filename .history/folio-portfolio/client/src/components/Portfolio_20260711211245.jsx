import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import Section1 from './pages/Section1'
import Section2 from './pages/Section2'
import Section3 from './pages/Section3'
import Section4 from './pages/Section4'
import Section5 from './pages/Section5'
import Section6 from './pages/Section6'
import Section7 from './pages/Section7'
import Footer from './Footer'

export default function Portfolio({ sections: apiSections }) {
  const [scrollIndex, setScrollIndex] = useState(0)
  const containerRef = useRef(null)

  const heroSection =
    (apiSections || []).find((section) => section.type === 'hero') ||
    (apiSections || []).find((section) => section.order === 1)

  const sectionsByOrder = new Map((apiSections || []).map((section) => [section.order, section]))

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id)
    const container = containerRef.current
    
    if (element && container) {
      const elementTop = element.offsetTop
      container.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      })
    }
  }

  const sectionComponents = [
    { id: 'home', component: <Section1 section={heroSection} onScrollToSection={handleScrollToSection} /> },
    { id: 'about', component: <Section2 section={sectionsByOrder.get(2)} /> },
    { id: 'services', component: <Section3 section={sectionsByOrder.get(3)} onScrollToSection={handleScrollToSection} /> },
    { id: 'tech', component: <Section4 section={sectionsByOrder.get(4)} /> },
    { id: 'graphic', component: <Section5 section={sectionsByOrder.get(5)} /> },
    { id: 'solar', component: <Section6 section={sectionsByOrder.get(6)} /> },
    { id: 'contact', component: <Section7 section={sectionsByOrder.get(7)} /> },
  ]

  return (
    <div className="portfolio-wrapper">
      <Header onNavigate={handleScrollToSection} />
      <motion.div
        ref={containerRef}
        className="portfolio-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {sectionComponents.map((section, index) => (
          <motion.div
            key={index}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {section.component}
          </motion.div>
        ))}
        <Footer />
      </motion.div>
    </div>
  )
}
