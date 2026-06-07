'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: '0 24px', position: 'relative', overflow: 'hidden'
    }}>

      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(79,110,247,0.08) 0%, transparent 70%)'
      }} />

      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '28px' }}
      >
        01 // The Architect
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{ fontSize: 'clamp(60px, 10vw, 110px)', fontWeight: '800', lineHeight: '0.95', letterSpacing: '-4px', marginBottom: '24px' }}
      >
        Medha<br />
        <span style={{ color: 'rgba(255,255,255,0.25)' }}>D</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '460px', lineHeight: '1.7', fontWeight: '300', marginBottom: '40px' }}
      >
        I build AI-powered products, immersive web experiences, and full-stack systems focused on solving real-world problems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <a href="#projects" style={{
          padding: '13px 28px', background: 'white', color: '#07080f',
          borderRadius: '99px', fontSize: '13px', fontWeight: '600', textDecoration: 'none'
        }}>
          EXPLORE PROJECTS
        </a>
        <a href="#" style={{
          padding: '13px 28px', border: '1.5px solid rgba(255,255,255,0.2)',
          borderRadius: '99px', fontSize: '13px', fontWeight: '500',
          color: 'rgba(255,255,255,0.6)', textDecoration: 'none'
        }}>
          Download Resume
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
      >
        <span style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
          Scroll to explore
        </span>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)' }} />
      </motion.div>

    </section>
  )
}
