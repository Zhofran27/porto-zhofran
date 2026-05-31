import { motion } from 'framer-motion'

const experiences = [
  {
    year: '2026',
    role: 'Head of Human Resources Development',
    org: 'BEM Fakultas Ilmu Komputer UPNVJ',
    desc: 'Led external communications and partnership outreach for the faculty\'s flagship event.',
  },
  {
    year: '2025',
    role: 'Project Officer',
    org: 'Latihan Dasar Kepemimpinan dan Manajemen Mahasiswa (LDKMM)',
    desc: 'Managed a leadership and management training program with 56 committee members and 550 participants.',
  },
  {
    year: '2023',
    role: 'Web Developer Intern',
    org: 'PT Korpora Trainindo Consultant',
    desc: 'Worked with Laravel, CodeIgniter, MySQL, and WordPress to support web application development and maintenance.',
  },
]

function Experience() {
  return (
    <section id="experience" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: '#8B5CF6' }}
        >
          Experience
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
          Experience & Leadership
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl mb-16 leading-relaxed"
          style={{ color: '#71717A' }}
        >
          A journey of building technical skills, leading teams, and creating impact.
        </motion.p>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
          />

          <div className="flex flex-col gap-12 pl-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="absolute -left-10 top-1.5 w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: '#3B82F6',
                    boxShadow: '0 0 8px rgba(59,130,246,0.6)',
                    transform: 'translateX(-4px)',
                  }}
                />

                {/* Card */}
                <div
                  className="p-6 rounded-2xl transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                >
                  <p className="text-xs mb-2" style={{ color: '#52525B' }}>{exp.year}</p>
                  <h3 className="font-bold text-white text-lg mb-1">{exp.role}</h3>
                  <p className="text-sm mb-3" style={{ color: '#8B5CF6' }}>{exp.org}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience