import { useState } from "react";
import type { Lang } from "../pages/index";
import { sendToCouple } from "./sendToCouple";

interface Props {
  lang: Lang;
}

interface Wish {
  name: string;
  message: string;
}

const inputClass =
  "w-full px-4 py-2.5 bg-cream-50 border border-cream-300 focus:border-gold-500 focus:ring-0 text-sm";
const labelClass = "block text-xs uppercase tracking-wider text-olive-800 font-medium mb-1";

export default function WishesSection({ lang }: Props) {
  const isAr = lang === "ar";
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name")).trim();
    const message = String(data.get("message")).trim();
    if (!name || !message) return;

    setLoading(true);
    setError(false);
    setSubmitted(false);
    try {
      await sendToCouple(name, message);
      setWishes((prev) => [{ name, message }, ...prev]);
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-cream-100 relative border-t border-gold-300/30" id="wishes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="card-lux bg-white border border-gold-400/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-12">
          <div className="text-start mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold block mb-1">
              {isAr ? "الدعاء والتهاني" : "Du'aa & Blessings"}
            </span>
            <h2 className="text-3xl font-playfair text-olive-900">
              {isAr ? "اترك لنا أمنية من القلب" : "Leave a Heartfelt Wish"}
            </h2>
            <p className="text-olive-600 text-xs sm:text-sm mt-1">
              {isAr ? "أرسل دعواتك وتهانيك للعروسين." : "Send your prayers and blessings to the bride & groom."}
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className={labelClass}>{isAr ? "الاسم" : "Your Name"}</label>
                <input className={inputClass} name="name" required type="text" />
              </div>
            <div>
              <label className={labelClass}>{isAr ? "دعاؤك / رسالتك" : "Your Du'aa / Message"}</label>
              <textarea
                className={inputClass}
                name="message"
                placeholder={
                  isAr
                    ? "بارك الله لكما وجمع بينكما في خير..."
                    : "May Allah bless your home with eternal joy, peace, and love..."
                }
                required
                rows={3}
              ></textarea>
            </div>
            <button
              className="btn-lux px-8 py-3 bg-white border border-gold-400 text-olive-900 hover:bg-gold-500 hover:text-white text-xs uppercase tracking-wider font-medium shadow-sm disabled:opacity-60"
              type="submit"
              disabled={loading}
            >
              {loading ? (isAr ? "جارٍ الإرسال..." : "Sending...") : isAr ? "أرسل الأمنية" : "Send Wish"}
            </button>
            {submitted && (
              <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm rounded">
                {isAr
                  ? "شكرًا لك على رسالتك الجميلة!"
                  : "Thank you for your lovely message!"}
              </div>
            )}
            {error && (
              <p className="text-sm text-red-700">
                {isAr ? "تعذر الإرسال، حاول مرة أخرى." : "Couldn't send your wish. Please try again."}
              </p>
            )}
          </form>

          {wishes.length > 0 && (
            <div className="space-y-4 mt-8">
              {wishes.map((w, i) => (
                <div key={i} className="p-5 bg-cream-50 border-s-2 border-gold-400 border-t border-e border-b border-cream-200">
                  <span className="font-cormorant text-lg font-bold text-olive-900 block mb-2">{w.name}</span>
                  <p className="text-olive-700 text-xs sm:text-sm font-sans italic">&quot;{w.message}&quot;</p>
                </div>
              ))}
            </div>
          )}
          </div>

          <div className="lg:col-span-5 bg-cream-200 h-96 lg:h-auto overflow-hidden relative">
            <img
              alt={isAr ? "آية وعمرو" : "Aya & Amr Looking forward"}
              className="w-full h-full object-cover object-top"
              src="/f376ca69-2259-4e6b-9553-472407025f7d.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 via-35% to-transparent to-65%"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <span className="font-amiri text-2xl font-bold block">آيــة &amp; عـمـرو</span>
              <span className="font-cormorant italic text-sm text-gold-300 tracking-wider">
                {isAr ? "السبت، ٥ ديسمبر ٢٠٢٦" : "Saturday, 5 December 2026"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
