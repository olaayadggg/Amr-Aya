import type { Lang } from "../pages/index";

interface Props {
  lang: Lang;
}

export default function HeroArches({ lang }: Props) {
  const isAr = lang === "ar";
  const pillars = [
    {
      src: "/f8c8cb47-011b-40a0-8334-e4292b165214.png",
      alt: isAr ? "آية وعمرو مع لوحة الترحيب" : "Aya & Amr with Welcome Sign",
      frame: "aspect-[9/18] shadow-lg transform translate-y-4 hover:-translate-y-1",
      captionClass: "mt-3",
    },
    {
      src: "/4d667dfa-0dbd-4ecc-8faa-531fa828067f.png",
      alt: isAr ? "آية وعمرو يبتسمان معًا" : "Aya & Amr Smiling Together",
      frame: "aspect-[9/20] shadow-2xl -translate-y-3 hover:-translate-y-5 border-2 border-gold-400",
      captionClass: "mt-2 font-semibold",
    },
    {
      src: "/f376ca69-2259-4e6b-9553-472407025f7d.png",
      alt: isAr ? "آية وعمرو ينظران لبعضهما" : "Aya & Amr Looking at each other",
      frame: "aspect-[9/18] shadow-lg transform translate-y-8 hover:translate-y-4",
      captionClass: "mt-3",
    },
  ];

  return (
    <section className="relative pt-12 pb-20 md:py-24 overflow-hidden" id="home">
      <div className="absolute top-0 left-0 w-96 h-96 watercolor-wash rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] watercolor-wash rounded-full translate-x-1/3 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5 text-start z-10">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 21a9 9 0 0 1-9-9c0-4.97 4.03-9 9-9 4.14 0 7.64 2.81 8.68 6.64.12.44.2.9.24 1.36.08.9-.6 1.67-1.5 1.74-.84.07-1.56-.56-1.63-1.4-.04-.46-.14-.9-.3-1.32C16.8 6.4 14.6 4.5 12 4.5c-4.14 0-7.5 3.36-7.5 7.5 0 4.14 3.36 7.5 7.5 7.5 2.05 0 3.9-.82 5.25-2.15.58-.58 1.54-.58 2.12 0 .58.58.58 1.54 0 2.12C17.5 21.32 14.88 22.5 12 21z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">
                {isAr ? "حفل الزفاف" : "The Wedding Celebration"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-normal leading-tight text-olive-900 mb-6">
              {isAr ? "قلبان وبداية واحدة جميلة" : "Two Hearts, One Beautiful Beginning"}
            </h1>

            <div className="my-6 p-4 rounded-lg bg-white/70 border-r-2 border-l-2 border-gold-400 text-center shadow-sm">
              <p className="font-amiri text-2xl md:text-3xl text-olive-900 leading-relaxed font-bold tracking-wide">
                &quot;بُورِكَتْ فَاتِحَةُ العُمْرِ مَعَكَ.. وَبُورِكَ سَعْيٌ سِرْنَاهُ سَوِيًّا&quot;
              </p>
              <span className="text-[11px] uppercase tracking-widest text-gold-600 font-serif block mt-1">
                آيـة &amp; عـمـرو • Aya &amp; Amr
              </span>
            </div>
            <p className="text-olive-600 font-sans text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              {isAr
                ? "احتفال بالحب والمودة والرحمة. مع عائلتينا، يسعدنا ويشرفنا حضوركم لمشاركتنا فرحة زفافنا."
                : "A celebration of love, companionship, and endless devotion. Together with our families, we joyfully request the pleasure of your company as we celebrate our marriage."}
            </p>

            {/* <div className="flex flex-wrap gap-4 items-center">
              <a
                className="btn-lux px-8 py-3.5 bg-charcoal-800 text-cream-50 hover:bg-gold-500 hover:text-white text-xs uppercase tracking-[0.2em] font-medium shadow-md"
                href="#wishes"
              >
                {isAr ? "اترك أمنية" : "Send a Wish"}
              </a>
              <a
                className="btn-lux px-6 py-3.5 border border-olive-800 text-olive-900 hover:bg-olive-800 hover:text-cream-50 text-xs uppercase tracking-[0.2em] font-medium"
                href="#venue"
              >
                {isAr ? "مكان الحفل" : "View Venue"}
              </a>
            </div> */}
          </div>

          <div className="lg:col-span-7 flex justify-center items-end gap-3 sm:gap-4 md:gap-6 pt-4">
            {pillars.map((p) => (
              <div key={p.src} className="w-1/3 flex flex-col items-center">
                <div className={`gilded-arch photo-fade overflow-hidden w-full transition duration-500 ${p.frame}`}>
                  <img
                    alt={p.alt}
                    className="w-full h-full object-cover object-top hover:scale-105 transition duration-700"
                    src={p.src}
                  />
                </div>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
