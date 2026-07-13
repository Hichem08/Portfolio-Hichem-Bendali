import { motion } from 'framer-motion'

export default function Section4({ section }) {
  const imageUrl = section?.image_url || 'https://via.placeholder.com/500x600/2a2a2a/666?text=About+Me'
  const title = section?.title || 'ABOUT ME'
  const content = section?.content || 'I enjoy turning complex problems into simple, beautiful and intuitive designs.'

  return (
    <motion.section
      className="section section-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
    >
      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
      >
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={imageUrl} alt={title} />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <div className="section-title">{title}</div>
          <h2>
            I'm <span style={{ color: '#ff5722' }}>Creative Director</span> and UI-UX Designer <span style={{ color: '#ff5722' }}>from Sydney, Australia</span>, working in web development and print media.
          </h2>
          <p>
            {content}
          </p>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">CLIENTS SATISFACTION</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6700</div>
              <div className="stat-label">PROJECTS COMPLETED</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
