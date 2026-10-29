import { useEffect, useState } from "react";
import type { Lang } from "../pages/index";

interface Props {
  lang: Lang;
}

const weddingDate = new Date("December 5, 2026 14:00:00").getTime();

const pad = (n: number) => (n < 10 ? "0" + n : String(n));

function Sprig() {
  return (
    <div className="text-olive-600/60 hidden sm:flex items-center justify-center">
      <svg className="w-6 h-8 text-olive-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8 7 5 12 12 22C19 12 16 7 12 2Z" opacity="0.3"></path>
        <path
          d="M12 2C10 8 7 14 12 22M12 7C9 9 7 12 12 15M12 10C15 12 17 15 12 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        ></path>
      </svg>
    </div>
  );
}

export default function Countdown({ lang }: Props) {
  const isAr = lang === "ar";
  // Computed after mount so server and client markup match
  const [left, setLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const update = () => {
      const difference = weddingDate - Date.now();
      if (difference > 0) {
        setLeft({
          days: pad(Math.floor(difference / (1000 * 60 * 60 * 24))),
          hours: pad(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
          minutes: pad(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))),
          seconds: pad(Math.floor((difference % (1000 * 60)) / 1000)),
        });
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: left.days, label: isAr ? "يوم" : "Days" },
    { value: left.hours, label: isAr ? "ساعة" : "Hours" },
    { value: left.minutes, label: isAr ? "دقيقة" : "Minutes" },
    { value: left.seconds, label: isAr ? "ثانية" : "Seconds" },
  ];

  return (
    <section className="py-16 md:py-20 bg-cream-100 relative border-y border-gold-400/20" id="countdown">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="w-12 h-[1px] bg-gold-400"></span>
          <h2 className="font-cormorant italic text-3xl md:text-4xl text-olive-900 font-normal">
            {isAr ? "آية & عمرو" : "Aya & Amr"}
          </h2>
          <span className="w-12 h-[1px] bg-gold-400"></span>
        </div>
        <p className="text-xs uppercase tracking-[0.25em] text-olive-600 font-medium mb-12">
          {isAr ? "نعدّ الأيام حتى نلتقي للأبد" : "Counting down to our forever"}
        </p>

        <div className="grid grid-cols-4 gap-2 sm:flex sm:items-center sm:justify-center sm:gap-10 md:gap-14" dir="ltr">
          {units.map((u, i) => (
            <div key={u.label} className="contents">
              {i > 0 && <Sprig />}
              <div className="flex flex-col items-center">
                <span className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-gold-500 font-light tracking-tight">
                  {u.value}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-olive-700 mt-1 font-medium">
                  {u.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <a
            className="btn-lux inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gold-400 text-olive-900 hover:bg-gold-500 hover:text-white text-xs tracking-wider uppercase font-medium shadow-sm"
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Aya+%26+Amr&dates=20261205T120000Z/20261205T163000Z&details=Celebration+of+the+Wedding+and+Katb+El-Kitab+of+Aya+%26+Amr&location=Al-Ali+Al-Azeem+Mosque,+Cairo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-calendar-plus text-gold-500 group-hover:text-white"></i>
            {isAr ? "أضف إلى تقويم جوجل" : "Add to Google Calendar"}
          </a>
        </div>
      </div>
    </section>
  );
}
