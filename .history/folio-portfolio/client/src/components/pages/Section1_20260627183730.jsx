import { motion } from 'framer-motion'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si'
import { FaLayerGroup } from 'react-icons/fa6'
import heroBackground from '../../../ws1.jpeg'

export default function Section1({ section, onScrollToSection }) {
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
          marginTop: '90px',
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
          const isOthers = tech.name === 'Others'

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
              cursor: isOthers ? 'pointer' : 'default',
              flexDirection: 'column',
              gap: '16px',
              marginTop: '150px',
            }}
            onClick={() => isOthers && onScrollToSection && onScrollToSection('tech')}
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
