import { useState } from "react";
import imgFiber from "@/assets/showcase-fiber.jpg";
import imgArch from "@/assets/showcase-architecture.jpg";
import imgAgents from "@/assets/showcase-agents.jpg";
import imgMlops from "@/assets/showcase-mlops.jpg";
import imgRan from "@/assets/showcase-ran.jpg";
import imgStandards from "@/assets/showcase-standards.jpg";
import imgPatents from "@/assets/showcase-patents.jpg";

type Item = {
  title: string;
  category: "Architecture" | "Standards" | "Research" | "Leadership";
  blurb: string;
  image: string;
  meta: string;
  accent?: boolean;
};

const items: Item[] = [
  {
    title: "AI‑Native 6G Reference Architecture",
    category: "Architecture",
    blurb:
      "End‑to‑end blueprint spanning RAN, Core, OAM, customer services and monetization — with data flows, model LCM, observability and security baked in.",
    image: imgArch,
    meta: "Cross‑domain · Cloud‑native",
    accent: true,
  },
  {
    title: "ETSI ZSM‑012 — AI Enablers for Network & Service Automation",
    category: "Standards",
    blurb:
      "Rapporteur of the ETSI specification defining AI enablers for closed‑loop network and service automation.",
    image: imgStandards,
    meta: "Published Specification",
  },
  {
    title: "Agent‑Based Concepts for Telco",
    category: "Research",
    blurb:
      "Integration of generative and agentic AI patterns into cloud‑native telco architectures, spanning intent translation, planning and orchestration.",
    image: imgAgents,
    meta: "Concept · Prototype",
  },
  {
    title: "MLOps & LLMOps for Telco Workloads",
    category: "Architecture",
    blurb:
      "Lifecycle pipelines, observability and AI/ML workload orchestration designed for the realities of telecom operations.",
    image: imgMlops,
    meta: "Pipelines · LCM",
  },
  {
    title: "AI for the RAN — and the RAN for AI",
    category: "Research",
    blurb:
      "Technical direction of projects bringing AI/ML/GenAI into RAN, while shaping a RAN that natively serves AI workloads.",
    image: imgRan,
    meta: "O‑RAN · AI‑RAN Alliance",
  },
  {
    title: "100+ Granted Patents",
    category: "Leadership",
    blurb:
      "Inventor portfolio across AI/ML for wireless networks, automation and 6G — recognized inside and beyond the standards community.",
    image: imgPatents,
    meta: "Inventor",
  },
  {
    title: "5G Transmission Protocols",
    category: "Research",
    blurb:
      "Earlier research at Ericsson and TU Dresden on 5G transmission technologies and energy‑efficient wireless optimization.",
    image: imgFiber,
    meta: "Foundational work",
  },
];

const categories = ["All", "Architecture", "Standards", "Research", "Leadership"] as const;

const Showcase = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      {/* Header */}
      <section className="border-b border-hairline bg-background pt-32">
        <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-20">
          <p className="reveal text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Showcase
          </p>
          <h1 className="reveal reveal-delay-1 mt-4 max-w-4xl font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            A gallery of capabilities — architecture, standards, research, leadership.
          </h1>
          <div className="mt-12 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  active === c
                    ? "border-ink bg-ink text-ink-foreground"
                    : "border-hairline text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
            {filtered.map((item, i) => {
              // Bento sizing — first item full width on lg, rest balanced
              const span =
                item.accent && active === "All"
                  ? "lg:col-span-4 lg:row-span-2"
                  : i % 5 === 1
                  ? "lg:col-span-2"
                  : i % 5 === 2
                  ? "lg:col-span-3"
                  : i % 5 === 3
                  ? "lg:col-span-3"
                  : "lg:col-span-2";

              return (
                <article
                  key={item.title}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border border-hairline bg-card shadow-soft transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-card ${span}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium tracking-wide text-ink backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-6 p-7 lg:p-8">
                    <div>
                      <h3 className="font-display text-2xl font-light leading-snug tracking-tight lg:text-[1.7rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                        {item.blurb}
                      </p>
                    </div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {item.meta}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-hairline bg-ink py-28 text-ink-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">
            Open to conversations
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Architecting AI‑native networks is a team sport.
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-white/70">
            If you're building the next generation of telecommunications, I'd love to hear about it.
          </p>
          <a
            href="mailto:abdelrahman@abdelkader-online.com"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition-all hover:bg-white/90"
          >
            abdelrahman@abdelkader-online.com
          </a>
        </div>
      </section>
    </>
  );
};

export default Showcase;
