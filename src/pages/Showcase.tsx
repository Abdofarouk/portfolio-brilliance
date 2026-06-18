import { useState } from "react";
import imgFiber from "@/assets/showcase-fiber.svg";
import imgArch from "@/assets/showcase-architecture.svg";
import imgAgents from "@/assets/showcase-agents.svg";
import imgMlops from "@/assets/showcase-mlops.svg";
import imgRan from "@/assets/showcase-ran.svg";
import imgStandards from "@/assets/showcase-standards.svg";
import imgPatents from "@/assets/showcase-patents.svg";

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
      "Operator-ready target architecture spanning RAN, Core, OAM, customer services and monetization with lifecycle governance built in.",
    image: imgArch,
    meta: "Cross‑domain · Cloud‑native",
    accent: true,
  },
  {
    title: "ETSI ZSM‑012 — AI Enablers for Network & Service Automation",
    category: "Standards",
    blurb:
      "Rapporteur role delivering a published ETSI specification for AI enablers in closed-loop network and service automation.",
    image: imgStandards,
    meta: "Published Specification",
  },
  {
    title: "Agent‑Based Concepts for Telco",
    category: "Research",
    blurb:
      "Integration of generative and agentic AI patterns into cloud-native telco architecture for intent translation, planning and orchestration.",
    image: imgAgents,
    meta: "Concept · Prototype",
  },
  {
    title: "MLOps & LLMOps for Telco Workloads",
    category: "Architecture",
    blurb:
      "Lifecycle pipelines, observability and AI workload orchestration tailored for telecom reliability, scalability and security constraints.",
    image: imgMlops,
    meta: "Pipelines · LCM",
  },
  {
    title: "AI for the RAN — and the RAN for AI",
    category: "Research",
    blurb:
      "Technical leadership for AI/ML/GenAI in RAN while shaping radio systems that better support emerging AI workloads.",
    image: imgRan,
    meta: "O‑RAN · AI‑RAN Alliance",
  },
  {
    title: "100+ Granted Patents",
    category: "Leadership",
    blurb:
      "Inventor portfolio across AI/ML for wireless networks, automation and 6G, reinforcing execution credibility with innovation depth.",
    image: imgPatents,
    meta: "Inventor",
  },
  {
    title: "5G Transmission Protocols",
    category: "Research",
    blurb:
      "Foundational work at Ericsson and TU Dresden on 5G transmission technologies and energy-efficient wireless optimization.",
    image: imgFiber,
    meta: "Foundational work",
  },
];

const categories = ["All", "Architecture", "Standards", "Research", "Leadership"] as const;
const valueProps = [
  "Architecture Ownership",
  "Stakeholder Alignment",
  "Standards Leadership",
  "Innovation Execution",
  "Cross-Functional Delivery",
];

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
            Evidence of strategic and technical execution.
          </h1>
          <div className="mt-12 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-[4px] border px-4 py-2 text-sm font-semibold transition-all ${
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-hairline text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-hairline bg-secondary/30 py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Role value proposition
            </p>
            <div className="mt-3 overflow-hidden">
              <div className="flex w-max marquee gap-6 pr-6">
                {[...valueProps, ...valueProps].map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex whitespace-nowrap rounded-[4px] border border-hairline bg-card/60 px-4 py-1 text-sm font-semibold tracking-wide text-foreground/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
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
                  className={`group relative flex flex-col overflow-hidden rounded-[6px] border border-hairline bg-card shadow-soft transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-card ${span}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute left-5 top-5 rounded-[4px] bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-ink">
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
            Open to architecting measurable AI impact in telecom.
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-white/70">
            If you are scaling AI-native telecom capabilities, I am open to discussing architecture leadership, standards strategy and delivery execution.
          </p>
          <a
            href="mailto:abdelrahman@abdelkader-online.com"
            className="mt-10 inline-flex items-center gap-2 rounded-[4px] bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#c40062]"
          >
            abdelrahman@abdelkader-online.com
          </a>
        </div>
      </section>
    </>
  );
};

export default Showcase;
