import type { Lang } from "../pages/index";

interface Props {
  lang: Lang;
}

export default function OurStory({ lang }: Props) {
  const isAr = lang === "ar";

  return (
    <section className="py-20 md:py-28 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold block mb-2">
              {isAr ? "حكايتنا" : "Our Story"}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-normal text-olive-900 mb-6 leading-tight">
              {isAr ? "بدأت بكلمة، وكبرت بدعوة" : "It Started with a Hello"}
            </h2>
            <p className="text-olive-700 text-sm md:text-base leading-relaxed mb-4">
              {isAr
                ? "من أول حديث بيننا، شعرنا أننا وجدنا شيئًا مميزًا. ضحكنا كثيرًا، ودعونا كثيرًا، وعرفنا أن الله كتب لنا الخير معًا."
                : "From our very first chat, we knew we'd found something special. Lots of laughs and lots of prayers later, we're sure Allah brought us together."}
            </p>
            <p className="text-olive-700 text-sm md:text-base leading-relaxed mb-6">
              {isAr
                ? "كتبنا كتابنا وسط عائلتينا، والآن نستعد لأجمل يوم في حياتنا، ولن يكتمل فرحنا إلا بوجودكم معنا."
                : "We signed our Katb El-Kitab with our families by our side, and now we're getting ready for the big day. It wouldn't be the same without you!"}
            </p>
            {/* <div className="pt-2">
              <a
                className="btn-lux inline-block px-7 py-3 bg-charcoal-800 text-cream-50 hover:bg-gold-500 text-xs uppercase tracking-widest font-medium"
                href="#gallery"
              >
                {isAr ? "شاهد صورنا" : "See Our Photos"}
              </a>
            </div> */}
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="gilded-border card-lux p-3 bg-white">
                <div className="photo-fade overflow-hidden aspect-[4/5] bg-cream-200">
                  <img
                    alt={isAr ? "صورة آية وعمرو" : "Aya & Amr Full Portrait"}
                    className="w-full h-full object-cover object-top hover:scale-105 transition duration-700"
                    src="/3c2ac32c-486c-4712-9125-6b586c133df5.png"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -start-6 bg-white/95 backdrop-blur-md p-4 border border-gold-300 shadow-lg max-w-xs hidden sm:block">
                <p className="font-cormorant italic text-lg text-olive-900 leading-snug">
                  {isAr
                    ? "\"معًا، اليوم وكل يوم.\""
                    : "\"Together, today and always.\""}
                </p>
                <span className="text-[10px] uppercase tracking-widest text-gold-600 block mt-1 font-sans font-semibold">
                  {isAr ? "١٩ ديسمبر ٢٠٢٥" : "19 December 2025"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
