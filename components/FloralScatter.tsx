// Flower clusters cut from the vintage floral pattern, scattered down the page edges.
// A fixed seed keeps the "random" layout identical on server and client.

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const COUNT = 18;
const rand = mulberry32(20261205);

const flowers = Array.from({ length: COUNT }, (_, i) => {
  const onLeft = i % 2 === 0;
  return {
    src: `/florals/flower-${1 + Math.floor(rand() * 8)}.png`,
    top: ((i + rand() * 0.8) / COUNT) * 100,
    edge: -6 + rand() * 8,
    onLeft,
    size: 0.7 + rand() * 0.6,
    rotate: -25 + rand() * 50,
    flip: rand() > 0.5,
  };
});

export default function FloralScatter() {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
      {flowers.map((f, i) => (
        <img
          key={i}
          src={f.src}
          alt=""
          loading="lazy"
          className="absolute opacity-20 sm:opacity-35 mix-blend-multiply"
          style={{
            top: `${f.top}%`,
            [f.onLeft ? "left" : "right"]: `${f.edge}%`,
            width: `calc(clamp(110px, 20vw, 260px) * ${f.size.toFixed(2)})`,
            transform: `rotate(${f.rotate.toFixed(1)}deg) scaleX(${f.flip ? -1 : 1})`,
          }}
        />
      ))}
    </div>
  );
}
