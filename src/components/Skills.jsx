import { motion } from 'framer-motion'
import {
  FiCode, FiServer, FiDatabase, FiTool,
} from 'react-icons/fi'

const skillGroups = [
  {
    category: 'Frontend',
    icon: <FiCode size={24} />,
    color: '#3B82F6',
    description: 'Building responsive, modern user interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    colSpan: 2,
  },
  {
    category: 'Backend',
    icon: <FiServer size={24} />,
    color: '#8B5CF6',
    description: 'Crafting server-side logic and REST APIs.',
    skills: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'Java'],
    colSpan: 1,
  },
  {
    category: 'Database',
    icon: <FiDatabase size={24} />,
    color: '#10B981',
    description: 'Designing and managing data systems.',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    colSpan: 1,
  },
  {
    category: 'Tools',
    icon: <FiTool size={24} />,
    color: '#F59E0B',
    description: 'Tools I use daily to ship products.',
    skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman', 'Android Studio'],
    colSpan: 2,
  },
]

function Skills() {
  return (
    <section id="skills" style={{ padding: '128px 24px' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            color: '#8B5CF6',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          Skills
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '16px',
            color: '#FAFAFA',
          }}
        >
          What I work with.
        </motion.h2>


        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              style={{
                gridColumn: `span ${group.colSpan}`,
                padding: '32px',
                borderRadius: '20px',
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = group.color + '40'
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.boxShadow = `0 0 40px ${group.color}15`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '150px',
                height: '150px',
                background: `radial-gradient(circle, ${group.color}15 0%, transparent 70%)`,
                borderRadius: '50%',
                pointerEvents: 'none',
              }} />

              {/* Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: group.color + '15',
                color: group.color,
                marginBottom: '20px',
                border: `1px solid ${group.color}25`,
              }}>
                {group.icon}
              </div>

              {/* Category */}
              <p style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: group.color,
                marginBottom: '8px',
              }}>
                {group.category}
              </p>

              {/* Description */}
              <p style={{
                fontSize: '14px',
                color: '#52525B',
                marginBottom: '24px',
                lineHeight: '1.6',
              }}>
                {group.description}
              </p>

              {/* Skill Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: '500',
                      backgroundColor: group.color + '12',
                      color: group.color,
                      border: `1px solid ${group.color}25`,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = group.color + '25'
                      e.currentTarget.style.transform = 'scale(1.05)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = group.color + '12'
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills