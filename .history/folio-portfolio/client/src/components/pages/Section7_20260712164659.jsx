
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaWhatsapp, FaLinkedin, FaTelegram, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Section7() {
  const [hoveredLine, setHoveredLine] = useState(null)
  
  // Define line patterns for each letter (each letter has 20 rows, each row is line widths)
  const letterPatterns = [
    // H
    [
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1
    ],
    // I
    [
      0,0,1,1,1,1,0,0,
      0,0,1,1,1,1,0,0,
      0,0,1,1,1,1,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,0,1,1,0,0,0,
      0,0,1,1,1,1,0,0,
      0,0,1,1,1,1,0,0,
      0,0,1,1,1,1,0,0
    ],
    // C
    [
      0,1,1,1,1,1,1,0,
      0,1,1,1,1,1,1,0,
      0,1,1,1,1,1,1,0,
      1,1,1,0,0,0,0,0,
      1,1,0,0,0,0,0,0,
      1,0,0,0,0,0,0,0,
      1,0,0,0,0,0,0,0,
      1,0,0,0,0,0,0,0,
      1,0,0,0,0,0,0,0,
      1,0,0,0,0,0,0,0,
      1,0,0,0,0,0,0,0,
      1,0,0,0,0,0,0,0,
      1,0,0,0,0,0,0,0,
      1,0,0,0,0,0,0,0,
      1,0,0,0,0,0,0,0,
      1,1,0,0,0,0,0,0,
      1,1,1,0,0,0,0,0,
      0,1,1,1,1,1,1,0,
      0,1,1,1,1,1,1,0,
      0,1,1,1,1,1,1,0
    ],
    // H
    [
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1
    ],
    // E
    [
      0,1,1,1,1,1,1,0,
      0,1,1,1,1,1,1,0,
      0,1,1,1,1,1,1,0,
      0,1,0,0,0,0,0,0,
      0,1,0,0,0,0,0,0,
      0,1,0,0,0,0,0,0,
      0,1,1,1,1,1,0,0,
      0,1,1,1,1,1,0,0,
      0,1,0,0,0,0,0,0,
      0,1,0,0,0,0,0,0,
      0,1,0,0,0,0,0,0,
      0,1,1,1,1,1,0,0,
      0,1,1,1,1,1,0,0,
      0,1,0,0,0,0,0,0,
      0,1,0,0,0,0,0,0,
      0,1,0,0,0,0,0,0,
      0,1,0,0,0,0,0,0,
      0,1,1,1,1,1,1,0,
      0,1,1,1,1,1,1,0,
      0,1,1,1,1,1,1,0
    ],
    // M
    [
      1,1,0,0,0,0,1,1,
      1,1,1,0,0,1,1,1,
      1,1,1,1,1,1,1,1,
      1,1,1,1,1,1,1,1,
      1,1,0,1,1,0,1,1,
      1,1,0,1,1,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1,
      1,1,0,0,0,0,1,1
    ]
  ]
  
  return (
    <motion.section
      className="section section-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      viewport={{ once: true, amount: 0.2 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: '40px'
      }}
    >
      {/* Top Section */}
      <motion.div
        className="contact-top-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          width: '100%',
          maxWidth: '1400px',
          alignItems: 'center',
          padding: '100px 60px 0 60px'
        }}
      >
        {/* Left Side - Title */}
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 72px)',
          lineHeight: '1.1',
          fontWeight: '700',
          letterSpacing: '-2px',
          marginBottom: '40px',
          textTransform: 'uppercase'
        }}>
          CONTACT ME !
        </h1>

        {/* Right Side - Button */}
        <div style={{ textAlign: 'right' }}>
          <motion.button
            className="contact-collab-button"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22, delay: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 87, 34, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'transparent',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: '#ff5722',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1px',
              padding: '15px 40px',
              borderRadius: '4px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              position: 'relative',
              overflow: 'hidden',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            Start a collaboration
            <span style={{
              display: 'inline-block',
              transition: 'transform 0.3s'
            }}>→</span>
          </motion.button>
        </div>
      </motion.div>

