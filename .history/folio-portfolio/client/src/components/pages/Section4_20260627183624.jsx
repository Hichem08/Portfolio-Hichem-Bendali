import { motion } from 'framer-motion'
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

  const TechIcon = ({ tech, index }) => {
    const IconComponent = tech.icon
    return (
      <motion.div
        className="tech-icon-container"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.2, rotate: 5 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
      >
        <IconComponent className="tech-icon" style={{ fontSize: '2.5rem' }} />
        <span style={{ color: '#fff', fontSize: '0.875rem', textAlign: 'center' }}>{tech.name}</span>
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
          opacity: 0.70,
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
        className="tech-stack-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {/* Top row: Frontend, Backend, Databases */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <h3 className="tech-card-title" style={{ color: '#ff5722', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Frontend</h3>
              <div className="tech-icons-grid">
                {techStack.frontend.map((tech, idx) => (
                  <TechIcon key={idx} tech={tech} index={idx} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <h3 className="tech-card-title" style={{ color: '#ff5722', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Backend</h3>
              <div className="tech-icons-grid">
                {techStack.backend.map((tech, idx) => (
                  <TechIcon key={idx} tech={tech} index={idx} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <h3 className="tech-card-title" style={{ color: '#ff5722', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Databases</h3>
              <div className="tech-icons-grid">
                {techStack.databases.map((tech, idx) => (
                  <TechIcon key={idx} tech={tech} index={idx} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom row: Others */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="tech-card-title" style={{ color: '#ff5722', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Others</h3>
            <div className="tech-icons-grid" style={{ flexWrap: 'nowrap', justifyContent: 'center' }}>
              {techStack.others.map((tech, idx) => (
                <TechIcon key={idx} tech={tech} index={idx} />
              ))}
            </div>
          </motion.div>


{/* Bottom row: Others */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="tech-card-title" style={{ color: '#ff5722', marginBottom: '1.5rem', fontSize: '1.5rem' }}>AI</h3>
            <div className="tech-icons-grid" style={{ flexWrap: 'nowrap', justifyContent: 'center' }}>
              {techStack.AI.map((tech, idx) => (
                <TechIcon key={idx} tech={tech} index={idx} />
              ))}
            </div>
          </motion.div>


        </div>
      </motion.div>
    </motion.section>
  )
}
