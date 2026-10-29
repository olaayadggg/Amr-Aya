import type { Lang } from "../pages/index";

interface Props {
  lang: Lang;
}

export default function MilestoneBanner({ lang }: Props) {
  const isAr = lang === "ar";

  return (
    <section className="py-12 bg-white border-y border-gold-300/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-cream-50 border border-gold-400/40 rounded-sm overflow-hidden card-lux">
          <div className="md:col-span-6 h-72 md:h-96 overflow-hidden photo-fade">
            <img
              alt={isAr ? "آية وعمرو بخاتمي الزواج" : "Aya & Amr Showing Wedding Rings"}
              className="w-full h-full object-cover hover:scale-105 transition duration-700 object-top"
              src="/f8c8cb47-011b-40a0-8334-e4292b165214.png"
            />
          </div>
          <div className="md:col-span-6 p-6 sm:p-10">
            <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold-300 flex items-center justify-center text-gold-600 mb-4">
              <i className="fa-solid fa-ring text-lg"></i>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-gold-600 font-semibold block mb-1">
              {isAr ? "محطة • الفاتحة والدبل" : "Milestone • Fatiha & Rings"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-playfair text-olive-900 mb-3">
              {isAr ? "البداية المباركة" : "The Blessed Beginning"}
            </h3>
            <p className="text-olive-700 text-sm leading-relaxed mb-4">
              {isAr
                ? "بارتداء دبلتينا وكلمات العهد، احتفلنا بعقد رباطنا في حضور من ترافقنا دعواتهم في كل خطوة."
                : "Wearing our rings and speaking the words of devotion, we commemorated the signing and pledge of our bond in the presence of those whose du'aa guides our lives."}
            </p>
            <div className="font-amiri text-lg text-gold-600 italic">
              &quot;وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
