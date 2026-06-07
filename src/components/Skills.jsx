'use client'
import { motion } from 'framer-motion'

const skills = [
  { name: 'React', cat: 'Frontend' },
  { name: 'Next.js', cat: 'Frontend' },
  { name: 'Tailwind CSS', cat: 'Frontend' },
  { name: 'Node.js', cat: 'Backend' },
  { name: 'FastAPI', cat: 'Backend' },
  { name: 'Python', cat: 'Core' },
  { name: 'Supabase', cat: 'Backend' },
  { name: 'LangChain', cat: 'AI/ML' },
  { name: 'RAG', cat: 'AI/ML' },
  { name: 'PostgreSQL', cat: 'Database' },
  { name: 'Docker', cat: 'DevOps' },
  { name: 'TypeScript', cat: 'Language' },
  { name: 'OpenAI API', cat: 'AI/ML' },
  { name: 'Git & GitHub', cat: 'Tools' },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 0', background: '#0d0e1a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>

        <div style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
          02 // Arsenal
        </div>
        <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '700', letterSpacing: '-2px', marginBottom: '60px' }}>
          Core Technologies
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', maxWidth: '820px', margin: '0 auto' }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, background: 'rgba(79,110,247,0.12)', borderColor: 'rgba(79,110,247,0.4)' }}
              style={{ padding: '18px 28px', background: '#111425', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '10px', minWidth: '130px', cursor: 'default' }}
            >
              <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>{skill.name}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{skill.cat}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
