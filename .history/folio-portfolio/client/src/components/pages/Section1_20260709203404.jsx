import { motion } from 'framer-motion'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si'
import { FaLayerGroup } from 'react-icons/fa6'
// Import useState and useEffect to handle responsive screen size checks
import { useState, useEffect } from 'react'
import heroBackground from '../../../ws1.jpeg'

export default function Section1({ section, onScrollToSection }) {
  // Static content - always use these, ignore any from Supabase
  const heroTitle = 'HICHEM BENDALI'
  const heroSubtitle = 'Full Stack Developer'
  
  // ------------------------------
  // RESPONSIVE STATE MANAGEMENT
  // ------------------------------
  // Track if we're on mobile/tablet/desktop to adjust sizes dynamically
  const [isMobile, setIsMobile] = useState(false) // <768px
  const [isTablet, setIsTablet] = useState(false) // 768-1024px
  const [isDesktop, setIsDesktop] = useState(true) // >1024px

  // useEffect to check screen size on load and when window resizes
  useEffect(() => {
    // Function to update state based on window width
    const checkScreenSize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
      setIsDesktop(width >= 1024)
    }

    // Check initial screen size
    checkScreenSize()

    // Add resize listener to update when screen changes
    window.addEventListener('resize', checkScreenSize)

    // Cleanup listener when component unmounts
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // ------------------------------
  // TECHNOLOGIES DATA
  // ------------------------------
  const technologies = [
    { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D' },
    { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#83CD29' },
    { name: 'Others', icon: FaLayerGroup, color: '#ffb86b' },
  ]

  // ------------------------------
  // RESPONSIVE STYLE HELPERS
  // ------------------------------
  // Get background size based on screen size
  const getBackgroundSize = () => {
    if (isMobile) return 'cover' // Mobile: cover entire screen without stretching
    if (isTablet) return '100% 100%' // Tablet: slight stretch
    return '100% 100%' // Desktop: full stretch
  }

  // Get grid columns for tech icons
  const getGridColumns = () => {
    if (isMobile) return 'repeat(2, 1fr)' // Mobile: 2 columns
    if (isTablet) return 'repeat(3, 1fr)' // Tablet: 3 columns
    return 'repeat(5, 1fr)' // Desktop: 5 columns
  }

  // Get icon container size
  const getIconContainerSize = () => {
    if (isMobile) return '60px' // Small on mobile
    if (isTablet) return '75px' // Medium on tablet
    return '95px' // Large on desktop
  }

  // Get icon size
  const getIconSize = () => {
    if (isMobile) return 28 // Small icon
    if (isTablet) return 36 // Medium icon
    return 49 // Large icon
  }

  // Get text sizes
  const getTitleFontSize = () => {
    if (isMobile) return '32px' // Small title
    if (isTablet) return '48px' // Medium title
    return '72px' // Large title
  }

  const getSubtitleFontSize = () => {
    if (isMobile) return '18px'
    if (isTablet) return '24px'
    return '32px'
  }

  const getTechNameSize = () => {
    if (isMobile) return '12px'
    if (isTablet) return '14px'
    return '18px'
  }

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
        backgroundSize: getBackgroundSize(), // Use responsive background size
        backgroundRepeat: 'no-repeat',
      }}
    >
      
      {/* ------------------------------
          HERO TITLE CONTENT
          ------------------------------ */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        style={{
          maxWidth: isMobile ? '100%' : '1100px', // Full width on mobile
          padding: isMobile ? '20px' : '40px 60px', // Smaller padding on mobile
          background: 'transparent',
          borderRadius: '24px',
          marginRight: isMobile ? '0' : '618px', // Remove right margin on mobile
          marginTop: isMobile ? '40px' : '90px', // Less top margin on mobile
          textAlign: 'center', // Center text on all devices
        }}
      >
        <h1 style={{ fontSize: getTitleFontSize(), lineHeight: '1.1' }}>
          {heroTitle}<br />
          <span style={{ 
            color: '#ff5722', 
            fontSize: getSubtitleFontSize(), 
            display: 'block', 
            marginTop: isMobile ? '8px' : '16px' 
          }}>
            {heroSubtitle}
          </span>
        </h1>
      </motion.div>

      {/* ------------------------------
          TECHNOLOGIES ICONS GRID
          ------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
        style={{
          marginTop: isMobile ? '20px' : '19px', // Less top margin on mobile
          display: 'grid',
          gridTemplateColumns: getGridColumns(), // Responsive grid columns
          gap: isMobile ? '20px' : '60px', // Smaller gap on mobile
          width: '100%',
          maxWidth: '1200px',
          padding: isMobile ? '0 20px' : '0', // Add padding on mobile
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
              height: isMobile ? '120px' : '200px', // Smaller height on mobile
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: isOthers ? 'pointer' : 'default',
              flexDirection: 'column',
              gap: isMobile ? '8px' : '16px', // Smaller gap on mobile
              marginTop: isMobile ? '20px' : '150px', // Less top margin on mobile
            }}
            onClick={() => isOthers && onScrollToSection && onScrollToSection('tech')}
          >
            {/* Icon Container - with floating animation */}
            <motion.div
              animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: idx * 0.15,
              }}
              style={{
                width: getIconContainerSize(), // Responsive container size
                height: getIconContainerSize(),
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
              {/* Rotating inner container for extra animation */}
              <motion.div
                animate={{ rotate: [0, 8, 0, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
              >
                <Icon size={getIconSize()} color={tech.color} /> {/* Responsive icon size */}
              </motion.div>
            </motion.div>
            {/* Tech name below icon - responsive font size */}
            <span style={{ 
              fontSize: getTechNameSize(), 
              fontWeight: '690', 
              color: '#ffffff' 
            }}>
              {tech.name}
            </span>
          </motion.div>
          )
        })}
      </motion.div>

      {/* ------------------------------
          WELCOME PARAGRAPH
          ------------------------------ */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: false }}
        style={{
          marginTop: isMobile ? '20px' : '5px',
          color: '#aaa',
          fontSize: isMobile ? '13px' : '16px', // Smaller font on mobile
          textAlign: 'center', // Center text on all devices
          padding: isMobile ? '0 20px' : '0', // Add padding on mobile
          lineHeight: '1.6', // Improve readability
        }}
      >
        {/* Fixed the typo: "Wlecome" → "Welcome" */}
        Welcome to My Portfolio, where I showcase my passion for crafting exceptional digital experiences.
      </motion.p>
    </motion.section>
  )
}
