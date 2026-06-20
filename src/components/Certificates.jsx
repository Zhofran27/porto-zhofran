import { motion } from 'framer-motion'
import { FiAward, FiX } from 'react-icons/fi'
import { useState } from 'react'

const certificates = [
  {
    title: 'React JS Bootcamp',
    issuer: 'WPU Course',
    year: '2026',
  },
  {
    title: 'Full Stack Next JS : Realtime Point Of Sale Apps',
    issuer: 'WPU Course',
    year: '2026',
  },
  {
    title: 'Certification Scheme for Occupation of Junior Coder',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2024 - 2027',
  },
  
//   {
//     title: 'Database Design',
//     issuer: 'Coursera',
//     year: '2023',
//   },
]

function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: '#10B981' }}
        >
          Certificates
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
          Continuous learning.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl mb-16 leading-relaxed"
          style={{ color: '#71717A' }}
        >
          A selection of programs and courses I've completed along the way.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(cert)}
              className="p-6 rounded-2xl cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(16,185,129,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(16,185,129,0.1)', color: '#10B981' }}
              >
                <FiAward size={20} />
              </div>
              <h3 className="font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-sm" style={{ color: '#71717A' }}>
                {cert.issuer} · {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md p-8 rounded-2xl relative"
            style={{
              backgroundColor: '#111113',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 rounded-lg transition-colors"
              style={{ color: '#71717A' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FAFAFA'}
              onMouseLeave={e => e.currentTarget.style.color = '#71717A'}
            >
              <FiX size={18} />
            </button>

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: 'rgba(16,185,129,0.1)', color: '#10B981' }}
            >
              <FiAward size={24} />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{selected.title}</h3>
            <p className="text-sm mb-1" style={{ color: '#10B981' }}>{selected.issuer}</p>
            <p className="text-sm" style={{ color: '#71717A' }}>{selected.year}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Certificates