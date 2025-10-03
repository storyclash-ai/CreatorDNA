import React, { useEffect, useState } from "react";

type StepMeta = {
  src: string;
  title: string;
  caption: string;
  alt: string;
};

const meta: Omit<StepMeta, "src">[] = [
  { title: "Tell Us About Your Brand",  caption: "Enter your brand or website to get started.",         alt: "Onboarding brand/URL input" },
  { title: "Brand Match",               caption: "Automatic detection of your brand profile.",          alt: "Suggested IG profile" },
  { title: "Markets & Competitors",     caption: "Our AI analyzes markets and detects competitors.",    alt: "Competitors list" },
  { title: "Collaborations",            caption: "Discover known creator collaborations.",              alt: "Collaborations list" },
  { title: "Creator Matches",           caption: "Get your perfect matches instantly.",                 alt: "Creator matches result" },
];

// Prüft, ob Bild existiert
const checkImage = (url: string) =>
  new Promise<boolean>((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });

export default function HowItWorks() {
  const [steps, setSteps] = useState<StepMeta[]>([]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const candidates = await Promise.all(
        [1, 4, 7, 8, 9].map((stepNum, i) => {
          const src = `/flow/step-${String(stepNum).padStart(2, "0")}.png`;
          return checkImage(src).then((ok) => ({ ok, src, idx: i + 1 }));
        })
      );

      const present = candidates
        .filter(c => c.ok)
        .map(c => ({
          src: c.src,
          title: meta[c.idx - 1]?.title ?? `Step ${c.idx}`,
          caption: meta[c.idx - 1]?.caption ?? "",
          alt: meta[c.idx - 1]?.alt ?? `Step ${c.idx}`
        }));

      if (!cancelled) setSteps(present);
    })();

    return () => { cancelled = true; };
  }, []);

  if (steps.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 mt-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#233C42] text-center">
        How CreatorDNA Works
      </h2>
      <p className="mt-3 text-center text-[#233C42]/70 max-w-2xl mx-auto">
        Our AI-powered process analyzes your brand and finds the perfect creator matches - in just a few steps.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <article
            key={s.src}
            className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="px-5 py-4">
              <div className="flex items-center gap-2 text-[#233C42]/60 text-sm mb-1">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-[#E40DA8] to-[#7424B3] text-white font-semibold text-xs">
                  {i + 1}
                </span>
                <span>Step {i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#233C42]">{s.title}</h3>
              <p className="text-[#233C42]/70 mt-1">{s.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}