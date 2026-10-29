import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import SiteHeader from '../components/SiteHeader'
import HeroArches from '../components/HeroArches'
import Countdown from '../components/Countdown'
import OurStory from '../components/OurStory'
import MilestoneBanner from '../components/MilestoneBanner'
import CeremonyVenue from '../components/CeremonyVenue'
import StatsStrip from '../components/StatsStrip'
import BlessingSection from '../components/BlessingSection'
import Gallery from '../components/Gallery'
import WishesSection from '../components/WishesSection'
import SiteFooter from '../components/SiteFooter'
import BackgroundMusic from '../components/BackgroundMusic'
import FloralScatter from '../components/FloralScatter'

export type Lang = 'en' | 'ar'

const Home: NextPage = () => {
  const [lang, setLang] = useState<Lang>('ar')

  // Fade sections in as they scroll into view; sections already on screen at load are left as is
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section')).filter(
      (s) => s.getBoundingClientRect().top > window.innerHeight
    )
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    sections.forEach((s) => {
      s.classList.add('reveal')
      obs.observe(s)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <main dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang} className="relative selection:bg-gold-300 selection:text-olive-900">

      <FloralScatter />

      {/* Music Controller & Lang Switcher */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3" dir="ltr">
        <div className="flex gap-1 p-1 bg-white/90 backdrop-blur-md border border-gold-400/40 rounded-full shadow-lg">
          {(['en', 'ar'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                lang === l ? 'bg-gold-500 text-white' : 'text-olive-800 hover:text-gold-500'
              }`}
            >
              {l === 'en' ? 'EN' : 'ع'}
            </button>
          ))}
        </div>
        <BackgroundMusic lang={lang} />
      </div>

      {/* <SiteHeader lang={lang} /> */}
      <HeroArches lang={lang} />
      <Countdown lang={lang} />
      <OurStory lang={lang} />
      {/* <MilestoneBanner lang={lang} /> */}
      <CeremonyVenue lang={lang} />
      <StatsStrip lang={lang} />
      <BlessingSection lang={lang} />
      {/* <Gallery lang={lang} /> */}
      <WishesSection lang={lang} />
      <SiteFooter lang={lang} />
    </main>
  )
}

export default Home
