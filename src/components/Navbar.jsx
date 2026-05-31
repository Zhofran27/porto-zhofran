import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(9,9,11,0.8)' : 'rgba(9,9,11,0.4)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
          minHeight: '56px'
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img
            src="/src/assets/profile.jpg"
            alt="Muhammad Zhofran"
            style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid rgba(255,255,255,0.1)',
            }}
        />
        <span style={{ color: '#FAFAFA', fontWeight: '600', fontSize: '14px' }}>
            Muhammad Zhofran
        </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: '#A1A1AA' }}
              onMouseEnter={e => e.target.style.color = '#FAFAFA'}
              onMouseLeave={e => e.target.style.color = '#A1A1AA'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar