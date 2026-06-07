'use client'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 0', background: '#0d0e1a', textAlign: 'center' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
            06 // Let&apos;s Talk
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '700', letterSpacing: '-2px', marginBottom: '32px' }}>
            Get In Touch
          </h2>

          <a href="mailto:medhad9btnv@gmail.com" style={{ fontSize: 'clamp(20px, 4vw, 48px)', fontWeight: '700', letterSpacing: '-1px', color: 'white', textDecoration: 'none', display: 'block', marginBottom: '40px', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#7b92ff'}
            onMouseLeave={e => e.currentTarget.style.color = 'white'}
          >
            medhad9btnv@gmail.com
          </a>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/Medha-0607' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/medha-dinesh-461794389/' },
              { label: 'Resume PDF', href: '#' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                style={{ padding: '10px 20px', border: '0.5px solid rgba(255,255,255,0.15)', borderRadius: '99px', fontSize: '12px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

      </div>

      <div style={{ marginTop: '80px', padding: '24px 40px', borderTop: '0.5px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.25)' }}>
        <span>2025 Medha D. Built with Next.js</span>
        <span>Chennai, India</span>
      </div>
    </section>
  )
}
