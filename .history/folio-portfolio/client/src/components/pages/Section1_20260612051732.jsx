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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${heroBackground})`,
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%', 
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
          gridTemplateColumns: 'repeat(5, 1fr)',
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
            whileHover={{ scale: 1.06, y: -6 }}
            style={{
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexDirection: 'column',
              gap: '16px',
              marginTop: '190px',
            }}
          >
            <motion.div
              animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: idx * 0.15,
             
              }}
              style={{
                width: '95px',
                height: '95px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.28)',
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.06) 58%, rgba(0, 0, 0, 0.18) 100%)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35), inset 0 2px 10px rgba(255, 255, 255, 0.22)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(2px)',
               
              }}
            >
              <motion.div
                animate={{ rotate: [0, 8, 0, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 , }}
              >
                <Icon size={49} color={tech.color} />
              </motion.div>
            </motion.div>
            <span style={{ fontSize: '18px', fontWeight: '690', }}>{tech.name}</span>
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
          marginTop: '50px',
          color: '#aaa',
          fontSize: '16px',
        }}
      >
        Wlecome to My Portfolio, where I showcase my passion for crafting exceptional digital experiences.
      </motion.p>
    </motion.section>
  )
}
