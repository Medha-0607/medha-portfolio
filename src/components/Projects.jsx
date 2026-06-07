'use client'
import { motion } from 'framer-motion'

const projects = [
  { num: '01', title: 'CareerForge', body: 'AI-powered career coaching platform that analyzes resumes against job descriptions, provides ATS optimization, skill gap analysis, and LinkedIn profile review using RAG pipelines.', tags: ['Next.js', 'LangChain', 'OpenAI', 'Supabase', 'pgvector'], link: '#' },
  { num: '02', title: 'LearnHub', body: 'AI-powered learning platform that generates personalized learning paths and dynamic curricula with real-time student assistance and adaptive content delivery.', tags: ['React', 'FastAPI', 'Python', 'LLM', 'RAG'], link: '#' },
  { num: '03', title: 'Nudgify', body: 'Corporate wellness application with healthy meal recommendations, habit tracking, and employee wellness dashboards for distributed teams.', tags: ['Next.js', 'Node.js', 'PostgreSQL', 'OpenAI'], link: '#' },
  { num: '04', title: 'CodeCollab', body: 'Real-time collaborative code editor with operational transformation, supporting simultaneous multi-user editing with sub-50ms sync latency across 200+ concurrent sessions.', tags: ['React', 'Socket.io', 'Node.js', 'Docker'], link: '#' },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 0', background: '#07080f' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>

        <div style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
          03 // Work
        </div>
        <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '700', letterSpacing: '-2px', marginBottom: '60px' }}>
          Selected Projects
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.07)', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '12px', overflow: 'hidden' }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: '#07080f', padding: '36px', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#0d0e1a'}
              onMouseLeave={e => e.currentTarget.style.background = '#07080f'}
            >
              <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '20px' }}>
                Project {p.num}
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-0.5px', marginBottom: '10px' }}>{p.title}</h3>
              <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', marginBottom: '20px', fontWeight: '300' }}>{p.body}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '4px', fontSize: '11px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.5)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={p.link} style={{ display: 'inline-block', marginTop: '20px', fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontFamily: 'monospace' }}>
                View Project →
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
