import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <div className="nav-logo" style={{ color: '#ff5722' }}>folio</div>
        </div>

        <div className="footer-section">
          <h3>CONTACT</h3>
          <p style={{ color: '#fff', marginBottom: '10px' }}>5919 Trussville Crossings Pkwy, Birmingham</p>
          <a href="mailto:Hello@webfolio.com">Hello@webfolio.com</a>
          <a href="tel:+2456343245">+2 456 (343) 24 45</a>
        </div>

        <div className="footer-section">
          <h3>USEFUL LINKS</h3>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-section">
          <h3>NEWSLETTER</h3>
          <input type="email" placeholder="Your Email" />
          <div className="footer-social">
            <a href="#facebook">f</a>
            <a href="#dribbble">◉</a>
            <a href="#linkedin">in</a>
            <a href="#instagram">@</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
