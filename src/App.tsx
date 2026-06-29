import Hero from './components/Hero'
import Details from './components/Details'
import Benefits from './components/Benefits'
import RegistrationForm from './components/RegistrationForm'

export default function App() {
  return (
    <div dir="rtl" style={{ background: 'linear-gradient(180deg,#fdf6fb 0%,#f6f0fb 42%,#fcf5f9 100%)', color: '#241830', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(14px)', background: 'rgba(253,246,251,0.72)', borderBottom: '1px solid rgba(160,120,170,0.12)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '16px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg,#ef9ac6,#9a7ce2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 16px -6px rgba(154,124,226,0.6)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 6 3 12 8 18"/><polyline points="16 6 21 12 16 18"/></svg>
            </div>
            <span style={{ fontFamily: 'Rubik', fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em', color: '#2a1c33' }}>סדנת Claude Code</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 34, flexWrap: 'wrap' }}>
            <a href="#why"    style={{ textDecoration: 'none', color: '#6b5d74', fontSize: 14.5, fontWeight: 500 }}>למה כדאי</a>
            <a href="#learn"  style={{ textDecoration: 'none', color: '#6b5d74', fontSize: 14.5, fontWeight: 500 }}>תוכנית הסדנה</a>
            <a href="#register" style={{ textDecoration: 'none', background: '#241830', color: '#fff', fontSize: 14, fontWeight: 600, padding: '11px 22px', borderRadius: 100, boxShadow: '0 10px 24px -12px rgba(36,24,48,0.7)' }}>שמרו לי מקום</a>
          </div>
        </div>
      </nav>

      <Hero />
      <Details />
      <Benefits />
      <RegistrationForm />

      {/* Trust bar */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 28px 90px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
          {[
            { bg: '#fce4ef', stroke: '#d76aa6', icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 11h-6"/></>, title: 'מקומות מוגבלים', sub: 'קבוצה קטנה לחוויה ממוקדת' },
            { bg: '#ece4fb', stroke: '#9a7ce2', icon: <><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></>, title: 'אירוע פרונטלי', sub: 'פנים אל פנים בתל אביב' },
            { bg: '#fce4ef', stroke: '#d76aa6', icon: <><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4Z"/></>, title: 'סדנה מקצועית', sub: 'תוכן מובנה ומעשי' },
            { bg: '#ece4fb', stroke: '#9a7ce2', icon: <><circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20v-1a5 5 0 0 1 9-3M14 20v-.5a4 4 0 0 1 7-2.6"/></>, title: 'הזדמנות לנטוורקינג', sub: 'הכירו מפתחים כמוכם' },
          ].map(({ bg, stroke, icon, title, sub }) => (
            <div key={title} style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', border: '1px solid rgba(160,120,170,0.12)', borderRadius: 18, padding: 22 }}>
              <span style={{ width: 44, height: 44, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
              </span>
              <div>
                <div style={{ fontFamily: 'Rubik', fontWeight: 600, fontSize: 15.5, color: '#241830' }}>{title}</div>
                <div style={{ fontSize: 13, color: '#8a7b92', marginTop: 2 }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(160,120,170,0.14)', background: 'rgba(255,255,255,0.5)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '34px 28px', display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <div style={{ width: 30, height: 30, borderRadius: 9, background: 'linear-gradient(135deg,#ef9ac6,#9a7ce2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 6 3 12 8 18"/><polyline points="16 6 21 12 16 18"/></svg>
            </div>
            <span style={{ fontSize: 14, color: '#6b5d74' }}>© 2026 סדנת Claude Code. כל הזכויות שמורות.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
