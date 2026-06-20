import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import profile from '../assets/profile.jpg'

function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
    }}>

      {/* Animated Blob Biru */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '10%', left: '5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Animated Blob Ungu */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '20%', right: '10%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Content — 2 Kolom */}
      <div style={{
        maxWidth: '72rem',
        margin: '0 auto',
        width: '100%',
        paddingTop: '96px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '48px',
      }}>

        {/* Left — Text */}
        <div style={{ flex: 1 }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '9999px',
              marginBottom: '32px',
              fontSize: '14px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#A1A1AA',
            }}
          >
            <span style={{
              width: '8px', height: '8px',
              borderRadius: '50%',
              backgroundColor: '#4ade80',
              display: 'inline-block',
            }} />
            Available for opportunities
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '24px',
            }}
          >
            <span style={{ color: '#FAFAFA' }}>Hi, I'm</span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #FAFAFA 0%, #A1A1AA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Muhammad Zhofran.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '18px',
              maxWidth: '480px',
              marginBottom: '40px',
              lineHeight: '1.7',
              color: '#71717A',
            }}
          >
            Information Systems undergraduate with a focus on web development. Skilled in HTML, CSS, JavaScript, Laravel, and React, with experience in building responsive and user-friendly websites. 
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}
          >
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                backgroundColor: '#FAFAFA',
                color: '#09090B',
                textDecoration: 'none',
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E4E4E7'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FAFAFA'}
            >
              View Projects <FiArrowUpRight />
            </a>

            <a
              href="https://github.com/Zhofran27"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '500',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#FAFAFA',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
            >
              <FiGithub /> GitHub
            </a>
          </motion.div>

        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ flexShrink: 0, position: 'relative' }}
        >
          {/* Glow */}
          <div style={{
            position: 'absolute',
            inset: '-20px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            zIndex: 0,
          }} />
          <img
            src={profile}
            alt="Muhammad Zhofran"
            style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center',
              border: '2px solid rgba(255,255,255,0.1)',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero