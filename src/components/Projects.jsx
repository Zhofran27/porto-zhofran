import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import imgPorto from '../assets/project-porto.png'
import imgTaskfine from '../assets/project-taskfine.png'
import imgBookshelf from '../assets/project-bookshelf.png'

const projects = [
  {
    featured: true,
    title: 'Personal Portofolio',
    desc: 'Developed and deployed a responsive personal portfolio website to showcase projects, technical skills, certifications, and professional experiences.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    github: 'https://porto-zhofran.vercel.app',
    demo: null,
    image: imgPorto,
  },
  {
    featured: false,
    title: 'Taskfine',
    desc: 'Designed a task management application that leverages AI to help users organize, prioritize, and manage tasks more efficiently.',
    tech: ['Figma'],
    github: 'https://www.figma.com/proto/h2lI7pgRUxDzzXliWzuMRQ/YAUDA-AJE-FINDIT?node-id=472-2718&t=O35l0UJIIfsxolaO-1&scaling=scale-down&content-scaling=fixed&page-id=41%3A132&starting-point-node-id=243%3A958&show-proto-sidebar=1',
    demo: null,
    image: imgTaskfine,
  },
  {
    featured: false,
    title: 'Bookshelf',
    desc: 'A desktop application for managing personal book collections, tracking reading progress, rating books, and viewing collection statistics.',
    tech: ['Java'],
    github: 'https://github.com/Zhofran27/Project-Bookshelf',
    demo: null,
    image: imgBookshelf,
  },
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
  'Figma': '#F472B6',
  'JavaScript': '#F59E0B',
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
      style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s',
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
      {/* Image */}
      <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontWeight: '700', color: '#FAFAFA', fontSize: '16px', marginBottom: '8px' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#71717A', marginBottom: '16px', flex: 1 }}>
          {project.desc}
        </p>

        {/* Tech Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.tech.map(t => (
            <span
              key={t}
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: '500',
                backgroundColor: (techColors[t] || '#3B82F6') + '15',
                color: techColors[t] || '#3B82F6',
                border: `1px solid ${techColors[t] || '#3B82F6'}30`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: '500',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#A1A1AA',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#FAFAFA'}
            onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}
          >
            <FiGithub size={13} /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: '500',
                backgroundColor: '#3B82F6',
                color: '#FAFAFA',
                textDecoration: 'none',
              }}
            >
              <FiExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" style={{ padding: '128px 24px' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: '#3B82F6', fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}
        >
          Featured Work
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '800', color: '#FAFAFA', marginBottom: '16px', lineHeight: '1.1' }}
        >
          Selected projects.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '18px', color: '#71717A', marginBottom: '64px', maxWidth: '560px', lineHeight: '1.7' }}
        >
          A mix of academic and personal builds — full-stack web apps, Java desktop
          systems, and information system design.
        </motion.p>

        {/* Featured Project — dengan gambar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '16px',
            transition: 'all 0.3s',
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
          {/* Featured Image */}
          <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', maxHeight: '400px' }}>
            <img
              src={featured.image}
              alt={featured.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>

          {/* Featured Content */}
          <div style={{ padding: '32px' }}>
            <span style={{ color: '#3B82F6', fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              Featured Project
            </span>
            <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#FAFAFA', marginBottom: '12px' }}>
              {featured.title}
            </h3>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#71717A', marginBottom: '20px', maxWidth: '640px' }}>
              {featured.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {featured.tech.map(t => (
                <span
                  key={t}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '500',
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
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '500',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#A1A1AA',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#FAFAFA'}
              onMouseLeave={e => e.currentTarget.style.color = '#A1A1AA'}
            >
              <FiGithub size={14} /> View on GitHub
            </a>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects