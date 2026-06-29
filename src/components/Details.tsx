import { motion } from 'framer-motion'

const cards = [
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d76aa6" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, bg: '#fce4ef', title: 'בונים פרויקטים אמיתיים', desc: 'בלי דמואים של צעצוע. תעבדו על פיצ\'רים אמיתיים ותראו איך Claude Code הופך כוונה לקוד עובד ובדוק.' },
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9a7ce2" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h18M3 18h12"/></svg>, bg: '#ece4fb', title: 'שיטות עבודה מעשיות', desc: 'תלמדו את דפוסי הפרומפטינג, הרגלי הסקירה ומבני הפרויקט שהופכים פיתוח בעזרת AI לאמין ביום-יום.' },
  { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d76aa6" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, bg: '#fce4ef', title: 'הדגמות חיות', desc: 'תראו את זה קורה בזמן אמת — מ-repo ריק לפיצ\'ר רץ — עם דוגמאות מעשיות שתשחזרו לצידנו.' },
]

export default function Details() {
  return (
    <section id="why" style={{ maxWidth: 1180, margin: '0 auto', padding: '80px 28px' }}>
      <div style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto 52px' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontFamily: 'Rubik', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', color: '#b07cb0' }}>
          למה כדאי
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
          style={{ fontFamily: 'Rubik', fontWeight: 700, fontSize: 'clamp(30px,4vw,44px)', letterSpacing: '-0.02em', color: '#241830', margin: '12px 0 0' }}>
          שלוש שעות שישנו את הדרך שבה אתם בונים
        </motion.h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
        {cards.map(({ icon, bg, title, desc }, i) => (
          <motion.div key={title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            style={{ background: '#fff', borderRadius: 22, padding: 32, border: '1px solid rgba(160,120,170,0.12)', boxShadow: '0 30px 60px -38px rgba(120,80,140,0.45)' }}>
            <span style={{ display: 'flex', width: 54, height: 54, borderRadius: 16, background: bg, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              {icon}
            </span>
            <h3 style={{ fontFamily: 'Rubik', fontWeight: 600, fontSize: 21, color: '#241830', margin: '0 0 8px' }}>{title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: '#6b5d74', margin: 0 }}>{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
