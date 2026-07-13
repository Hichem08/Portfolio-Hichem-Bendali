import { motion } from 'framer-motion'

export default function Header() {
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
        <li><a href="#demos">HOME</a></li>
        <li><a href="#pages">ABOUT</a></li>
        <li><a href="#portfolio">SERVICES</a></li>
        <li><a href="#blogs"></a></li>
        <li><a href="#contact">CONTACT Me !</a></li>
      </ul>
      <button className="nav-cta">Let's contact</button>

    </motion.nav>
  )
}
