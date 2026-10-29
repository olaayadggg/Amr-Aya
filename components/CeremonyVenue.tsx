import type { Lang } from "../pages/index";

interface Props {
  lang: Lang;
}

export default function CeremonyVenue({ lang }: Props) {
  const isAr = lang === "ar";

  return (
    <section className="py-20 bg-cream-50 relative" id="venue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" opacity="0.3"></path>
              <path
                d="M12 5C11 9 8 12 4 13C8 14 11 17 12 21C13 17 16 14 20 13C16 12 13 9 12 5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              ></path>
            </svg>
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">
            {isAr ? "المكان والبرنامج" : "Sacred Venue & Program"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal text-olive-900 mt-2 mb-4">
            {isAr ? "هنا تبدأ الحكاية للأبد" : "Where Forever Begins"}
          </h2>
          <p className="text-olive-600 text-sm">
            {isAr
              ? "يسعدنا أن تشاركونا أمسية من الفرح والبركة والعشاء والاحتفال."
              : "Please join us for an evening of joyous spiritual union, dinner, and cherished celebration."}
          </p>
        </div>

        <div className="card-lux max-w-5xl mx-auto bg-white border border-gold-300/40 overflow-hidden grid grid-cols-1 md:grid-cols-2 group">
          <div className="overflow-hidden h-72 md:h-auto bg-cream-100 photo-fade">
            <img
              alt={isAr ? "مسجد العلي العظيم" : "Al-Ali Al-Azeem Mosque Ceremony Hall"}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              src="/mosque.png"
            />
          </div>

          <div className="p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-gold-600 font-semibold block mb-1">
                {isAr ? "السبت ٥ ديسمبر • ٢:٠٠ ظهرًا" : "Saturday 5 December • 02:00 PM"}
              </span>
              <h3 className="text-2xl font-playfair text-olive-900 mb-3">
                {isAr ? "كتب الكتاب وعقد القران" : "Katb El-Kitab & Nuptials"}
              </h3>
              <p className="text-olive-600 text-xs sm:text-sm leading-relaxed mb-6">
                {isAr
                  ? "مراسم عقد القران في القاعة الرئيسية بمسجد العلي العظيم."
                  : "The formal marriage contract ceremony held in the prestigious main banquet hall of Al-Ali Al-Azeem Mosque."}
              </p>

              <div className="space-y-3 pt-5 border-t border-cream-200 text-sm text-olive-800">
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-mosque text-gold-500 mt-1"></i>
                  <span>{isAr ? "قاعة مسجد العلي العظيم" : "Al-Ali Al-Azeem Mosque Hall"}</span>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-location-dot text-gold-500 mt-1"></i>
                  <span>{isAr ? "محور مدينة نصر / القاهرة الجديدة، القاهرة، مصر" : "Nasr City / New Cairo Corridor, Cairo, Egypt"}</span>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-square-parking text-gold-500 mt-1"></i>
                  <span>{isAr ? "تتوفر خدمة صف السيارات لجميع الضيوف" : "Valet parking available for all guests"}</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                className="btn-lux group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gold-400 text-olive-900 hover:bg-gold-500 hover:text-white text-xs tracking-wider uppercase font-medium shadow-sm"
                href="https://www.google.com/maps/search/?api=1&query=Al-Ali+Al-Azeem+Mosque+Cairo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-map-location-dot text-gold-500 group-hover/btn:text-white"></i>
                <span>{isAr ? "عرض على الخريطة" : "View on Maps"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
