'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px', height: '56px',
      background: scrolled ? 'rgba(7,8,15,0.92)' : 'transparent',
      backdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '0.5px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s'
    }}>

      <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'white' }}>
        <div style={{
          width: '32px', height: '32px', background: '#111425',
          border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace'
        }}>MD</div>
        <div>
          <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '2px', textTransform: 'uppercase' }}>Medha D Makes</div>
          <div style={{ fontSize: '13px', fontWeight: '600', lineHeight: '1' }}>Portfolio</div>
        </div>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {['Home','About','Skills','Projects','Hackathons','Resume','Contact'].map(item => (
          <a key={item} href={'#' + item.toLowerCase()}
            style={{ padding: '8px 12px', fontSize: '12.5px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            {item}
          </a>
        ))}
      </div>

      <button style={{
        padding: '8px 20px', border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '99px', fontSize: '12.5px', fontWeight: '500',
        background: 'none', color: 'white', cursor: 'pointer'
      }}>
        Hire / Collab
      </button>

    </nav>
  )
}
