'use client'
import { motion } from 'framer-motion'

const timeline = [
  { year: '2021', title: 'Started BE at RMD Engineering College', body: 'Began my Computer Science journey at R.M.D Engineering College, diving into programming fundamentals, data structures, and building a strong engineering foundation.' },
  { year: '2023', title: 'First Real Projects', body: 'Built my first full-stack applications using React and Node.js. Started contributing to open source and building things people actually use.' },
  { year: '2024', title: 'Went Deep into AI', body: 'Explored LLMs, LangChain, and RAG pipelines. Started building AI-powered products and participated in my first hackathons.' },
  { year: '2025', title: 'Hackathon Success', body: 'Participated in multiple hackathons, building AI-powered platforms. Won recognition for innovative and impactful solutions.' },
  { year: 'Present', title: 'Building Products', body: 'Focusing on creating modern, scalable, and beautifully designed AI systems and web applications. Open to exciting opportunities.', current: true },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0', background: '#07080f' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>

        <p style={{ fontSize: 'clamp(22px, 3.5vw, 40px)', fontWeight: '500', lineHeight: '1.35', letterSpacing: '-1px', maxWidth: '820px', marginBottom: '80px' }}>
          I build <strong>AI-powered products,</strong> immersive web experiences, and full-stack systems{' '}
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>focused on solving real-world problems.</span>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '0.5px solid rgba(255,255,255,0.08)', borderBottom: '0.5px solid rgba(255,255,255,0.08)', padding: '40px 0', marginBottom: '80px' }}>
          {[['5', 'Projects Completed'], ['3', 'Hackathons'], ['100+', 'Portfolio Viewers'], ['2+', 'Years Building']].map(([num, lbl]) => (
            <div key={lbl} style={{ padding: '0 32px', borderRight: '0.5px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '52px', fontWeight: '700', letterSpacing: '-2px', lineHeight: '1' }}>{num}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>{lbl}</div>
            </div>
          ))}
        </div>

        <div style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>The Journey</div>

        <div style={{ maxWidth: '820px' }}>
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '40px', padding: '40px 0', borderTop: '0.5px solid rgba(255,255,255,0.07)' }}
            >
              <div style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '-1px', color: item.current ? 'white' : 'rgba(255,255,255,0.3)', paddingTop: '4px' }}>{item.year}</div>
              <div>
                <div style={{ fontSize: '22px', fontWeight: '600', marginBottom: '8px', letterSpacing: '-0.5px' }}>{item.title}</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', fontWeight: '300' }}>{item.body}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
