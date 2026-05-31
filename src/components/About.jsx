import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiDatabase, FiSettings } from 'react-icons/fi'

const cards = [
  {
    icon: <FiCode size={20} />,
    title: 'Web Development',
    desc: 'Building responsive and scalable web applications using modern technologies.',
  },
  {
    icon: <FiLayout size={20} />,
    title: 'UI / UX Design',
    desc: 'Designing intuitive and user-centered digital experiences.',
  },
  {
    icon: <FiDatabase size={20} />,
    title: 'Database Design',
    desc: 'Creating structured and efficient database architectures.',
  },
  {
    icon: <FiSettings size={20} />,
    title: 'System Analysis',
    desc: 'Analyzing requirements and designing effective information systems.',
  },
]

function About() {
  return (
    <section id="about" className="px-6 py-32">
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
          About
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ color: '#FAFAFA' }}
        >
          A student-developer
          <br />
          <span style={{ color: '#52525B' }}>learning by building.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl mb-16 leading-relaxed"
          style={{ color: '#71717A' }}
        >
          Building modern and user-friendly web applications.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: '#FAFAFA',
                }}
              >
                {card.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm" style={{ color: '#71717A' }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About