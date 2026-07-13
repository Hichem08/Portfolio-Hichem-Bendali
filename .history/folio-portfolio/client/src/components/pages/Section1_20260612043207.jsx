import { motion } from 'framer-motion'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si'
import { FaLayerGroup } from 'react-icons/fa6'
import heroBackground from '../../../ws1.jpeg'

export default function Section1({ section }) {
  const heroTitle = section?.title && section.title !== 'Hero Section' ? section.title : 'HICHEM BENDALI'
  const heroSubtitle = section?.content && section.content !== "We're proud to work with a diverse range of companies." ? section.content : 'Full Stack Developer'
  const technologies = [
    { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D' },
    { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#83CD29' },
    { name: 'Others', icon: FaLayerGroup, color: '#ffb86b' },
  ]

  return (
    <motion.section
      className="section section-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16)), url(${heroBackground})`,
        backgroundPosition: 'center center',
        backgroundSize: '100% 85%',
        backgroundRepeat: 'no-repeat',
       
      }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        style={{
          maxWidth: '1100px',
          padding: '40px 60px',
          background: 'transparent',
          borderRadius: '24px',
          marginRight: '618px',
        }}
      >
        <h1>
          {heroTitle}<br />
          <span>{heroSubtitle}</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
        style={{
          marginTop: '19px',
          display: 'grid',
          
          gap: '60px',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {technologies.map((tech, idx) => {
          const Icon = tech.icon

          return (
          <motion.div
            key={idx}
            className="company-logo"
            whileHover={{ scale: 1.1 }}
            style={{
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              cursor: 'pointer',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <Icon size={42} color={tech.color} />
            <span style={{ fontSize: '18px', fontWeight: '600' }}>{tech.name}</span>
          </motion.div>
          )
        })}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: false }}
        style={{
          marginTop: '120px',
          color: '#aaa',
          fontSize: '16px',
        }}
      >
        More than 200+ companies trusted us worldwide
      </motion.p>
    </motion.section>
  )
}
