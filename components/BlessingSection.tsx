import type { Lang } from "../pages/index";

interface Props {
  lang: Lang;
}

export default function BlessingSection({ lang }: Props) {
  const isAr = lang === "ar";

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 z-20">
            <div className="card-lux bg-white p-8 md:p-12 border border-gold-300 relative">
              <h4 className="font-amiri text-2xl md:text-3xl text-olive-900 font-bold mb-4 leading-relaxed">
                « بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ »
              </h4>
              {!isAr && (
                <p className="font-cormorant text-lg md:text-xl text-olive-700 italic leading-relaxed mb-6">
                  &quot;May Allah bless you both, shower His blessings upon you, and unite you both in harmony and goodness throughout all your days together.&quot;
                </p>
              )}
              {/* <div className="flex items-center gap-3 pt-2 border-t border-cream-200">
                <div className="w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-gold-600 text-xs font-serif font-bold">
                  A&amp;A
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-olive-900 block">
                    {isAr ? "دعاء الزواج" : "The Marital Prayer"}
                  </span>
                  <span className="text-[10px] text-olive-600 block">
                    {isAr ? "من السنة النبوية للعروسين" : "Sunnah Blessing for the Couple"}
                  </span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="lg:col-span-6 -mt-8 lg:mt-0 lg:-ms-12 z-10">
            <div className="gilded-border photo-fade overflow-hidden aspect-[4/5] shadow-xl">
              <img
                alt={isAr ? "آية وعمرو يضحكان معًا" : "Aya & Amr Laughing Together"}
                className="w-full h-full object-cover object-top hover:scale-105 transition duration-700"
                src="/80f61e02-43d3-420e-947b-6e5271d0ecc5.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
