'use client';
import { useEffect, useState } from 'react';

const S = 'https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics';

const SERVICES = [
  { num: '01', title: 'AI Agent Systems', desc: 'Custom multi-agent architectures — 198 agents across 34 departments, autonomous task routing, and intelligent decision-making.' },
  { num: '02', title: 'Workflow Engineering', desc: 'Production-grade n8n workflows, webhook integrations, API orchestration, and end-to-end process automation.' },
  { num: '03', title: 'CRM & Pipeline', desc: 'GoHighLevel builds, multi-pipeline design, lead scoring, automated follow-up sequences, and funnel architecture.' },
  { num: '04', title: 'Database Architecture', desc: 'Supabase infrastructure — tables, views, functions, RLS policies, and real-time data systems that scale.' },
  { num: '05', title: 'Content Engines', desc: 'Automated social media, email marketing, content generation pipelines, and brand-voice AI systems.' },
  { num: '06', title: 'Operations Intelligence', desc: 'Real-time dashboards, notification systems, performance tracking, and operational analytics across all verticals.' },
];

export default function Home() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => { setTimeout(() => setPreloaderVisible(false), 2200); }, []);
  useEffect(() => {
    const h = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  useEffect(() => {
    const o = new IntersectionObserver((e) => e.forEach((el) => { if (el.isIntersecting) el.target.classList.add('visible'); }), { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach((el) => o.observe(el));
    return () => o.disconnect();
  }, []);

  const navLinks = [
    { label: 'services', href: '#services' },
    { label: 'infrastructure', href: '#infra' },
    { label: 'connect', href: '#connect' },
  ];

  return (
    <>
      <div className={`preloader ${!preloaderVisible ? 'hidden' : ''}`}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--light)', marginBottom: 12 }}>The Automation Office</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#4AE68A', opacity: 0.6 }}>KHG Technology Division</div>
      </div>

      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        {navLinks.map((l) => <a key={l.label} href={l.href} onClick={() => setMobileNavOpen(false)}>{l.label}</a>)}
      </div>

      <nav className={`nav ${navScrolled ? 'scrolled' : ''}`}>
        <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px, 1.2vw, 14px)', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Automation Office</a>
        <ul className="nav-links">
          {navLinks.map((l) => <li key={l.label}><a href={l.href} className="nav-link">{l.label}</a></li>)}
        </ul>
        <button className="mob-btn" onClick={() => setMobileNavOpen(!mobileNavOpen)}><span /><span /><span /></button>
      </nav>

      {/* HERO — tech-forward, monospace dominant */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#060608' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.06, background: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(74,230,138,0.15) 39px, rgba(74,230,138,0.15) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(74,230,138,0.15) 39px, rgba(74,230,138,0.15) 40px)' }} />
        <div style={{ position: 'relative', zIndex: 3, maxWidth: 700, padding: '0 clamp(20px, 4vw, 80px)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#4AE68A', marginBottom: 20, animation: 'fadeUp 0.8s var(--ease-out) 1.8s both' }}>AI Infrastructure · Workflow Engineering</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 7vw, 96px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', animation: 'fadeUp 1s var(--ease-out) 2s both' }}>
            Automate<br /><em style={{ fontStyle: 'italic', color: '#4AE68A' }}>everything.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(11px, 1vw, 14px)', color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: 24, maxWidth: 500, animation: 'fadeUp 0.8s var(--ease-out) 2.2s both' }}>
            198 AI agents. 34 departments. 189 workflows. Zero manual processes. We build the systems that run the empire.
          </p>
          <a href="#services" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#060608', background: '#4AE68A', padding: '14px 40px', marginTop: 40, animation: 'fadeUp 0.8s var(--ease-out) 2.4s both', transition: 'all 0.3s' }}>View Services</a>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 2, background: 'linear-gradient(90deg, transparent, #4AE68A, transparent)', zIndex: 3, opacity: 0.4 }} />
      </section>

      {/* SERVICES */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 80px)' }} id="services">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4.5vw, 56px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 48 }}>What we <em style={{ fontStyle: 'italic', color: '#4AE68A' }}>automate.</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
            {SERVICES.map((s, i) => (
              <div key={s.num} className="reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div style={{ background: 'rgba(74,230,138,0.02)', border: '1px solid rgba(74,230,138,0.08)', padding: 'clamp(28px, 3vw, 44px)', transition: 'all 0.4s', cursor: 'pointer', position: 'relative', overflow: 'hidden', height: '100%' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(74,230,138,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(74,230,138,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(48px, 5vw, 64px)', fontWeight: 300, color: 'rgba(74,230,138,0.08)', position: 'absolute', top: -4, right: 12, lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 400, marginBottom: 12, position: 'relative' }}>{s.title}</div>
                  <div style={{ fontSize: 'clamp(12px, 1vw, 14px)', color: 'var(--text-secondary)', lineHeight: 1.75, position: 'relative' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE STATS */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 80px)', background: 'rgba(74,230,138,0.03)', borderTop: '1px solid rgba(74,230,138,0.08)', borderBottom: '1px solid rgba(74,230,138,0.08)' }} id="infra">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 48, textAlign: 'center' }}>The <em style={{ fontStyle: 'italic', color: '#4AE68A' }}>infrastructure.</em></h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
              {[
                { n: '198', l: 'AI Agents' }, { n: '189', l: 'Workflows' },
                { n: '445+', l: 'Database Tables' }, { n: '351', l: 'MCP Tools' },
                { n: '34', l: 'Departments' }, { n: '48K+', l: 'Contacts' },
                { n: '22', l: 'GHL Accounts' }, { n: '20+', l: 'Websites' },
              ].map((s) => (
                <div key={s.l} style={{ padding: 24, border: '1px solid rgba(74,230,138,0.08)', background: 'rgba(74,230,138,0.02)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 400, color: '#4AE68A', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 6 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 80px)' }} id="connect">
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 24 }}>Ready to <em style={{ fontStyle: 'italic', color: '#4AE68A' }}>automate?</em></h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <p style={{ fontSize: 'clamp(14px, 1.3vw, 18px)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 48px' }}>
              AI agent systems, workflow engineering, CRM automation, and operational intelligence. Built by the team that runs 57+ brands on autopilot.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <a href="mailto:thekollectivehospitality@gmail.com?subject=Automation Office Inquiry" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#060608', background: '#4AE68A', padding: '16px 48px', display: 'inline-block', transition: 'all 0.3s' }}>Start Building</a>
          </div>
        </div>
      </section>

      <footer style={{ padding: '40px clamp(20px, 4vw, 80px)', borderTop: '1px solid rgba(74,230,138,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(7px, 0.65vw, 9px)', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>© 2026 The Automation Office — The Kollective Hospitality Group</div>
        <a href="https://doctordorsey.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(7px, 0.65vw, 9px)', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Dr. Dorsey</a>
      </footer>

      <style jsx global>{`
        @media (max-width: 1024px) { section [style*="grid-template-columns: repeat(3"] { grid-template-columns: repeat(2, 1fr) !important; } section [style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { section [style*="grid-template-columns: repeat("] { grid-template-columns: 1fr !important; } footer { flex-direction: column; text-align: center; } }
      `}</style>
    </>
  );
}
