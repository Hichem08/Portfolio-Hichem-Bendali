import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, forwardRef } from 'react'
import a from '../../assets/images/a.jpg'
import after from '../../assets/images/after.jpg'
import Cours from '../../assets/images/Cours.jpg'
import Europe from '../../assets/images/Europe.jpg'
import logo from '../../assets/images/logo.jpg'

export default function Section5({ section }) {
  const title = section?.title || 'GRAPHIC DESIGN'

  // Responsive state management
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  }

  const photos = [
    {
      id: 1,
      order: 0,
      x: '-320px',
      y: '15px',
      zIndex: 50,
      direction: 'left',
      src: Cours,
      objectFit: 'cover',
    },
    {
      id: 2,
      order: 1,
      x: '-160px',
      y: '32px',
      zIndex: 40,
      direction: 'left',
      src: after,
    },
    {
      id: 3,
      order: 2,
      x: '0px',
      y: '8px',
      zIndex: 30,
      direction: 'right',
      src: a,
    },
    {
      id: 4,
      order: 3,
      x: '160px',
      y: '22px',
      zIndex: 20,
      direction: 'right',
      src: Europe,
    },
    {
      id: 5,
      order: 4,
      x: '320px',
      y: '44px',
      zIndex: 10,
      direction: 'left',
      src: logo,
    },
  ]

  const mobilePhotoScale = 0.42
  const scaleOffset = (value) => `${Math.round(Number.parseFloat(value) * mobilePhotoScale)}px`

  return (
    <motion.section
      className="section section-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
    >
      <div className="gallery-container" style={{ 
        padding: isMobile ? '1rem 1rem 2rem' : '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}>
        <div className="gallery-bg-gradient"></div>
        
        <p className="gallery-subtitle" style={{ 
          fontSize: isMobile ? '0.9rem' : '1.25rem', 
          marginBottom: isMobile ? '0.5rem' : '1rem',
          textAlign: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 100
        }}>
        GRAPHIC DESIGN
        </p>
        
        <h3 className="gallery-title" style={{ 
          fontSize: isMobile ? '1.5rem' : '2.5rem', 
          marginBottom: isMobile ? '0rem' : '2rem',
          textAlign: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 100, height:'100px'
        }}>
          ADOBE PHOTOSHOP <span className="gallery-title-accent"> & ILLUSTRATOR</span>
        </h3>

        <div className="gallery-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <motion.div
            className="gallery-inner"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            {isMobile ? (
              <motion.div
                className="gallery-photos-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{
                  width: '100%',
                  maxWidth: '460px',
                  minHeight: '280px',
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '0.25rem',
                }}
              >
                <div
                  className="gallery-photos"
                  style={{
                    position: 'relative',
                    width: '190px',
                    height: '220px',
                    display: 'block',
                  }}
                >
                  {[...photos].reverse().map((photo) => (
                    <motion.div
                      key={photo.id}
                      className="gallery-photo-wrapper"
                      style={{ zIndex: photo.zIndex }}
                      variants={photoVariants}
                      custom={{
                        x: scaleOffset(photo.x),
                        y: scaleOffset(photo.y),
                        order: photo.order,
                      }}
                    >
                      <Photo
                        width={118}
                        height={128}
                        src={photo.src}
                        alt="Gallery photo"
                        direction={photo.direction}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              // DESKTOP LAYOUT (unchanged)
              <motion.div
                className="gallery-photos-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="gallery-photos">
                  {[...photos].reverse().map((photo) => (
                    <motion.div
                      key={photo.id}
                      className="gallery-photo-wrapper"
                      style={{ zIndex: photo.zIndex }}
                      variants={photoVariants}
                      custom={{
                        x: photo.x,
                        y: photo.y,
                        order: photo.order,
                      }}
                    >
                      <Photo
                        width={220}
                        height={240}
                        src={photo.src}
                        alt="Gallery photo"
                        direction={photo.direction}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function getRandomNumberInRange(min, max) {
  if (min >= max) {
    throw new Error('Min value should be less than max value')
  }
  return Math.random() * (max - min) + min
}

const MotionImage = motion(
  forwardRef(function MotionImage(props, ref) {
    return <img ref={ref} {...props} />
  })
)

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
  ...props
}) => {
  const [rotation, setRotation] = useState(0)
  const [x, setX] = useState(200)
  const [y, setY] = useState(200)

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === 'left' ? -1 : 1)
    setRotation(randomRotation)
  }, [direction])

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    setX(event.clientX - rect.left)
    setY(event.clientY - rect.top)
  }

  const resetMouse = () => {
    setX(200)
    setY(200)
  }

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === 'left' ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
        zIndex: 1,
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        touchAction: 'none',
      }}
      className="photo-wrapper"
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
    >
      <div className="photo-inner">
        <img
          className="photo-image"
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
      </div>
    </motion.div>
  )
}