{/* Footer Section */}
      <motion.div
        className="contact-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '20px',
          width: '100%',
          maxWidth: '1400px',
          padding: '0 60px 40px 60px',
          zIndex: 10,
          position: 'relative'
        }}
      >
        {/* Left Footer - Copyright */}
        <div classNamestyle={{ textAlign: 'left' }}>
          <p style={{
            fontSize: '12px',
            color: '#ff5722',
            margin: '0 0 20px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            ©HICHEM {new Date().getFullYear()}
          </p>
          
        </div>

        {/* Middle Footer - Business Inquiry */}
        <div style={{ textAlign: 'left' }}>
          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.4)',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            EMAIL & Phone Number
          </p>
          <a
            href="mailto:hichembendali08@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '14px',
              color: '#fff',
              margin: '0 0 5px 0',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ff5722';
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.color = '#ff5722';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff';
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.color = '#fff';
            }}
          >
            <FaEnvelope style={{ fontSize: '16px', transition: 'color 0.3s' }} />
            hichembendali08@gmail.com
          </a>
          <a
            href="tel:+213541820051"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '14px',
              color: '#fff',
              margin: 0,
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ff5722';
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.color = '#ff5722';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff';
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.color = '#fff';
            }}
          >
            <FaPhone style={{ fontSize: '16px', transition: 'color 0.3s' }} />
            +213 541 82 00 51
          </a>
        </div>

        {/* Right Footer - Social Media */}
        <div style={{ textAlign: 'right' }}>
          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.4)',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Social
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/213541820051"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '14px',
                color: '#fff',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ff5722';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = '#ff5722';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#fff';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = '#fff';
              }}
            >
              <FaWhatsapp style={{ fontSize: '16px', transition: 'color 0.3s' }} />
              WhatsApp
            </motion.a>

            {/* LinkedIn */}
            <motion.a
               href="https://www.linkedin.com/in/hichem-bendali-603605158"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '14px',
                color: '#fff',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ff5722';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = '#ff5722';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#fff';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = '#fff';
              }}
            >
              <FaLinkedin style={{ fontSize: '16px', transition: 'color 0.3s' }} />
              LinkedIn
            </motion.a>

            {/* Telegram */}
            <motion.a
              href="https://t.me/+213541820051"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '14px',
                color: '#fff',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ff5722';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = '#ff5722';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#fff';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = '#fff';
              }}
            >
              <FaTelegram style={{ fontSize: '16px', transition: 'color 0.3s' }} />
              Telegram
            </motion.a>
          </div>
        </div>
      </motion.div>




      {/* HICHEM Text with Letter Lines */}
      <motion.div
        className="contact-name-display"
        initial={{ opacity: 9, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{
          width: '100%',
          paddingTop: '70px',
          marginTop: 'auto'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          position: 'relative',
          zIndex: 1
        }}>
          {letterPatterns.map((pattern, letterIndex) => (
            <div key={letterIndex} style={{
              width: 'clamp(120px, 20vw, 180px)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {[...Array(20)].map((_, lineIndex) => (
                <div key={`${letterIndex}-${lineIndex}`} style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '4px',
                  marginBottom: '4px'
                }}>
                  {[...Array(8)].map((_, segmentIndex) => {
                    const isActive = pattern[lineIndex * 8 + segmentIndex] === 1
                    return (
                      <motion.div
                        key={`${letterIndex}-${lineIndex}-${segmentIndex}`}
                        onMouseEnter={() => setHoveredLine(`${letterIndex}-${lineIndex}-${segmentIndex}`)}
                        onMouseLeave={() => setHoveredLine(null)}
                        style={{
                          height: '10px',
                          flex: 1,
                          backgroundColor: 
                            hoveredLine === `${letterIndex}-${lineIndex}-${segmentIndex}` 
                              ? '#ff5722' 
                              : isActive 
                                ? 'rgba(255, 255, 255, 0.1)' 
                                : 'transparent',
                          transition: 'background-color 0.2s ease',
                          borderRadius: '2px'
                        }}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      
    </motion.section>
  )
}

