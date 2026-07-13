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
        transition={{ duration: 0.3, delay: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        
        <div className={`solar-grid ${isReversed ? 'reversed' : ''}`}>
          {/* Image Div */}
          <motion.div
            className="tech-card animated-border"
            whileHover={{ scale: 1.01 }}
          >
            <img src={item.image} alt={item.title} className="solar-image" />
          </motion.div>
          

          {/* Text Div */}
          <div className="solar-text-container">
            <h3 className="solar-title">{item.title}</h3>
            <p className="solar-description">{item.description}</p>
          </div>
        </div>
      </motion.div>
      
    )
    
  }

  return (
    <motion.section
      className="section section-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      
      <motion.div
        className="solar-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0 }}
        viewport={{ once: true, amount: 0.2 }}
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
