import { motion } from 'framer-motion'

interface Props { firstName: string }

export default function SuccessMessage({ firstName }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: 'center', padding: '18px 8px' }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 220 }}
        style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#e08fc4,#9a7ce2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px', boxShadow: '0 18px 38px -14px rgba(154,124,226,0.7)' }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </motion.div>
      <h3 style={{ fontFamily: 'Rubik', fontWeight: 700, fontSize: 26, color: '#241830', margin: '0 0 10px' }}>נרשמתם בהצלחה!</h3>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#6b5d74', margin: 0 }}>
        תודה {firstName}, שמרנו לכם מקום. נחזור אליכם בקרוב עם כל הפרטים לסדנה.
      </p>
    </motion.div>
  )
}
