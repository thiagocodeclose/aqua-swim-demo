// @ts-nocheck
'use client';
import { useEffect } from 'react';
import { siteData } from '@/lib/site-data';

const css = `
  :root {
    --aq-bg: #EEF7FF;
    --aq-white: #FFFFFF;
    --aq-navy: #0A2540;
    --aq-primary: #0077B6;
    --aq-secondary: #00B4D8;
    --aq-accent: #90E0EF;
    --aq-text: #0A2540;
    --aq-muted: #5A7A94;
    --aq-border: #C8E4F5;
    --font-display: var(--font-nunito), 'Nunito', sans-serif;
    --font-body: var(--font-inter), 'Inter', sans-serif;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-body); background: var(--aq-bg); color: var(--aq-text); overflow-x: hidden; }

  /* NAV */
  .aq-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(255,255,255,0.96); backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--aq-border);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 2rem; height: 64px;
  }
  .aq-logo { font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; color: var(--aq-navy); text-decoration: none; }
  .aq-logo span { color: var(--aq-primary); }
  .aq-nav-links { display: flex; gap: 2rem; list-style: none; }
  .aq-nav-links a { font-size: 0.8rem; font-weight: 600; letter-spacing: 0.04em; color: var(--aq-muted); text-decoration: none; transition: color 0.2s; }
  .aq-nav-links a:hover { color: var(--aq-primary); }
  .aq-nav-cta { background: var(--aq-primary); color: #fff; font-family: var(--font-display); font-size: 0.8rem; font-weight: 700; border: none; padding: 0.65rem 1.5rem; border-radius: 6px; cursor: pointer; transition: background 0.2s; }
  .aq-nav-cta:hover { background: #005A8C; }

  /* HERO */
  .aq-hero {
    position: relative; padding-top: 64px; min-height: 92vh;
    display: flex; align-items: center; overflow: hidden;
  }
  .aq-hero-img {
    position: absolute; inset: 0;
    background: url('https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=1600&q=80') center/cover no-repeat;
  }
  .aq-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,37,64,0.88) 0%, rgba(0,119,182,0.45) 60%, rgba(0,180,216,0.2) 100%); }
  .aq-hero-content { position: relative; z-index: 2; padding: 5rem 2rem 5rem 6%; max-width: 680px; }
  .aq-hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(0,119,182,0.2); border: 1px solid rgba(144,224,239,0.4); color: var(--aq-accent); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.4rem 1rem; border-radius: 999px; margin-bottom: 1.75rem; }
  .aq-hero-title { font-family: var(--font-display); font-size: clamp(2.8rem, 8vw, 5.5rem); font-weight: 800; color: #fff; line-height: 1.05; margin-bottom: 1.25rem; }
  .aq-hero-title span { color: var(--aq-accent); }
  .aq-hero-sub { font-size: 1.05rem; font-weight: 300; color: rgba(255,255,255,0.8); line-height: 1.7; max-width: 460px; margin-bottom: 2.5rem; }
  .aq-hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
  .aq-btn-primary { background: var(--aq-primary); color: #fff; font-family: var(--font-display); font-size: 0.85rem; font-weight: 700; border: none; padding: 1rem 2.5rem; border-radius: 6px; cursor: pointer; transition: background 0.2s; }
  .aq-btn-primary:hover { background: #005A8C; }
  .aq-btn-outline { background: transparent; color: #fff; font-family: var(--font-display); font-size: 0.85rem; font-weight: 700; border: 2px solid rgba(255,255,255,0.4); padding: 1rem 2rem; border-radius: 6px; cursor: pointer; transition: border-color 0.2s; }
  .aq-btn-outline:hover { border-color: #fff; }

  /* WAVE DIVIDER */
  .aq-wave { width: 100%; overflow: hidden; line-height: 0; background: var(--aq-primary); }
  .aq-wave svg { display: block; }

  /* STATS */
  .aq-stats { background: var(--aq-primary); display: grid; grid-template-columns: repeat(4,1fr); }
  .aq-stat { padding: 2rem 1.5rem; text-align: center; border-right: 1px solid rgba(255,255,255,0.15); }
  .aq-stat:last-child { border-right: none; }
  .aq-stat-value { font-family: var(--font-display); font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 800; color: #fff; }
  .aq-stat-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.7); margin-top: 0.3rem; }

  /* SECTION */
  .aq-section { padding: 5rem 2rem; max-width: 1200px; margin: 0 auto; }
  .aq-section-white { background: var(--aq-white); padding: 5rem 0; }
  .aq-section-white-inner { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
  .aq-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--aq-primary); margin-bottom: 0.6rem; }
  .aq-heading { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800; color: var(--aq-navy); line-height: 1.15; margin-bottom: 0.75rem; }
  .aq-heading span { color: var(--aq-primary); }
  .aq-body { font-size: 1rem; font-weight: 300; color: var(--aq-muted); line-height: 1.7; max-width: 520px; }

  /* PROGRAMS */
  .aq-programs { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
  .aq-program { background: var(--aq-white); border: 1px solid var(--aq-border); border-radius: 12px; padding: 2rem; box-shadow: 0 2px 16px rgba(0,119,182,0.06); transition: transform 0.25s, box-shadow 0.25s; }
  .aq-program:hover { transform: translateY(-4px); box-shadow: 0 8px 28px rgba(0,119,182,0.15); }
  .aq-prog-icon { font-size: 2rem; margin-bottom: 1rem; }
  .aq-prog-name { font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; color: var(--aq-navy); margin-bottom: 0.25rem; }
  .aq-prog-meta { display: flex; gap: 0.75rem; margin-bottom: 0.75rem; }
  .aq-prog-tag { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em; padding: 0.2rem 0.6rem; border-radius: 4px; }
  .aq-prog-tag.sessions { background: #E3F4FF; color: var(--aq-primary); }
  .aq-prog-tag.level { background: #F0F9FF; color: var(--aq-muted); }
  .aq-prog-desc { font-size: 0.88rem; color: var(--aq-muted); line-height: 1.65; }

  /* COACHES */
  .aq-coaches { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem; }
  .aq-coach { background: var(--aq-bg); border: 1px solid var(--aq-border); border-radius: 12px; padding: 2rem; }
  .aq-coach-nick { font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--aq-primary); margin-bottom: 0.1rem; }
  .aq-coach-full { font-size: 0.85rem; font-weight: 600; color: var(--aq-navy); margin-bottom: 0.3rem; }
  .aq-coach-certs { font-size: 0.72rem; color: var(--aq-muted); letter-spacing: 0.05em; margin-bottom: 1rem; }
  .aq-coach-bio { font-size: 0.88rem; color: var(--aq-muted); line-height: 1.65; }

  /* SCHEDULE */
  .aq-schedule { border: 1px solid var(--aq-border); border-radius: 10px; overflow: hidden; margin-top: 3rem; }
  .aq-sch-header { display: grid; grid-template-columns: 10rem 6rem 1fr 8rem 4rem; gap: 1rem; padding: 0.75rem 1.5rem; background: var(--aq-primary); }
  .aq-sch-header span { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.8); }
  .aq-sch-row { display: grid; grid-template-columns: 10rem 6rem 1fr 8rem 4rem; align-items: center; gap: 1rem; padding: 1rem 1.5rem; border-bottom: 1px solid var(--aq-border); background: var(--aq-white); transition: background 0.15s; }
  .aq-sch-row:last-child { border-bottom: none; }
  .aq-sch-row:hover { background: var(--aq-bg); }
  .aq-sch-day { font-size: 0.85rem; font-weight: 600; color: var(--aq-navy); }
  .aq-sch-time { font-size: 0.85rem; font-weight: 600; color: var(--aq-primary); }
  .aq-sch-prog { font-size: 0.9rem; color: var(--aq-text); }
  .aq-sch-coach { font-size: 0.8rem; color: var(--aq-muted); }
  .aq-sch-lanes { font-size: 0.75rem; font-weight: 600; background: #E3F4FF; color: var(--aq-primary); padding: 0.25rem 0.6rem; border-radius: 4px; text-align: center; }

  /* PRICING */
  .aq-pricing { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
  .aq-plan { background: var(--aq-white); border: 2px solid var(--aq-border); border-radius: 14px; padding: 2.5rem 2rem; position: relative; transition: border-color 0.25s, transform 0.25s; }
  .aq-plan:hover { transform: translateY(-4px); }
  .aq-plan.featured { border-color: var(--aq-primary); }
  .aq-plan-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--aq-primary); color: #fff; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.3rem 1rem; border-radius: 999px; white-space: nowrap; }
  .aq-plan-name { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--aq-navy); margin-bottom: 0.5rem; margin-top: 0.5rem; }
  .aq-plan-price { font-family: var(--font-display); font-size: 3rem; font-weight: 800; color: var(--aq-primary); line-height: 1; }
  .aq-plan-period { font-size: 0.8rem; color: var(--aq-muted); margin-bottom: 1.5rem; }
  .aq-plan-features { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 2rem; }
  .aq-plan-features li { font-size: 0.88rem; color: var(--aq-text); display: flex; gap: 0.5rem; }
  .aq-plan-features li::before { content: '✓'; color: var(--aq-secondary); font-weight: 700; }
  .aq-btn-plan { width: 100%; background: var(--aq-primary); color: #fff; font-family: var(--font-display); font-size: 0.85rem; font-weight: 700; border: none; padding: 0.9rem; border-radius: 8px; cursor: pointer; transition: background 0.2s; }
  .aq-btn-plan:hover { background: #005A8C; }
  .aq-btn-plan.outline { background: transparent; color: var(--aq-primary); border: 2px solid var(--aq-primary); }
  .aq-btn-plan.outline:hover { background: var(--aq-primary); color: #fff; }

  /* CTA */
  .aq-cta { background: linear-gradient(135deg, #0077B6 0%, #00B4D8 100%); padding: 6rem 2rem; text-align: center; }
  .aq-cta-title { font-family: var(--font-display); font-size: clamp(2.2rem, 6vw, 4rem); font-weight: 800; color: #fff; margin-bottom: 1rem; }
  .aq-cta-sub { font-size: 1.05rem; color: rgba(255,255,255,0.85); margin-bottom: 2.5rem; }
  .aq-btn-cta { background: #fff; color: var(--aq-primary); font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; border: none; padding: 1.1rem 3rem; border-radius: 8px; cursor: pointer; transition: opacity 0.2s; }
  .aq-btn-cta:hover { opacity: 0.9; }

  /* FOOTER */
  .aq-footer { background: var(--aq-navy); padding: 3rem 2rem; display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap; }
  .aq-footer-logo { font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; color: #fff; margin-bottom: 0.4rem; }
  .aq-footer-logo span { color: var(--aq-accent); }
  .aq-footer-info { font-size: 0.8rem; color: rgba(255,255,255,0.55); line-height: 1.65; }
  .aq-footer-copy { font-size: 0.75rem; color: rgba(255,255,255,0.3); }

  .reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .reveal.visible { opacity: 1; transform: none; }

  @media (max-width: 768px) {
    .aq-nav-links { display: none; }
    .aq-stats { grid-template-columns: repeat(2,1fr); }
    .aq-sch-header, .aq-sch-row { grid-template-columns: 1fr 1fr auto; gap: 0.5rem; }
    .aq-sch-coach, .aq-sch-lanes { display: none; }
    .aq-footer { flex-direction: column; text-align: center; }
  }
`;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((e) => {
      e.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('visible'); io.unobserve(x.target); } });
    }, { threshold: 0.1 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function AquaPage() {
  const d = siteData;
  useReveal();

  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <nav className="aq-nav">
        <a href="#" className="aq-logo">AQUA<span>.</span>Training</a>
        <ul className="aq-nav-links">
          <li><a href="#programs">Programs</a></li>
          <li><a href="#coaches">Coaches</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
        <button className="aq-nav-cta">Join Now</button>
      </nav>

      {/* HERO */}
      <section className="aq-hero">
        <div className="aq-hero-img" />
        <div className="aq-hero-overlay" />
        <div className="aq-hero-content">
          <div className="aq-hero-badge">💧 San Diego · La Jolla</div>
          <h1 data-cg-el="hero_headline_1" className="aq-hero-title">
            Powered<br />by <span>Water.</span>
          </h1>
          <p data-cg-el="hero_subtitle" className="aq-hero-sub">San Diego's premier aquatic training center. From first strokes to elite performance — your journey starts in the water.</p>
          <div className="aq-hero-actions">
            <button data-cg-el="hero_cta_primary" className="aq-btn-primary">Explore Programs</button>
            <button data-cg-el="hero_cta_secondary" className="aq-btn-outline">View Schedule</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="aq-stats">
        {d.stats.map((s) => (
          <div key={s.label} className="aq-stat">
            <div className="aq-stat-value">{s.value}</div>
            <div className="aq-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* PROGRAMS */}
      <section className="aq-section" id="programs">
        <p className="aq-eyebrow reveal">Training Options</p>
        <h2 className="aq-heading reveal" style={{ transitionDelay: '0.1s' }}>Every Swimmer<br /><span>Has a Program</span></h2>
        <p className="aq-body reveal" style={{ transitionDelay: '0.2s' }}>From total beginner to Iron-distance athlete — we have the right program for your goals.</p>
        <div className="aq-programs">
          {d.programs.map((p, i) => (
            <div key={p.name} className="aq-program reveal" style={{ transitionDelay: `${0.08 * i}s` }}>
              <div className="aq-prog-icon">{p.icon}</div>
              <div className="aq-prog-name">{p.name}</div>
              <div className="aq-prog-meta">
                <span className="aq-prog-tag sessions">{p.sessions}</span>
                <span className="aq-prog-tag level">{p.level}</span>
              </div>
              <p className="aq-prog-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COACHES */}
      <div className="aq-section-white" id="coaches">
        <div className="aq-section-white-inner">
          <p className="aq-eyebrow reveal">Expert Staff</p>
          <h2 className="aq-heading reveal" style={{ transitionDelay: '0.1s' }}>Meet Your<br /><span>Coaches</span></h2>
          <div className="aq-coaches">
            {d.coaches.map((c, i) => (
              <div key={c.name} className="aq-coach reveal" style={{ transitionDelay: `${0.1 * i}s` }}>
                <div className="aq-coach-nick">{c.name}</div>
                <div className="aq-coach-full">{c.full}</div>
                <div className="aq-coach-certs">{c.certs}</div>
                <p className="aq-coach-bio">{c.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCHEDULE */}
      <section className="aq-section" id="schedule">
        <p className="aq-eyebrow reveal">Pool Hours</p>
        <h2 className="aq-heading reveal" style={{ transitionDelay: '0.1s' }}>Weekly<br /><span>Schedule</span></h2>
        <div className="aq-schedule">
          <div className="aq-sch-header">
            <span>Day</span><span>Time</span><span>Program</span><span>Coach</span><span>Lanes</span>
          </div>
          {d.schedule.map((s, i) => (
            <div key={i} className="aq-sch-row reveal" style={{ transitionDelay: `${0.06 * i}s` }}>
              <span className="aq-sch-day">{s.day}</span>
              <span className="aq-sch-time">{s.time}</span>
              <span className="aq-sch-prog">{s.program}</span>
              <span className="aq-sch-coach">{s.coach}</span>
              <span className="aq-sch-lanes">{s.lanes}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <div className="aq-section-white" id="pricing">
        <div className="aq-section-white-inner">
          <p className="aq-eyebrow reveal">Membership</p>
          <h2 className="aq-heading reveal" style={{ transitionDelay: '0.1s' }}>Pool<br /><span>Pricing</span></h2>
          <div className="aq-pricing">
            {d.pricing.map((p, i) => (
              <div key={p.name} className={`aq-plan reveal ${p.highlight ? 'featured' : ''}`} style={{ transitionDelay: `${0.1 * i}s` }}>
                {p.highlight && <div className="aq-plan-badge">Most Popular</div>}
                <div className="aq-plan-name">{p.name}</div>
                <div className="aq-plan-price">{p.price}</div>
                <div className="aq-plan-period">{p.period}</div>
                <ul className="aq-plan-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <button className={`aq-btn-plan ${p.highlight ? '' : 'outline'}`}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="aq-cta">
        <h2 className="aq-cta-title">Dive In.<br />First Swim Free.</h2>
        <p className="aq-cta-sub">Join {d.gym.location}'s leading aquatic community. All levels welcome.</p>
        <button className="aq-btn-cta">Claim Free Session →</button>
      </div>

      {/* FOOTER */}
      <footer className="aq-footer">
        <div>
          <div className="aq-footer-logo">AQUA<span>.</span>Training</div>
          <div className="aq-footer-info">{d.gym.address}<br />{d.gym.phone} · {d.gym.email}</div>
        </div>
        <div className="aq-footer-copy">© {new Date().getFullYear()} {d.gym.name}. Powered by Koriva.</div>
      </footer>
    </>
  );
}
