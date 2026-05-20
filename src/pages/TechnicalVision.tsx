import { ShieldCheck, BrainCircuit, TowerControl, Activity, ArrowRight } from "lucide-react";

const principles = [
  {
    title: "From AI-Overlay to AI-Native",
    body: "AI shifts from an external optimization tool to an integral network component that can drive dynamic network behavior through agentic reasoning.",
    icon: BrainCircuit,
  },
  {
    title: "Reliability Dilemma",
    body: "Probabilistic LLM reasoning must be reconciled with deterministic telco reliability by separating proposal from execution.",
    icon: ShieldCheck,
  },
  {
    title: "Real-Time Latency Boundaries",
    body: "Millisecond control loops in RAN/Core cannot depend on centralized long-latency reasoning models.",
    icon: TowerControl,
  },
  {
    title: "Physical AI Control Loop",
    body: "GPU-enabled edge infrastructure supports near-real-time sense-analyze-act loops that optimize physical network behavior.",
    icon: Activity,
  },
];

const latencySplit = [
  {
    title: "Edge small/telco models",
    subtitle: "Latency-critical execution",
    points: [
      "Packet scheduling and beamforming",
      "Near-real-time RAN and Core loops",
      "Specialized domain behavior with deterministic guardrails",
    ],
  },
  {
    title: "Large reasoning LLMs",
    subtitle: "Strategic and federation-level reasoning",
    points: [
      "Capacity planning and root-cause analysis",
      "Cross-domain federation and broad scopes",
      "Suitable where 500ms-2s latency is acceptable",
    ],
  },
];

const TechnicalVision = () => {
  return (
    <>
      <section className="border-b border-hairline bg-background pt-32">
        <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
          <p className="reveal text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Technical vision
          </p>
          <h1 className="reveal reveal-delay-1 mt-4 max-w-5xl font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            From AI-overlay to AI-native telecom architecture.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-3xl text-pretty text-lg text-muted-foreground">
            The network evolves into an AI-native system where reasoning is powerful, action is controlled,
            and reliability remains deterministic.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="bg-card p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <item.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h2 className="mt-4 font-display text-3xl font-light tracking-tight">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-secondary/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">Safety architecture</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-light tracking-tight sm:text-5xl">
            Agent proposal with policy-guarded execution.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-hairline bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Step 1</p>
              <h3 className="mt-3 text-lg font-medium">Reasoning layer</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Agentic AI proposes optimization actions based on network state and intent.
              </p>
            </article>
            <article className="rounded-2xl border border-hairline bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Step 2</p>
              <h3 className="mt-3 text-lg font-medium">Policy guardrail layer</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Hardcoded verification validates feasibility and compliance before any execution, potentially
                using network digital twins.
              </p>
            </article>
            <article className="rounded-2xl border border-hairline bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Step 3</p>
              <h3 className="mt-3 text-lg font-medium">Execution layer</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Only policy-approved actions are applied to live network control loops.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">Latency-aware AI placement</p>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight sm:text-5xl">
            Hierarchical model architecture for control and strategy.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {latencySplit.map((block) => (
              <article key={block.title} className="rounded-2xl border border-hairline bg-card p-7 shadow-soft">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{block.subtitle}</p>
                <h3 className="mt-3 font-display text-3xl font-light tracking-tight">{block.title}</h3>
                <ul className="mt-5 space-y-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-none text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-secondary/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">Physical AI</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl">
            Sense <span className="text-muted-foreground">→</span> analyze <span className="text-muted-foreground">→</span> act as a telecom physical control loop.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            GPU-equipped edge nodes do not only process data. They interpret, reason, and optimize physical
            network resources in near real time, assisted by network digital twins for validation and safe rollout.
          </p>
        </div>
      </section>
    </>
  );
};

export default TechnicalVision;
