import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    featured: true,
    title: 'TaskFine',
    desc: 'Designed a task management application that leverages AI to help users organize, prioritize, and manage tasks more efficiently.',
    tech: ['Figma'],
    github: 'https://www.figma.com/proto/h2lI7pgRUxDzzXliWzuMRQ/YAUDA-AJE-FINDIT?node-id=472-2718&t=O35l0UJIIfsxolaO-1&scaling=scale-down&content-scaling=fixed&page-id=41%3A132&starting-point-node-id=243%3A958&show-proto-sidebar=1',
    demo: null,
  },
//   {
//     featured: false,
//     title: 'Motorcycle Sales System',
//     desc: 'A desktop-based sales management system for motorcycle dealerships built with Java.',
//     tech: ['Java', 'MySQL'],
//     github: 'https://github.com/muhammadzhofran',
//     demo: null,
//   },
//   {
//     featured: false,
//     title: 'Store Sales System',
//     desc: 'Point of sale system with inventory tracking and sales reporting features.',
//     tech: ['PHP', 'MySQL', 'Bootstrap'],
//     github: 'https://github.com/muhammadzhofran',
//     demo: null,
//   },
//   {
//     featured: false,
//     title: 'Janji Jiwa Information System Analysis',
//     desc: 'System analysis and design project for a coffee chain franchise information system.',
//     tech: ['System Design', 'UML', 'ERD'],
//     github: 'https://github.com/muhammadzhofran',
//     demo: null,
//   },
]

const techColors = {
  'React': '#3B82F6',
  'Express.js': '#10B981',
  'MongoDB': '#10B981',
  'Tailwind CSS': '#06B6D4',
  'Java': '#F59E0B',
  'MySQL': '#3B82F6',
  'PHP': '#8B5CF6',
  'Bootstrap': '#8B5CF6',
  'System Design': '#F59E0B',
  'UML': '#F59E0B',
  'ERD': '#F59E0B',
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 h-full"
      style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'
        e.currentTarget.style.boxShadow = '0 0 30px rgba(59,130,246,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div>
        <h3 className="font-bold text-white text-lg mb-3">{project.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#71717A' }}>
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2 py-1 rounded-md text-xs font-medium"
              style={{
                backgroundColor: (techColors[t] || '#3B82F6') + '15',
                color: techColors[t] || '#3B82F6',
                border: `1px solid ${techColors[t] || '#3B82F6'}30`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#A1A1AA',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#FAFAFA'}
          onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}
        >
          <FiGithub size={14} /> GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: '#3B82F6',
              color: '#FAFAFA',
            }}
          >
            <FiExternalLink size={14} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

function Projects() {
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="px-6 py-32">
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
          Featured Work
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
          Selected projects.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl mb-16 leading-relaxed"
          style={{ color: '#71717A' }}
        >
          A mix of academic and personal builds full-stack web apps, Java desktop
          systems, and information system design.
        </motion.p>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 mb-4 transition-all duration-300"
          style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'
            e.currentTarget.style.boxShadow = '0 0 40px rgba(59,130,246,0.1)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-4 block"
            style={{ color: '#3B82F6' }}
          >
            Featured Project
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {featured.title}
          </h3>
          <p className="text-base leading-relaxed mb-6 max-w-2xl" style={{ color: '#71717A' }}>
            {featured.desc}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {featured.tech.map(t => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-sm font-medium"
                style={{
                  backgroundColor: (techColors[t] || '#3B82F6') + '15',
                  color: techColors[t] || '#3B82F6',
                  border: `1px solid ${techColors[t] || '#3B82F6'}30`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={featured.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#A1A1AA',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#FAFAFA'}
            onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}
          >
            <FiGithub size={14} /> View on GitHub
          </a>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects