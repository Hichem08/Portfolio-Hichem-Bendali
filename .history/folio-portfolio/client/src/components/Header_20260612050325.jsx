import { motion } from 'framer-motion'
import heroBackground from '../../ws1.jpeg'

export default function Header() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${heroBackground})`,
        backgroundPosition: 'center center',
        backgroundSize: '100',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="nav-logo">folio</div>
      <ul className="nav-menu">
        <li><a href="#demos">DEMOS</a></li>
        <li><a href="#pages">PAGES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#blogs">BLOGS</a></li>
        <li><a href="#contact">CONTACT US</a></li>
      </ul>
      <button className="nav-cta">Let's contact</button>
    </motion.nav>
  )
}
