'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const timeline = [
  { dates: 'Jun 2024 – Aug 2024', role: 'Software Engineering Intern', org: 'Top Tech Startup · Chennai', desc: 'Built full-stack features using React and Node.js. Integrated REST APIs, improved performance by 30%, and worked in Agile sprint cycles with cross-functional teams.' },
  { dates: '2021 – Present', role: 'B.E. Computer Science & Engineering', org: 'R.M.D Engineering College', desc: 'Coursework in Algorithms, Machine Learning, Databases, Computer Networks, and Operating Systems. Active member of the coding and AI club.' },
  { dates: 'Jan 2024 – Apr 2024', role: 'Open Source Contributor', org: 'Multiple Projects · Remote', desc: 'Contributed to open source AI and web projects. Merged pull requests improving performance and fixing critical bugs across 3 repositories.' },
]

const recruiterData = [
  { label: 'Current Status', val: 'Open to Opportunities', sub: 'Actively applying · Available June 2025' },
  { label: 'Role Target', val: 'SWE / AI Engineer', sub: 'Full-stack · Backend · ML Engineering' },
  { label: 'Notice Period', val: 'Immediate', sub: 'Can join within 2 weeks' },
  { label: 'Location', val: 'Chennai / Bangalore / Remote', sub: 'Open to relocation across India' },
  { label: 'Key Skills', val: 'React, Python, Node.js, LangChain', sub: '3+ years of hands-on experience' },
  { label: 'Education', val: 'B.E. CSE — RMD Engineering College', sub: 'Graduating May 2025' },
]

export default function Resume() {
  const [mode, setMode] = useState('timeline')

  return (
    <section id="resume" style={{ padding: '100px 0', background: '#07080f' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>

        <div style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
          05 // Profile
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '700', letterSpacing: '-2px' }}>Interactive Resume</h2>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {['recruiter', 'timeline'].map(m => (
              <button key={m} onClick={() => setMode(m)} style={{
                padding: '8px 18px', borderRadius: '99px', fontSize: '12px', fontWeight: '500', cursor: 'pointer',
                border: '1.5px solid rgba(255,255,255,0.2)',
                background: mode === m ? 'white' : 'none',
                color: mode === m ? '#07080f' : 'rgba(255,255,255,0.5)',
                transition: 'all 0.2s'
              }}>
                {m === 'recruiter' ? 'RECRUITER MODE' : 'FULL TIMELINE'}
              </button>
            ))}
          </div>
        </div>

        {mode === 'timeline' && (
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '32px', marginLeft: '8px' }}>
            {timeline.map((entry, i) => (
              <motion.div key={entry.role} initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ position: 'relative', paddingBottom: '36px' }}>
                <div style={{ position: 'absolute', left: '-37px', top: '6px', width: '10px', height: '10px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', border: '2px solid #07080f' }} />
                <div style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>{entry.dates}</div>
                <div style={{ fontSize: '17px', fontWeight: '600', marginBottom: '4px' }}>{entry.role}</div>
                <div style={{ fontSize: '13px', color: '#7b92ff', marginBottom: '8px' }}>{entry.org}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', fontWeight: '300' }}>{entry.desc}</div>
              </motion.div>
            ))}
          </div>
        )}

        {mode === 'recruiter' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {recruiterData.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ background: '#0d0e1a', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>{item.label}</div>
                <div style={{ fontSize: '16px', fontWeight: '600' }}>{item.val}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>{item.sub}</div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
