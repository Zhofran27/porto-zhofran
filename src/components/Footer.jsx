import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-6 py-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <div className="flex items-center gap-3">
          <p className="text-sm" style={{ color: '#52525B' }}>
            © 2026 Muhammad Zhofran.
          </p>
        </div>

        {/* Right — Social Links */}
        <div className="flex items-center gap-4">
          {[
            { icon: <FiGithub size={16} />, href: 'https://github.com/Zhofran27' },
            { icon: <FiLinkedin size={16} />, href: 'https://linkedin.com/in/zhofran' },
            { icon: <FiMail size={16} />, href: 'mailto:mzhofran.id@gmail.com' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200"
              style={{ color: '#52525B' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FAFAFA'}
              onMouseLeave={e => e.currentTarget.style.color = '#52525B'}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </motion.footer>
  )
}

export default Footer