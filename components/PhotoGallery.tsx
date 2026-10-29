import type { Lang } from "../pages/index";
import Animate from "./Animate";

interface Props {
  lang: Lang;
}

const photos = [
  {
    src: "/2df7c0b0-c0aa-42aa-b529-08ce92e5898b.png",
    alt: "Aya and Amr sharing a quiet moment",
    altAr: "آية وعمرو في لحظة جميلة",
    className: "photo-gallery__portrait",
  },
  {
    src: "/f376ca69-2259-4e6b-9553-472407025f7d.png",
    alt: "Aya and Amr laughing together",
    altAr: "آية وعمرو يضحكان معًا",
    className: "photo-gallery__candid",
  },
  {
    src: "/f8c8cb47-011b-40a0-8334-e4292b165214.png",
    alt: "Aya and Amr celebrating their engagement",
    altAr: "آية وعمرو يحتفلان بخطوبتهما",
    className: "photo-gallery__rings",
  },
  {
    src: "/4d667dfa-0dbd-4ecc-8faa-531fa828067f.png",
    alt: "Aya and Amr with their engagement sign",
    altAr: "آية وعمرو مع لوحة خطوبتهما",
    className: "photo-gallery__engagement",
  },
  {
    src: "/80f61e02-43d3-420e-947b-6e5271d0ecc5.png",
    alt: "Aya and Amr together among the flowers",
    altAr: "آية وعمرو مع باقة الزهور",
    className: "photo-gallery__together",
  },
];

export default function PhotoGallery({ lang }: Props) {
  const isAr = lang === "ar";

  return (
    <section className="photo-gallery" aria-labelledby="photo-gallery-title">
      <div className="photo-gallery__inner">
        <Animate delay={0} duration={0.9}>
          <header className="photo-gallery__header" dir={isAr ? "rtl" : "ltr"}>
            <p className="photo-gallery__eyebrow">
              {isAr ? "حكايتنا" : "A LITTLE LOOK INTO OUR STORY"}
            </p>
            <h2 id="photo-gallery-title">
              {isAr ? "لحظات من حكايتنا" : "A few of our favorite moments"}
            </h2>
            <p className="photo-gallery__intro">
              {isAr
                ? "بعض اللحظات الجميلة التي نحب أن نشاركها معكم"
                : "A few moments we love, saved for a day worth remembering."}
            </p>
          </header>
        </Animate>

        <div className="photo-gallery__grid">
          {photos.map((photo, index) => (
            <Animate
              key={photo.src}
              delay={0.08 * index}
              duration={0.8}
              distance={18}
              className={`photo-gallery__item ${photo.className}`}
            >
              <img src={photo.src} alt={isAr ? photo.altAr : photo.alt} loading="lazy" />
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}