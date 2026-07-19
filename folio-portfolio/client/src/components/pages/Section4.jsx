import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, 
  FaPhp, FaLaravel, FaDatabase, FaGitAlt, FaLinux, FaDocker, FaWindows , FaGithub
} from 'react-icons/fa'
import { 
  SiTypescript, SiMongodb, SiTailwindcss, SiPostman, SiMysql, 
  SiExpress , SiOpenai,  SiAnthropic,
} from 'react-icons/si'
import { BiBookBookmark, BiTask, BiCodeAlt , BiSearch} from 'react-icons/bi'
import { VscCode } from 'react-icons/vsc'


export default function Section4({ section }) {
  const title = section?.title || 'TECH STACK'

  // Responsive state management
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const getTechResponsive = () => {
  const width = window.innerWidth;

  if (width <= 430)
    return {
      sectionPadding: '0 6px',
      groupGap: '1.2rem',
      title: '1.2rem',
      icon: '1.7rem',
      text: '0.55rem',
      iconGap: '3px',
      gridGap: '0.7rem',
      titleMargin: '1.2rem',
    };

  if (width <= 360)
    return {
      sectionPadding: '0 8px',
      groupGap: '1.5rem',
      title: '1rem',
      icon: '1.35rem',
      text: '0.60rem',
      iconGap: '4px',
      gridGap: '0.8rem',
      titleMargin: '0.9rem',
    };

  if (width <= 375)
    return {
      sectionPadding: '0 10px',
      groupGap: '1.7rem',
      title: '1.0rem',
      icon: '1.25rem',
      text: '0.65rem',
      iconGap: '4px',
      gridGap: '0.9rem',
      titleMargin: '1rem',
    };

  if (width <= 390)
    return {
      sectionPadding: '0 1px',
      groupGap: '1.0rem',
      title: '0,5rem',
      icon: '0.2rem',
      text: '0.20rem',
      iconGap: '1px',
      gridGap: '1rem',
      titleMargin: '1rem',
    };

  return {
    sectionPadding: '0 10px',
    groupGap: '2rem',
    title: '1.125rem',
    icon: '1.75rem',
    text: '0.75rem',
    iconGap: '4px',
    gridGap: '1rem',
    titleMargin: '1rem',
  };
};

const techResponsive = getTechResponsive();


  const techStack = {
    frontend: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'Bootstrap', icon: FaBootstrap },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
      { name: 'React Native', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss }
    ],
    backend: [
      { name: 'PHP', icon: FaPhp },
      { name: 'Laravel', icon: FaLaravel },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress }
    ],
    databases: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'SQL', icon: FaDatabase },
      { name: 'Oracle', icon: FaDatabase },
      { name: 'MongoDB', icon: SiMongodb }
    ],
    others: [
      { name: 'Postman', icon: SiPostman },
      { name: 'Git', icon: FaGitAlt },
      { name: 'Linux', icon: FaLinux },
      { name: 'MsProject', icon: BiTask },
      { name: 'UML', icon: BiBookBookmark },
      { name: 'Merise', icon: BiCodeAlt },
      { name: 'Docker', icon: FaDocker },
      { name: 'Agiles', icon: BiTask },
      { name: 'Windows Server', icon: FaWindows }
    ],
    AI: [
      { name: 'ChatGPT', icon: SiOpenai},
      {name: 'Claude', icon: SiAnthropic, url: 'https://openai.com/product/Claude'},
      {name: 'Cursor', icon: VscCode, url: 'https://www.cursordev.com/'},
      {name: 'Lovable', icon: BiCodeAlt, url: 'https://www.lovable.ai/'},
      {name: 'Perplexity', icon: BiSearch, url: 'https://www.perplexity.ai/'},
      {name: 'Codex', icon: SiOpenai, url: 'https://openai.com/product/codex'},
      {name: 'Trae', icon: SiOpenai, url: 'https://www.trae.com/'},
      {name: 'Github Copilot', icon: FaGithub, url: 'https://github.com/features/copilot'},
    ]
  }

  const TechIcon = ({ tech, index, isMobile }) => {
    const IconComponent = tech.icon
    return (
      <motion.div
        className="tech-icon-container"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.2, rotate: 5 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? techResponsive.iconGap : '8px' }}
      >
        <IconComponent className="tech-icon" style={{ fontSize: isMobile
  ? techResponsive.icon
  : '2.5rem' }} />
        <span style={{ color: '#fff', fontSize: isMobile
  ? techResponsive.text
  : '0.875rem', textAlign: 'center' }}>{tech.name}</span>
      </motion.div>
    )
  }

  // Tech Group component that works for both layouts
  const TechGroup = ({ title, techs, delay, isMobile }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: false }}
    >
      <h3 
        className="tech-card-title" 
        style={{ 
          color: '#ff5722', 
          marginBottom: isMobile ? techResponsive.titleMargin : '1.5rem', 
          fontSize: isMobile ? techResponsive.title : '1.5rem',
          textAlign: 'center'
        }}
      >
        {title}
      </h3>
      <div 
        className="tech-icons-grid" 
        style={{ 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          gap: isMobile ? '1rem' : '1.5rem'
        }}
      >
        {techs.map((tech, idx) => (
          <TechIcon key={idx} tech={tech} index={idx} isMobile={isMobile} />
        ))}
      </div>
    </motion.div>
  )

  return (
    <motion.section
      className="section section-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      viewport={{ once: true, amount: 0.2 }}
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
          opacity: isMobile ? 0.3 : 0.40,
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
          r={isMobile ? 60 : 100}
          fill="none"
          stroke="url(#webGradient)"
          strokeWidth="1"
          animate={{
            r: isMobile ? [60, 80, 60] : [100, 120, 100],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.circle
          cx="500"
          cy="500"
          r={isMobile ? 150 : 250}
          fill="none"
          stroke="url(#webGradient)"
          strokeWidth="1"
          animate={{
            r: isMobile ? [150, 170, 150] : [250, 270, 250],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.2 }}
        />
        <motion.circle
          cx="500"
          cy="500"
          r={isMobile ? 250 : 400}
          fill="none"
          stroke="url(#webGradient)"
          strokeWidth="1"
          animate={{
            r: isMobile ? [250, 270, 250] : [400, 420, 400],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.4 }}
        />

        {/* Radial lines */}
        {Array.from({ length: isMobile ? 8 : 12 }).map((_, i) => {
          const angle = (i / (isMobile ? 8 : 12)) * Math.PI * 2
          const x1 = 500 + (isMobile ? 30 : 50) * Math.cos(angle)
          const y1 = 500 + (isMobile ? 30 : 50) * Math.sin(angle)
          const x2 = 500 + (isMobile ? 280 : 450) * Math.cos(angle)
          const y2 = 500 + (isMobile ? 280 : 450) * Math.sin(angle)
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
        className="tech-stack-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
        style={{ padding: isMobile ? '0 10px' : '0' }}
      >
        {isMobile ? (
          // MOBILE/TABLET LAYOUT: Vertical groups one under another
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <TechGroup title="Frontend" techs={techStack.frontend} delay={0.2} isMobile={isMobile} />
            <TechGroup title="Backend" techs={techStack.backend} delay={0.3} isMobile={isMobile} />
            <TechGroup title="Databases" techs={techStack.databases} delay={0.4} isMobile={isMobile} />
            <TechGroup title="Others" techs={techStack.others} delay={0.5} isMobile={isMobile} />
            <TechGroup title="AI" techs={techStack.AI} delay={0.6} isMobile={isMobile} />
          </div>
        ) : (
          // DESKTOP LAYOUT (unchanged)
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {/* Top row: Frontend, Backend, Databases */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
              <TechGroup title="Frontend" techs={techStack.frontend} delay={0.2} isMobile={isMobile} />
              <TechGroup title="Backend" techs={techStack.backend} delay={0.3} isMobile={isMobile} />
              <TechGroup title="Databases" techs={techStack.databases} delay={0.4} isMobile={isMobile} />
            </div>

            {/* Bottom row: Others */}
            <TechGroup title="Others" techs={techStack.others} delay={0.5} isMobile={isMobile} />

            {/* Bottom row: AI */}
            <TechGroup title="AI" techs={techStack.AI} delay={0.6} isMobile={isMobile} />
          </div>
        )}
      </motion.div>
    </motion.section>
  )
}
