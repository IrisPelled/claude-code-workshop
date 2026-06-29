import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <header style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '84px 28px 70px' }}>
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', inset: '-40px 0 0 0', zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: -60, right: -40, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,rgba(239,154,198,0.45),transparent 65%)', filter: 'blur(20px)', animation: 'drift 18s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: 40, left: -60, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle,rgba(154,124,226,0.40),transparent 65%)', filter: 'blur(20px)', animation: 'drift 22s ease-in-out infinite reverse' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(120,90,150,0.16) 1px,transparent 1px)', backgroundSize: '30px 30px', maskImage: 'radial-gradient(ellipse 70% 60% at 40% 40%,#000 30%,transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 40% 40%,#000 30%,transparent 75%)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
        {/* Text column */}
        <div style={{ flex: '1 1 440px', minWidth: 300 }}>
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(160,120,170,0.18)', padding: '7px 11px 7px 15px', borderRadius: 100, boxShadow: '0 8px 22px -16px rgba(120,80,140,0.5)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#d76aa6', boxShadow: '0 0 0 4px rgba(215,106,166,0.18)' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#7a5c86', letterSpacing: '0.01em' }}>סדנה פרונטלית · תל אביב</span>
            </div>
          </motion.div>

          <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp}
            style={{ fontFamily: 'Rubik', fontWeight: 700, fontSize: 'clamp(40px,6vw,66px)', lineHeight: 1.06, letterSpacing: '-0.02em', margin: '24px 0 0', color: '#241830' }}>
            בונים תוכנה אמיתית עם{' '}
            <span dir="ltr" style={{ background: 'linear-gradient(95deg,#e08fc4,#9a7ce2)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
              Claude Code
            </span>
          </motion.h1>

          <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp}
            style={{ fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.65, color: '#6b5d74', maxWidth: 540, margin: '22px 0 0' }}>
            סדנה ממוקדת ומעשית שבה תעברו מרעיון לפיצ'ר חי. תלמדו את שיטות העבודה, הקיצורים והגישה שהופכים פיתוח בעזרת AI לחלק וטבעי.
          </motion.p>

          {/* Event details chips */}
          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, margin: '30px 0 0' }}>
            {[
              { icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#d76aa6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, label: '20 באוגוסט 2026' },
              { icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9a7ce2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>, label: '10:00 – 13:00', ltr: true },
              { icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#d76aa6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>, label: 'מגדלי עזריאלי, תל אביב' },
            ].map(({ icon, label, ltr }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', border: '1px solid rgba(160,120,170,0.14)', padding: '11px 16px', borderRadius: 14, boxShadow: '0 10px 28px -22px rgba(120,80,140,0.6)' }}>
                {icon}
                <span dir={ltr ? 'ltr' : undefined} style={{ fontSize: 14, fontWeight: 600, color: '#3d2e47' }}>{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, margin: '34px 0 0' }}>
            <a href="#register"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, background: '#241830', color: '#fff', fontSize: 16, fontWeight: 600, padding: '16px 30px', borderRadius: 100, boxShadow: '0 18px 40px -16px rgba(36,24,48,0.8)' }}>
              שמרו לי מקום
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/></svg>
            </a>
          </motion.div>
        </div>

        {/* Image column */}
        <motion.div
          custom={2} initial="hidden" animate="visible" variants={fadeUp}
          style={{ flex: '1 1 340px', minWidth: 280, position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 420 }}>
            <img
              src="/claude-and-me.png"
              alt="קלוד ואני"
              style={{ width: '100%', borderRadius: 24, boxShadow: '0 40px 80px -30px rgba(60,30,80,0.45)', border: '1px solid rgba(160,120,170,0.15)', display: 'block' }}
            />
            {/* Floating stat */}
            <div style={{ position: 'absolute', top: -22, left: -14, background: '#fff', borderRadius: 16, padding: '14px 18px', boxShadow: '0 24px 50px -22px rgba(120,80,140,0.55)', border: '1px solid rgba(160,120,170,0.12)', animation: 'floaty 6s ease-in-out infinite' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#9a8aa3', letterSpacing: '0.03em' }}>פרקטי לחלוטין</div>
              <div style={{ fontFamily: 'Rubik', fontWeight: 700, fontSize: 22, color: '#241830', marginTop: 2 }}>3 שעות עבודה</div>
            </div>
            {/* Floating badge */}
            <div style={{ position: 'absolute', bottom: -26, right: -18, background: '#fff', borderRadius: 16, padding: '13px 16px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 24px 50px -22px rgba(120,80,140,0.55)', border: '1px solid rgba(160,120,170,0.12)', animation: 'floaty2 7s ease-in-out infinite' }}>
              <span style={{ width: 40, height: 40, borderRadius: 12, background: '#ece4fb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9a7ce2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 7v6c0 5 3.5 8 9 9 5.5-1 9-4 9-9V7l-9-5Z"/><polyline points="9 12 11 14 15 9"/></svg>
              </span>
              <div>
                <div style={{ fontFamily: 'Rubik', fontWeight: 700, fontSize: 16, color: '#241830', lineHeight: 1.2 }}>בונים משהו אמיתי</div>
                <div style={{ fontSize: 12, color: '#8a7b92', marginTop: 2 }}>תצאו עם קוד עובד</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
