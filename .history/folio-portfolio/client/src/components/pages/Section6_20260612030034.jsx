import { motion } from 'framer-motion'

export default function Section6({ section }) {
  const heading = section?.title || 'LATEST NEWS.'
  const sharedImage = section?.image_url

  return (
    <motion.section
      className="section section-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
      style={{ minHeight: '100vh', padding: '120px 60px' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
        style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}
      >
        <div className="section-title">OUR BLOGS</div>
        <h2 style={{ fontSize: '72px', marginBottom: '80px' }}>
          <span style={{ color: '#fff' }}>{heading.split(' ')[0] || 'LATEST'}</span> <span style={{ color: '#aaa' }}>{heading.split(' ').slice(1).join(' ') || 'NEWS.'}</span>
        </h2>

        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {[
            {
              image: sharedImage || 'https://via.placeholder.com/400x300/2a2a2a/666?text=Blog+1',
              title: 'Design Inspiration: Where to Find Creative Ideas',
              author: 'ADMIN',
              date: 'AUGUST 14, 2023',
            },
            {
              image: sharedImage || 'https://via.placeholder.com/400x300/3a3a3a/666?text=Blog+2',
              title: 'Typography: Choosing Fonts for Maximum Impact',
              author: 'ADMIN',
              date: 'AUGUST 14, 2023',
            },
            {
              image: sharedImage || 'https://via.placeholder.com/400x300/2a2a2a/666?text=Blog+3',
              title: 'Design Inspiration: Where to Find Creative Ideas',
              author: 'ADMIN',
              date: 'AUGUST 14, 2023',
            },
          ].map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -10 }}
              style={{
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '100%',
                height: '250px',
                overflow: 'hidden',
                borderRadius: '12px 12px 0 0',
              }}>
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div style={{ padding: '30px' }}>
                <div style={{
                  fontSize: '12px',
                  color: '#aaa',
                  marginBottom: '15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <span>BY : {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '0', lineHeight: '1.4' }}>
                  {blog.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
