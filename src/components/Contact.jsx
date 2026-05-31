import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiArrowUpRight } from 'react-icons/fi'

const contacts = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'mzhofran.id@gmail.com',
    href: 'mailto:mzhofran.id@gmail.com',
    color: '#3B82F6',
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: '@Zhofran27',
    href: 'https://github.com/Zhofran27',
    color: '#FAFAFA',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'Muhammad Zhofran',
    href: 'https://linkedin.com/in/zhofran',
    color: '#3B82F6',
  },
  {
    icon: <FiInstagram size={20} />,
    label: 'Instagram',
    value: '@jojooooo.27',
    href: 'https://instagram.com/jojooooo.27',
    color: '#8B5CF6',
  },
]

function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: '#3B82F6' }}
        >
          Contact
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: '#FAFAFA' }}
        >
          Let's build something.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl mb-16 leading-relaxed"
          style={{ color: '#71717A' }}
        >
          Open to collaborations, internships, and interesting conversations.
          Reach me on any channel below.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = contact.color + '40'
                e.currentTarget.style.boxShadow = `0 0 30px ${contact.color}10`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: contact.color + '15',
                  color: contact.color,
                }}
              >
                {contact.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-xs mb-0.5" style={{ color: '#52525B' }}>
                  {contact.label}
                </p>
                <p className="font-semibold text-white text-sm truncate">
                  {contact.value}
                </p>
              </div>

              {/* Arrow */}
              <FiArrowUpRight size={16} style={{ color: '#52525B', flexShrink: 0 }} />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contact