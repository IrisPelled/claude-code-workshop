import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { registerForWebinar } from '../lib/supabase'
import SuccessMessage from './SuccessMessage'

interface FormState { first_name: string; last_name: string; phone: string }
interface FormErrors { first_name?: string; last_name?: string; phone?: string; general?: string }

const ISRAELI_MOBILE_RE = /^05\d{8}$/

function validate(v: FormState): FormErrors {
  const e: FormErrors = {}
  if (!v.first_name.trim()) e.first_name = 'נא להזין שם פרטי'
  if (!v.last_name.trim())  e.last_name  = 'נא להזין שם משפחה'
  if (!v.phone.trim()) {
    e.phone = 'נא להזין מספר טלפון'
  } else if (!ISRAELI_MOBILE_RE.test(v.phone.replace(/[-\s]/g, ''))) {
    e.phone = 'נא להזין מספר פלאפון ישראלי תקין (לדוגמה: 0501234567)'
  }
  return e
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '15px 18px', fontSize: 16, color: '#241830',
  background: '#faf6fc', border: '1.5px solid #ece1ee', borderRadius: 14,
  outline: 'none', transition: 'border-color .15s, box-shadow .15s',
  fontFamily: 'Heebo, sans-serif',
}

export default function RegistrationForm() {
  const [values, setValues] = useState<FormState>({ first_name: '', last_name: '', phone: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const validation = validate(values)
    if (Object.keys(validation).length > 0) { setErrors(validation); return }
    setLoading(true); setErrors({})
    try {
      await registerForWebinar({
        first_name: values.first_name.trim(),
        last_name: values.last_name.trim(),
        phone: values.phone.replace(/[-\s]/g, ''),
      })
      setSuccess(true)
    } catch (err) {
      const msg = err instanceof Error ? err.message : ''
      if (msg === 'DUPLICATE_PHONE') setErrors({ phone: 'מספר הטלפון הזה כבר רשום לסדנה' })
      else setErrors({ general: 'אירעה שגיאה, אנא נסו שוב מאוחר יותר.' })
    } finally { setLoading(false) }
  }

  const fields = [
    { name: 'first_name' as const, label: 'שם פרטי', placeholder: 'ישראל', type: 'text' },
    { name: 'last_name'  as const, label: 'שם משפחה', placeholder: 'ישראלי', type: 'text' },
    { name: 'phone'      as const, label: 'טלפון נייד', placeholder: '050-000-0000', type: 'tel' },
  ]

  return (
    <section id="register" style={{ maxWidth: 1180, margin: '0 auto', padding: '40px 28px 90px' }}>
      <div style={{ background: 'linear-gradient(135deg,#f6d8e9,#e9ddfb)', borderRadius: 30, padding: 'clamp(28px,4vw,56px)', boxShadow: '0 40px 90px -50px rgba(120,80,140,0.6)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>

          {/* Left: info */}
          <div style={{ flex: '1 1 360px', minWidth: 280 }}>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontFamily: 'Rubik', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', color: '#a85c9a' }}>
              הרשמה
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
              style={{ fontFamily: 'Rubik', fontWeight: 700, fontSize: 'clamp(30px,4vw,46px)', letterSpacing: '-0.02em', color: '#241830', margin: '12px 0 16px', lineHeight: 1.1 }}>
              שמרו את המקום שלכם
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.14 }}
              style={{ fontSize: 17, lineHeight: 1.65, color: '#5e4f6a', margin: '0 0 26px', maxWidth: 420 }}>
              המקומות מוגבלים ומתמלאים מהר. השאירו פרטים ונחזור אליכם עם אישור ההרשמה לסדנה.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['אישור הרשמה תוך 24 שעות', 'ללא תשלום בשלב ההרשמה'].map((text, i) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 30, height: 30, borderRadius: 9, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 14px -8px rgba(120,80,140,0.6)', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={i === 0 ? '#d76aa6' : '#9a7ce2'} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span style={{ fontSize: 15, color: '#3d2e47', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: form card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            style={{ flex: '1 1 380px', minWidth: 290 }}>
            <div style={{ background: '#fff', borderRadius: 24, padding: 'clamp(24px,3vw,36px)', boxShadow: '0 30px 70px -34px rgba(120,80,140,0.55)', border: '1px solid rgba(255,255,255,0.8)' }}>
              <AnimatePresence mode="wait">
                {success ? (
                  <SuccessMessage key="success" firstName={values.first_name} />
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} noValidate initial={{ opacity: 1 }} exit={{ opacity: 0, y: -8 }}>
                    {fields.map(({ name, label, placeholder, type }) => (
                      <div key={name} style={{ marginBottom: name === 'phone' ? 26 : 18 }}>
                        <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#4a3b56', marginBottom: 8 }}>{label}</label>
                        <input
                          name={name}
                          value={values[name]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(name)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={placeholder}
                          type={type}
                          dir={name === 'phone' ? 'ltr' : 'rtl'}
                          style={{
                            ...inputStyle,
                            ...(errors[name] ? { borderColor: '#d6557e', background: '#fff5f7' } : {}),
                            ...(focusedField === name && !errors[name] ? { borderColor: '#c98fd6', boxShadow: '0 0 0 4px rgba(201,143,214,0.18)', background: '#fff' } : {}),
                          }}
                        />
                        <AnimatePresence>
                          {errors[name] && (
                            <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                              style={{ fontSize: 13, color: '#d6557e', marginTop: 7, fontWeight: 500 }}>
                              {errors[name]}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}

                    <AnimatePresence>
                      {errors.general && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          style={{ fontSize: 13, color: '#d6557e', textAlign: 'center', background: '#fff5f7', borderRadius: 10, padding: '10px 14px', marginBottom: 16 }}>
                          {errors.general}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button type="submit" disabled={loading}
                      whileHover={{ y: -2, boxShadow: '0 22px 44px -16px rgba(154,124,226,0.9)' }}
                      whileTap={{ scale: 0.98 }}
                      style={{ width: '100%', padding: 18, fontFamily: 'Rubik', fontSize: 17, fontWeight: 700, color: '#fff', background: 'linear-gradient(95deg,#e08fc4,#9a7ce2)', border: 'none', borderRadius: 14, cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '0 18px 38px -16px rgba(154,124,226,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: loading ? 0.75 : 1 }}>
                      {loading ? <Loader2 size={20} className="animate-spin" /> : 'אני רוצה להירשם'}
                    </motion.button>

                    <p style={{ fontSize: 12.5, color: '#9a8aa3', textAlign: 'center', margin: '16px 0 0', lineHeight: 1.5 }}>
                      בלחיצה אתם מסכימים שניצור איתכם קשר בנוגע לסדנה.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
