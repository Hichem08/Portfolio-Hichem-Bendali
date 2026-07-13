import { motion } from 'framer-motion'
import heroBackground from '../../../WhatsApp2.jpeg'

export default function Section1({ section }) {
  const heroTitle = section?.title || "We're proud to work with"
  const heroSubtitle = section?.content || 'a diverse range of companies.'

  return (
    <motion.section
      className="section section-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16)), url(${heroBackground})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
          marginTop: '120px',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '60px',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {['Rise', 'Hitech', 'Terra', 'hues', 'ther'].map((company, idx) => (
          <motion.div
            key={idx}
            className="company-logo"
            whileHover={{ scale: 1.1 }}
            style={{
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '24px', fontWeight: '600' }}>{company}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: false }}
        style={{
          marginTop: '120px',
          color: '#aaa',
          fontSize: '16px',
        }}
      >
        More than 200+ companies trusted us worldwide
      </motion.p>
    </motion.section>
  )
}
