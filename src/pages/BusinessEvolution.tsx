import { ArrowRight, Building2, CloudCog, Coins, Cpu, Factory, Handshake, LockKeyhole } from "lucide-react";

const serviceShift = [
  "AI Factory",
  "GPU as a Service (GPUaaS)",
  "Infrastructure as a Service (IaaS)",
  "Training as a Service (TaaS)",
  "Network as an Agent Broker (Internet of Agents)",
];

const cloudModes = [
  {
    title: "Partner for scale",
    icon: Handshake,
    points: [
      "Leverage hyperscaler ecosystems (e.g. GCP / Vertex AI) for compute elasticity and model diversity.",
      "Accelerate experimentation and deployment where external scale is efficient.",
    ],
  },
  {
    title: "Build toward sovereignty",
    icon: LockKeyhole,
    points: [
      "Keep orchestration under Telekom architecture (e.g. LMOS, ADL) and own AI data pipelines (e.g. Wurzel).",
      "Avoid lock-in by preserving replacement and upgrade freedom across models and providers.",
      "Evolve domain-specific telco models that understand NetConf/RESTConf and YANG semantics on-prem.",
    ],
  },
];

const ranMonetization = [
  {
    title: "Distributed AI edge fabric",
    body: "GPU-enabled network nodes can act as a low-latency distributed AI data center for enterprise workloads.",
    icon: Cpu,
  },
  {
    title: "Demand-led investment model",
    body: "Adopt pay-as-you-go vendor agreements and add GPU cards only in geographies where demand exists.",
    icon: Coins,
  },
  {
    title: "ROI-driven expansion",
    body: "Business cases remain explicit and measurable, acknowledging that edge monetization has historically been difficult.",
    icon: Building2,
  },
];

const BusinessEvolution = () => {
  return (
    <>
      <section className="border-b border-hairline bg-background pt-32">
        <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
          <p className="reveal text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Business evolution
          </p>
          <h1 className="reveal reveal-delay-1 mt-4 max-w-5xl font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Beyond the bit-pipe: toward a sovereign intelligence orchestrator.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-3xl text-pretty text-lg text-muted-foreground">
            AI value starts with TCO and automation wins, then scales into a platform business where the network
            orchestrates intelligence as a core product.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-[6px] border border-hairline bg-card p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <Factory className="h-5 w-5 text-accent" />
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">Service portfolio shift</p>
            </div>
            <h2 className="mt-4 max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl">
              From connectivity provider to intelligence platform provider.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {serviceShift.map((service) => (
                <span
                  key={service}
                  className="inline-flex rounded-[4px] border border-hairline bg-secondary/60 px-4 py-2 text-sm font-semibold text-foreground/80"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-secondary/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <CloudCog className="h-5 w-5 text-accent" />
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Cloud strategy: partner and compete
            </p>
          </div>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl">
            Scale with hyperscalers while owning orchestration sovereignty.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {cloudModes.map((mode) => (
              <article key={mode.title} className="rounded-[6px] border border-hairline bg-card p-7 shadow-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-accent-soft text-accent">
                  <mode.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-3xl font-light tracking-tight">{mode.title}</h3>
                <ul className="mt-5 space-y-3">
                  {mode.points.map((point) => (
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

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">AI RAN business path</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl">
            Monetize edge GPU capacity with disciplined expansion.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[6px] border border-hairline bg-hairline lg:grid-cols-3">
            {ranMonetization.map((item) => (
              <article key={item.title} className="bg-card p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-[6px] bg-accent-soft text-accent">
                  <item.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 font-display text-2xl font-light tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessEvolution;
