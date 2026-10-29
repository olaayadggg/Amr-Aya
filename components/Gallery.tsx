import type { Lang } from "../pages/index";

interface Props {
  lang: Lang;
}

export default function Gallery({ lang }: Props) {
  const isAr = lang === "ar";
  const items = [
    { src: "/5ee13a0e-64ed-452d-8bab-7a60aaee44a2.png", title: isAr ? "لوحة الترحيب" : "The Welcome Inscription", tag: isAr ? "آية & عمرو" : "Aya & Amr" },
    { src: "/2df7c0b0-c0aa-42aa-b529-08ce92e5898b.png", title: isAr ? "حديث جميل" : "Sweet Conversation", tag: isAr ? "فرحة خالصة" : "Pure Joy" },
    { src: "/80f61e02-43d3-420e-947b-6e5271d0ecc5.png", title: isAr ? "دعاء لاجتماعنا" : "The Du'aa for Our Union", tag: isAr ? "نعمة وبركة" : "Spiritual Grace" },
    { src: "/f8c8cb47-011b-40a0-8334-e4292b165214.png", title: isAr ? "رباط للأبد" : "Tied for Eternity", tag: isAr ? "الدبل الذهبية" : "The Golden Rings" },
  ];

  return (
    <section className="py-20 bg-cream-50 relative" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold block mb-1">
            {isAr ? "لحظاتنا" : "Our Moments"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal text-olive-900 mb-3">
            {isAr ? "لقاء عامر بالحب" : "A Grand Gathering of Love"}
          </h2>
          <p className="text-olive-600 text-xs sm:text-sm">
            {isAr
              ? "لقطات تحفظ وعودنا وضحكاتنا ودعواتنا المشتركة."
              : "Snapshots capturing our promises, joyful laughter, and shared blessings."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.src}
              className="group relative overflow-hidden bg-white border border-gold-300 p-2 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                  src={item.src}
                />
              </div>
              <div className="p-3 text-center">
                <span className="font-cormorant italic text-base text-olive-900 block">{item.title}</span>
                <span className="text-[10px] uppercase tracking-widest text-gold-600">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
