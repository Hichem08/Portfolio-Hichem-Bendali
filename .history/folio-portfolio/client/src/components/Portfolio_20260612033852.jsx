import { useState } from 'react'
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

  const heroSection =
    (apiSections || []).find((section) => section.type === 'hero') ||
    (apiSections || []).find((section) => section.order === 1)

  const sectionsByOrder = new Map((apiSections || []).map((section) => [section.order, section]))

  const sectionComponents = [
    <Section1 section={heroSection} />,
    <Section2 section={sectionsByOrder.get(2)} />,
    <Section3 section={sectionsByOrder.get(3)} />,
    <Section4 section={sectionsByOrder.get(4)} />,
    <Section5 section={sectionsByOrder.get(5)} />,
    <Section6 section={sectionsByOrder.get(6)} />,
    <Section7 section={sectionsByOrder.get(7)} />,
  ]

  return (
    <div className="portfolio-wrapper">
      <Header />
      <motion.div
        className="portfolio-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {sectionComponents.map((component, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {component}
          </motion.div>
        ))}
        <Footer />
      </motion.div>
    </div>
  )
}
