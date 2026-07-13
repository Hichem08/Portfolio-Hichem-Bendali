import { motion } from 'framer-motion'
import solar from '../../assets/images/solar.jpeg'
import solar1 from '../../assets/images/solar1.jpeg'
import solar2 from '../../assets/images/solar2.jpeg'

export default function Section6({ section }) {
  const title = section?.title || 'SOLAR ENERGY'

  const solarItems = [
    {
      image: solar,
      title: 'Solar Panel Installation',
      description: 'Professional installation of photovoltaic solar panels for residential and commercial properties. Maximize your energy production with our expertly designed systems.',
      

    },
    {
      image: solar1,
      title: 'Energy Storage Solutions',
      description: 'Advanced battery storage systems to store excess solar energy. Ensure uninterrupted power supply even during grid outages with our cutting-edge technology.'
    },
    {
      image: solar2,
      title: 'Solar Maintenance & Repair',
      description: 'Comprehensive maintenance services to keep your solar system operating at peak efficiency. Regular inspections and repairs for long-lasting performance.'
    }
  ]

  const SolarItem = ({ item, index }) => {
    const isReversed = index === 1 // Second item reversed (text left, image right)
    
    return (
      
      <motion.div
        className="solar-item-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: false }}
      >
        
        <div className={`solar-grid ${isReversed ? 'reversed' : ''}`}>
          {/* Image Div */}
          <motion.div
            className="tech-card animated-border"
            whileHover={{ scale: 1.02 }}
          >
            <img src={item.image} alt={item.title} className="solar-image" />
          </motion.div>
          

          
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
        className="solar-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
      >
        <div className="solar-items-wrapper">
          {solarItems.map((item, idx) => (
            <SolarItem key={idx} item={item} index={idx} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
