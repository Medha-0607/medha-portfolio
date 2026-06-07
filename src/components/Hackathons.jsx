'use client'
import { motion } from 'framer-motion'

const hackathons = [
  { emoji: '🏆', title: 'Smart India Hackathon 2024', body: 'Built CareerForge — an AI-powered career intelligence platform with resume analysis, ATS optimization, and skill gap insights.', result: 'WINNER — 1 Lakh Prize' },
  { emoji: '🥈', title: 'HackBMU 6.0 — 48hr Hackathon', body: 'Developed LearnHub, a RAG-powered personalized learning platform serving adaptive content paths to students across 5 engineering disciplines.', result: 'RUNNER-UP — 800+ teams' },
  { emoji: '🎯', title: 'Google Developer Student Clubs Solution Challenge', body: 'Built Nudgify — corporate wellness application with AI-powered meal planning, habit tracking, and team wellness dashboards.', result: 'REGIONAL FINALIST' },
  { emoji: '⚡', title: 'ETHIndia 2024', body: 'Prototyped a decentralized credential verification system for academic achievements using on-chain attestations and zero-knowledge proofs.', result: 'PARTICIPANT — Top 10%' },
]

export default function Hackathons() {
  return (
    <section id="hackathons" style={{ padding: '100px 0', background: '#0d0e1a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>

        <div style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
          04 // Competitions
        </div>
        <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '700', letterSpacing: '-2px', marginBottom: '60px' }}>
          Hackathons
        </h2>

        <div style={{ maxWidth: '820px' }}>
          {hackathons.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', padding: '28px 0', borderTop: '0.5px solid rgba(255,255,255,0.07)' }}
            >
              <div style={{ width: '44px', height: '44px', background: '#111425', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                {h.emoji}
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '6px' }}>{h.title}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: '300', lineHeight: '1.6', marginBottom: '8px' }}>{h.body}</div>
                <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#6ddc80', letterSpacing: '1px' }}>✦ {h.result}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
