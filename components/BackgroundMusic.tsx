import { useEffect, useRef, useState } from 'react'
import type { Lang } from '../pages/index'

export default function BackgroundMusic({ lang }: { lang: Lang }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

 useEffect(() => {
  const audio = audioRef.current
  if (!audio) return

  audio.volume = 0.35
  audio.loop = true

  const tryPlay = () => {
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {})
  }

  // Start music after user interaction
  window.addEventListener('click', tryPlay, { once: true })
  window.addEventListener('touchstart', tryPlay, { once: true })

  // Stop music when page becomes hidden
  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      audio.pause()
      setPlaying(false)
    }
  }

  // Stop music when leaving the page/tab
  const handlePageHide = () => {
    audio.pause()
    setPlaying(false)
  }

  document.addEventListener('visibilitychange', handleVisibilityChange)
  window.addEventListener('pagehide', handlePageHide)

  // Try autoplay
  tryPlay()

  return () => {
    window.removeEventListener('click', tryPlay)
    window.removeEventListener('touchstart', tryPlay)

    document.removeEventListener(
      'visibilitychange',
      handleVisibilityChange
    )

    window.removeEventListener('pagehide', handlePageHide)

    audio.pause()
    audio.currentTime = 0
  }
}, [])

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    const audio = audioRef.current
    if (!audio) return
    if (playing) { audio.pause(); setPlaying(false) }
    else { audio.play().then(() => setPlaying(true)).catch(() => {}) }
  }

  const isAr = lang === 'ar'

  return (
    <>
      <audio ref={audioRef} src="/music2.mp3" preload="auto" />
      <button
        onClick={toggle}
        title="يا انا يا انا - فيروز"
        className="flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-md border border-gold-400/40 rounded-full shadow-lg text-olive-800 hover:bg-gold-50 transition-all text-xs font-medium tracking-wider"
      >
        <span className={`w-2 h-2 rounded-full animate-pulse ${playing ? 'bg-gold-500' : 'bg-emerald-500'}`}></span>
        <i className="fa-solid fa-music text-gold-500"></i>
        <span>
          {playing
            ? (isAr ? 'الموسيقى تعمل' : 'Playing Melody')
            : (isAr ? 'الموسيقى متوقفة' : 'Music Paused')}
        </span>
      </button>
    </>
  )
}
