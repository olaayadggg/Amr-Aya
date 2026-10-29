import type { Lang } from '../pages/index'
import Animate from './Animate'

interface Props { lang: Lang }

export default function DateSection({ lang }: Props) {
  const isAr = lang === 'ar'
  return (
    <section style={{ padding: '100px 24px', textAlign: 'center', background: 'var(--cream)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      <Animate delay={0} duration={0.9}>
        <p style={{ fontFamily: isAr ? 'var(--font-arabic-classic)' : 'var(--font-montserrat)', fontSize: '11px', letterSpacing: isAr ? '0' : '4px', textTransform: isAr ? 'none' : 'uppercase', color: 'var(--gold)', marginBottom: '30px', direction: isAr ? 'rtl' : 'ltr' }}>
          {isAr ? 'موعدنا مع السعادة' : 'The day we say “I do”'}
        </p>
      </Animate>
      <Animate delay={0.2} duration={1} distance={22}>
        <div style={{ maxWidth: '620px', margin: '0 auto', padding: '34px 24px', borderTop: '1px solid var(--border-strong)', borderBottom: '1px solid var(--border-strong)', position: 'relative' }}>
          <div aria-hidden="true" style={{ color: 'var(--gold)', fontSize: '30px', lineHeight: 1, marginBottom: '18px' }}>❀</div>
          <p style={{ fontFamily: isAr ? 'var(--font-arabic-special)' : 'var(--font-great-vibes)', fontSize: isAr ? '38px' : '48px', color: 'var(--text-dark)', lineHeight: 1.3 }}>
            {isAr ? 'السبت، ٥ ديسمبر ٢٠٢٦' : 'Saturday, December 5, 2026'}
          </p>
          <p style={{ fontFamily: isAr ? 'var(--font-arabic-classic)' : 'var(--font-cormorant)', fontSize: isAr ? '18px' : '20px', color: 'var(--text-mid)', marginTop: '14px', direction: isAr ? 'rtl' : 'ltr' }}>
            {isAr ? 'ليلة من العمر نحب أن نعيشها معكم' : 'A beautiful beginning, made brighter with you'}
          </p>
        </div>
      </Animate>
      <Animate delay={0.4} duration={0.9} distance={16}>
        <p style={{ fontFamily: isAr ? 'var(--font-arabic-classic)' : 'var(--font-montserrat)', fontSize: '10px', letterSpacing: isAr ? '0' : '3px', textTransform: isAr ? 'none' : 'uppercase', color: 'var(--text-light)', marginTop: '28px', direction: isAr ? 'rtl' : 'ltr' }}>
          {isAr ? 'آية وعمرو · ٢٠٢٦' : 'Aya & Amr · 2026'}
        </p>
      </Animate>
    </section>
  )
}
