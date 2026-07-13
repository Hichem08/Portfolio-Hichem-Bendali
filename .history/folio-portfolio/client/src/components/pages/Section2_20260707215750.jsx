import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa6'

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/hichem-bendali-603605158', color: '#0A66C2' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/hichem.bendali', color: '#E4405F' },
  { name: 'WhatsApp', icon: FaWhatsapp, url: 'whatsapp://send?phone=+213541820051', color: '#25D366' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Hichem08', color: '#ffffff' },
]

// Permanent images: import from assets and set `src`, e.g. import diplomaAec from '../../assets/diplomas/aec.jpg'
const initialDiplomaImages = [
  { src: null, alt: 'AEC Diploma - Cégep du Canada' },
  { src: null, alt: "Bachelor's Degree - 3IL Limoges" },
  { src: null, alt: 'Solar Energy Technician Certificate' },
  {src: null, alt: 'Graphic Design Certificate' },
]


const DIPLOMAS_STORAGE_KEY = 'portfolio-diploma-images'

const defaultAboutParagraphs = [
  'I am a passionate Full-Stack Developer experienced in building modern web and mobile applications using technologies such as JavaScript, React, and Node.js. I focus on creating scalable, efficient, and user-centered digital solutions from concept to deployment.',
  'I also have a strong background in Graphic Design, which helps me craft clean and intuitive user interfaces with a strong attention to detail and user experience.',
  'In addition to my development skills, I hold an AEC diploma from Cégep du Canada and a Bachelor\'s degree in Web and Software Development from 3IL Limoges. I am also a certified Solar Energy Technician, specialized in the installation and maintenance of photovoltaic solar panel systems.',
  'I am fluent in English, French, and Arabic, and I am always eager to contribute to innovative projects in technology and renewable energy.',
]

function loadStoredDiplomas() {
  try {
    const stored = localStorage.getItem(DIPLOMAS_STORAGE_KEY)
    if (!stored) return initialDiplomaImages

    const parsed = JSON.parse(stored)
    if (!Array.isArray(parsed)) return initialDiplomaImages

    return initialDiplomaImages.map((diploma, idx) => ({
      ...diploma,
      src: parsed[idx]?.src ?? diploma.src,
    }))
  } catch {
    return initialDiplomaImages
  }
}

export default function Section2({ section }) {
  const imageUrl = section?.image_url || 'https://via.placeholder.com/500x600/2a2a2a/666?text=Portfolio+Project'
  const aboutParagraphs = defaultAboutParagraphs

  const [diplomas, setDiplomas] = useState(loadStoredDiplomas)
  const [activeDiploma, setActiveDiploma] = useState(null)
  const [pendingIndex, setPendingIndex] = useState(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    localStorage.setItem(
      DIPLOMAS_STORAGE_KEY,
      JSON.stringify(diplomas.map(({ src }) => ({ src })))
    )
  }, [diplomas])

  const openFilePicker = (index) => {
    setPendingIndex(index)
    fileInputRef.current?.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file == null || pendingIndex == null) return

    const reader = new FileReader()
    reader.onload = () => {
      setDiplomas((current) =>
        current.map((diploma, idx) =>
          idx === pendingIndex ? { ...diploma, src: reader.result } : diploma
        )
      )
      setPendingIndex(null)
    }
    reader.readAsDataURL(file)
    event.target.value = ''
  }

  const handleDiplomaClick = (diploma, index) => {
    if (diploma.src) {
      setActiveDiploma(diploma)
      return
    }
    openFilePicker(index)
  }

  return (
    <motion.section
      className="section section-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
    >
      <div className="section-content">
        <div className="about-column">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            animate={{
              boxShadow: [
                '0 20px 50px rgba(255, 87, 34, 0.18)',
                '0 24px 60px rgba(255, 87, 34, 0.18)',
                '0 20px 50px rgba(255, 87, 34, 0.18)',
                '0 24px 60px rgba(255, 87, 34, 0.18)',
              ],
            }}
            whileHover={{ scale: 1.01, y: -2 }}
          >
            <motion.div
              className="about-card-glow"
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: false }}
            >
              About <span>Me</span>
            </motion.h2>
            <div className="about-card-slider">
              <div className="about-card-text">
                {aboutParagraphs.map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + idx * 0.08 }}
                    viewport={{ once: false }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-footer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            viewport={{ once: false }}
          >
            <div className="about-footer-social">
              <span className="about-footer-label">My Social Media</span>
              <div className="social-links">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon

                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="social-link-btn"
                      whileHover={{ scale: 1.12, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + idx * 0.08 }}
                      viewport={{ once: false }}
                    >
                      <Icon size={28} color={link.color} />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div className="diplomas-section">
              <h3 className="diplomas-title">My Diplômes</h3>
              <motion.div className="diplomas-card" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                {diplomas.map((diploma, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`diploma-slot${diploma.src ? ' has-image' : ''}`}
                    title={diploma.src ? `View ${diploma.alt}` : `Add ${diploma.alt}`}
                    onClick={() => handleDiplomaClick(diploma, idx)}
                  >
                    {diploma.src ? (
                      <img src={diploma.src} alt={diploma.alt} />
                    ) : (
                      <span className="diploma-placeholder">
                        Click to
                        <br />
                        add photo
                      </span>
                    )}
                  </button>
                ))}
              </motion.div>
              <p className="diplomas-hint">Click a photo to view it</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="section-image"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
          style={{ zIndex: 10 }}
        >
          <img src={imageUrl} alt="About me" />
        </motion.div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="diploma-file-input"
        onChange={handleFileChange}
      />

      <AnimatePresence>
        {activeDiploma && (
          <motion.div
            className="diploma-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDiploma(null)}
          >
            <motion.div
              className="diploma-lightbox-content"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="diploma-lightbox-close"
                aria-label="Close"
                onClick={() => setActiveDiploma(null)}
              >
                ×
              </button>
              <img src={activeDiploma.src} alt={activeDiploma.alt} />
              <p>{activeDiploma.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
