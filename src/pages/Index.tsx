import heroImg from "@/assets/hero-network.jpg";
import { Link } from "react-router-dom";
import { ArrowUpRight, Cpu, Network, Bot, Layers, Radio, GitBranch, Award, Users } from "lucide-react";

const skills = [
  { icon: Network, title: "AI‑Native 6G Architecture", body: "Own end‑to‑end target AI architectures across RAN, Core, OAM, and monetization domains." },
  { icon: Bot, title: "Generative & Agentic AI", body: "Apply Deep Learning, GenAI and agent‑based concepts to real network usecases and workflows." },
  { icon: Layers, title: "AIOps in 6G", body: "Design MLOps/LLMOps lifecycle management and AI workload orchestration in 6G standards." },
  { icon: Radio, title: "Industry leadership", body: "Recognized AI Telco expert with contributions to 10+ keynotes, webinars, and panel discussions." },
  { icon: GitBranch, title: "Standards Leadership", body: "Drive consensus in 3GPP, O‑RAN, ETSI, ITU and AI‑RAN Alliance; rapporteur of ETSI ZSM‑012." },
  { icon: Cpu, title: "From Business Need to Execution", body: "Translate business priorities into architectural blueprints,and execution plans." },
];

const stats = [
  { value: "100+", label: "Granted patents" },
  { value: "10+", label: "Keynotes & panels" },
  { value: "10+", label: "Peer‑reviewed papers" },
  { value: "5+", label: "Standards forums" },
];

const valuePlan = [
  {
    phase: "Days 0‑60",
    title: "Prioritize high-value AI use cases",
    points: [
      "Map operator priorities across network and IT with a balanced focus on TCO efficiency and new customer value.",
      "Translate the selected use cases into architectural requirements and success metrics.",
      "Align executive and technical stakeholders on governance, scope and delivery outcomes.",
    ],
  },
  {
    phase: "Days 61‑120",
    title: "Design the target AI architecture blueprint",
    points: [
      "Define the end‑to‑end blueprint: data flows, model lifecycle, MLOps/LLMOps, observability, interoperability and security.",
      "Validate blueprint readiness against active and in‑development use cases.",
      "Run a structured gap assessment and convert gaps into implementation actions and RFIs.",
    ],
  },
  {
    phase: "Days 121‑180",
    title: "Deliver measurable proof points",
    points: [
      "Drive at least one high‑impact initiative to PoC or pilot stage with measurable operational or customer impact.",
      "Present an executive roadmap from blueprint to scaled deployment.",
      "Embed innovation practices that keep standards, architecture and delivery continuously aligned.",
    ],
  },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink pt-10">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
          <p className="reveal text-xs font-medium uppercase tracking-[0.22em] text-white/60">
            Lead Architect · Research & Standards Team Lead · Munich
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 max-w-5xl font-display text-5xl font-light leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Turning <em className="not-italic text-aurora">AI ambition</em> into next generation architectural blueprints for global standards.
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
            I am Abdelrahman Abdelkader, Ph.D. and AI‑native telecom architect. I drive the
            conversion of strategic Telco AI priorities into architectural blueprints across RAN, Core, OAM,
            customer services and monetization, then guide execution through standards and pilots.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
            <Link
              to="/experience"
              className="group inline-flex items-center gap-2 rounded-[4px] bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#c40062]"
            >
              Explore experience
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          {/* Stats strip */}
          <dl className="reveal reveal-delay-4 mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-4xl font-light text-white sm:text-5xl">{s.value}</dt>
                <dd className="mt-2 text-xs uppercase tracking-widest text-white/50">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SKILLS AT A GLANCE */}
      <section className="relative bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
                Profile at a glance
              </p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                Architecture definition with business-driven strategy.
              </h2>
            </div>
            <p className="max-w-md text-pretty text-muted-foreground">
              Positioning at the intersection of Telco AI architecture, standards leadership, and
              measurable business outcomes.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[6px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div
                key={s.title}
                className="group relative flex flex-col gap-5 bg-card p-8 transition-colors hover:bg-secondary/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[6px] bg-accent-soft text-accent">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER SUMMARY */}
      <section className="relative overflow-hidden bg-secondary/40 py-28 lg:py-36">
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Career summary
            </p>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
              From deep research to executive-ready architecture direction.
            </h2>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-ink text-ink-foreground">
                <Award className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-medium">Ph.D., TU Dresden</p>
                <p className="text-sm text-muted-foreground">AI/ML for wireless & energy efficiency</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-ink text-ink-foreground">
                <Users className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-medium">M.Sc. — Double Degree</p>
                <p className="text-sm text-muted-foreground">KIT, Karlsruhe · UPC, Barcelona</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <p className="font-display text-2xl font-light leading-relaxed text-foreground sm:text-[1.7rem] sm:leading-[1.45]">
              Lead Architect and Research Team Lead combining deep AI/telco expertise with
              cross‑functional leadership in international organizations.
            </p>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              I lead the definition of end‑to‑end AI‑native architecture for 6G across RAN, Core,
              network and service management, customer services and monetization, while keeping
              technical decisions tied to business requirements and customer feedback.
            </p>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              My track record includes integrating Deep Learning, GenAI and agent‑based patterns
              into cloud‑native telecom architecture, leading AI standardization, and shaping RFIs,
              workshops and delivery plans that executive and engineering teams can execute.
            </p>
            <div className="flex gap-3 pt-2">
              <Link
                to="/experience"
                className="group inline-flex items-center gap-2 rounded-[4px] bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#c40062]"
              >
                See detailed experience
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATOR IMPACT PLAN */}
      <section className="relative bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Strategic fit for Deutsche Telekom
            </p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              A practical first‑180‑day value plan.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              This operating model reflects how I would approach AI‑native transformation in a
              complex operator environment: start with business priorities, convert them into a
              robust architecture blueprint, and deliver measurable proof points quickly.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {valuePlan.map((block) => (
              <article key={block.phase} className="rounded-[6px] border border-hairline bg-card p-7 shadow-soft">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{block.phase}</p>
                <h3 className="mt-3 font-display text-2xl font-light tracking-tight">{block.title}</h3>
                <ul className="mt-5 space-y-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
