import type { Lang } from "../pages/index";

interface Props {
  lang: Lang;
}

export default function OurStory({ lang }: Props) {
  const isAr = lang === "ar";

  return (
    <section className="py-20 md:py-28 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" items-center">
         
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
              <div className="absolute z-10 -bottom-6 start-3 sm:-start-6 bg-white/95 backdrop-blur-md p-4 border border-gold-300 shadow-lg max-w-[85%] sm:max-w-xs">
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
