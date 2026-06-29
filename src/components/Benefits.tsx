import { motion } from 'framer-motion'

const items = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d76aa6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>, bg: '#fce4ef', title: 'התקנה והגדרה', desc: 'להתקין, להגדיר ולחבר ל-repo שלכם — כך שהוא מבין את הפרויקט כבר מהפרומפט הראשון.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9a7ce2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg>, bg: '#ece4fb', title: 'פרומפטינג שעובד', desc: 'לנסח משימות כך שתקבלו שינויים מדויקים וממוקדים — ולדעת איך לתקן תוך כדי תנועה.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d76aa6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>, bg: '#fce4ef', title: 'עריכה ושכתוב קוד', desc: 'לתת ל-Claude לנווט בבסיס קוד קיים, לבצע refactor ולהרחיב פיצ\'רים בביטחון.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9a7ce2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 2v2M5 9H3M5 14H3M21 9h-2M21 14h-2"/></svg>, bg: '#ece4fb', title: 'איתור ותיקון באגים', desc: 'לאתר את שורש הבעיה, לקבל הסבר ברור ולתקן מהר יותר מאי פעם.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d76aa6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v6.5L5 18a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-8.5V3"/></svg>, bg: '#fce4ef', title: 'בדיקות ואוטומציה', desc: 'לייצר בדיקות, להריץ אותן ולחבר משימות חוזרות לזרימת עבודה אוטומטית.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9a7ce2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5 3 21l4.5-1.5M14 4s4 0 6 2-2 6-2 6l-6-6ZM14 4 8 10s-2 0-3 1l5 5c1-1 1-3 1-3l6-6"/></svg>, bg: '#ece4fb', title: 'מ-prototype ל-production', desc: 'לקחת רעיון מהיר ולהפוך אותו לקוד נקי, מתועד ומוכן לשליחה.' },
]

export default function Benefits() {
  return (
    <section id="learn" style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 28px 80px' }}>
      <div style={{ maxWidth: 660, margin: '0 auto 52px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontFamily: 'Rubik', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', color: '#b07cb0' }}>
          תוכנית הסדנה
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
          style={{ fontFamily: 'Rubik', fontWeight: 700, fontSize: 'clamp(30px,4vw,44px)', letterSpacing: '-0.02em', color: '#241830', margin: '12px 0 0' }}>
          מה תיקחו איתכם הביתה
        </motion.h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
        {items.map(({ icon, bg, title, desc }, i) => (
          <motion.div key={title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
            whileHover={{ y: -3, boxShadow: '0 24px 50px -32px rgba(120,80,140,0.5)' }}
            style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 18, padding: 26, border: '1px solid rgba(160,120,170,0.12)', transition: 'box-shadow .18s ease' }}>
            <span style={{ display: 'flex', width: 46, height: 46, borderRadius: 13, background: bg, alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              {icon}
            </span>
            <h3 style={{ fontFamily: 'Rubik', fontWeight: 600, fontSize: 18, color: '#241830', margin: '0 0 6px' }}>{title}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: '#6b5d74', margin: 0 }}>{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
