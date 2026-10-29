import type { Lang } from "../pages/index";

interface Props {
  lang: Lang;
}

export default function SiteHeader({ lang }: Props) {
  const isAr = lang === "ar";
  const left = [
    { href: "#home", label: isAr ? "الرئيسية" : "Home" },
    { href: "#about", label: isAr ? "حكايتنا" : "Our Story" },
    { href: "#countdown", label: isAr ? "العد التنازلي" : "Countdown" },
    { href: "#venue", label: isAr ? "الحفل" : "Ceremony" },
  ];
  const right = [
    { href: "#gallery", label: isAr ? "الصور" : "Gallery" },
    { href: "#wishes", label: isAr ? "الدعاء والتهاني" : "Du'aa & Wishes" },
  ];
  const navClass =
    "hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-olive-800 font-medium";

  return (
    <header className="w-full bg-[#FAF7F0]/95 backdrop-blur-sm sticky top-0 z-40 border-b border-gold-400/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <nav className={navClass}>
          {left.map((l) => (
            <a key={l.href} className="hover:text-gold-500 transition-colors" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="text-center">
          <a className="inline-block group" href="#home">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-6 bg-gold-400"></span>
              <div className="text-center">
                <span className="font-cormorant italic text-2xl lg:text-3xl text-olive-900 tracking-wider font-semibold block">
                  {isAr ? "آية & عمرو" : "Aya & Amr"}
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-gold-600 block -mt-1">
                  {isAr ? "السبت • ٥ ديسمبر ٢٠٢٦" : "Saturday • 05 Dec 2026"}
                </span>
              </div>
              <span className="h-[1px] w-6 bg-gold-400"></span>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <nav className={navClass}>
            {right.map((l) => (
              <a key={l.href} className="hover:text-gold-500 transition-colors" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a
            className="btn-lux px-3 sm:px-4 py-1.5 border border-gold-400 text-olive-900 hover:bg-gold-400 hover:text-white text-[10px] sm:text-xs whitespace-nowrap tracking-widest uppercase font-serif"
            href="#wishes"
          >
            {isAr ? "شاركونا الفرحة" : "Join Celebration"}
          </a>
        </div>
      </div>
    </header>
  );
}
