import { motion } from 'framer-motion'

export default function Section3({ section }) {
  const heading = section?.title || 'FEATURED SERVICES.'
  const description = section?.content || 'We always ensure that it combines a clean and beautiful visual design.'

  return (
    <motion.section
      className="section section-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
        style={{ alignSelf: 'flex-start', marginBottom: '40px' }}
      >
        <div className="section-title">OUR SPECIALIZE</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <h2 style={{ fontSize: '72px', marginBottom: '80px' }}>
          <span style={{ color: '#ff5722' }}>{heading}</span>
        </h2>

        <div className="services-grid">
          {[
            {
              icon: '△',
              title: 'UI/UX Design',
              tags: ['UI/UX', 'DEVELOPMENT'],
              description: 'We always ensure that it combines a clean and beautiful visual design.'
            },
            {
              icon: '◇',
              title: 'Brand Strategy',
              tags: ['UI/UX', 'DEVELOPMENT'],
              description: 'We always ensure that it combines a clean and beautiful visual design.'
            },
            {
              icon: '⊟',
              title: 'SEO / Marketing',
              tags: ['UI/UX', 'DEVELOPMENT'],
              description: 'We always ensure that it combines a clean and beautiful visual design.'
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span key={i} className="service-tag">{tag}</span>
                ))}
              </div>
              <p>{description}</p>
              <a href="#" className="service-link">↗</a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
