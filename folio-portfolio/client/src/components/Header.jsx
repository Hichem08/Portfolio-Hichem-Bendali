import { motion } from 'framer-motion'
import cvPdf from '../assets/diplomas/CV-ATS 2025 (1).pdf'

export default function Header({ onNavigate }) {
  const handleClick = (e, id) => {
    if (e && e.preventDefault) e.preventDefault()
    if (onNavigate) {
      onNavigate(id)
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'transparent',
        backdropFilter: 'blur(0px)',
      }}
    >
      <div className="nav-logo">Portfolio</div>
      <ul className="nav-menu">
        <li><a href="#home" onClick={(e) => handleClick(e, 'home')}>HOME</a></li>
        <li><a href="#about" onClick={(e) => handleClick(e, 'about')}>ABOUT</a></li>
        <li><a href="#services" onClick={(e) => handleClick(e, 'services')}>SERVICES</a></li>
        <li><button onClick={() => handleClick(null, 'contact')}>CONTACT Me !</button></li>
      </ul>
      <a href={cvPdf} download="Hichem_Bendali_CV.pdf" className="nav-cta">
        Download CV
      </a>

    </motion.nav>
  )
}
