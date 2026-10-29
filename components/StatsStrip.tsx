import type { Lang } from "../pages/index";

interface Props {
  lang: Lang;
}

export default function StatsStrip({ lang }: Props) {
  const isAr = lang === "ar";
  const stats = [
    { icon: "fa-regular fa-calendar-check", value: isAr ? "٥ ديسمبر ٢٠٢٦" : "Dec 5, 2026", label: isAr ? "موعد الزفاف" : "Sacred Wedding Date" },
    { icon: "fa-solid fa-mosque", value: isAr ? "العلي العظيم" : "Al-Ali Al-Azeem", label: isAr ? "مكان عقد القران" : "Ceremony Venue" },
    { icon: "fa-regular fa-clock", value: isAr ? "٢:٠٠ ظهرًا" : "2:00 PM", label: isAr ? "بداية الاستقبال" : "Reception Commences" },
    // { icon: "fa-solid fa-infinity", value: isAr ? "للأبد" : "Forever", label: isAr ? "حب ومودة" : "Love & Companionship" },
  ];

  return (
    <section className="py-12 bg-cream-100 border-y border-gold-400/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.icon} className="flex flex-col items-center">
              <div className="text-gold-500 mb-2 text-2xl">
                <i className={s.icon}></i>
              </div>
              <span className="font-cormorant text-2xl sm:text-3xl font-semibold text-olive-900">{s.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-olive-600 mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
