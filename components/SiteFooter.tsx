import type { Lang } from "../pages/index";

interface Props {
  lang: Lang;
}

export default function SiteFooter({ lang }: Props) {
  const isAr = lang === "ar";

  return (
    <footer className="bg-cream-100 border-t border-gold-400/20 py-6 relative">
      <p className="max-w-7xl mx-auto px-4 text-center text-xs text-olive-600 tracking-wider">
        {/* {isAr ? "© ٢٠٢٦ آية & عمرو" : "© 2026 Aya & Amr"} */}
        {/* <span className="text-gold-500 mx-2">•</span> */}
        <span className="font-amiri text-sm text-gold-600">نسألكم الدعاء بالتوفيق والبركة</span>
      </p>
    </footer>
  );
}
