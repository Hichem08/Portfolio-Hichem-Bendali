import { motion } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, 
  FaPhp, FaLaravel, FaDatabase, FaGitAlt, FaLinux, FaDocker, FaWindows 
} from 'react-icons/fa'
import { 
  SiTypescript, SiMongodb, SiTailwindcss, SiPostman, SiMysql, 
  SiExpress , SiOpenai , SiCodex, SiClaude, SiCursor, SiLovable, SiPerplexity, SiTrae
} from 'react-icons/si'
import { BiBookBookmark, BiTask, BiCodeAlt } from 'react-icons/bi'


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
      {name: 'Claude', icon: BiCodeAlt},
      {name: 'Cursor', icon: BiCodeAlt},
      {name: 'Lovable', icon: BiCodeAlt},
      {name: 'Perplexity', icon: BiCodeAlt},
      {name: 'Codex', icon: BiCodeAlt, },
      {name: 'Trae', icon: BiCodeAlt, },
      {name: 'Github Copilot', icon: BiCodeAlt, url: 'https://github.com/features/copilot'},
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
