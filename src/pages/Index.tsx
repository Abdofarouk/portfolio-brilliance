import heroImg from "@/assets/hero-network.jpg";
import { Link } from "react-router-dom";
import { ArrowUpRight, Cpu, Network, Bot, Layers, Radio, GitBranch, Award, Users } from "lucide-react";

const skills = [
  { icon: Network, title: "AI‑Native 6G Architecture", body: "End‑to‑end design across RAN, Core, OAM, customer & monetization domains." },
  { icon: Bot, title: "Generative & Agentic AI", body: "Deep Learning, GenAI and agent‑based concepts integrated into telco systems." },
  { icon: Layers, title: "Cloud‑Native Telco", body: "MLOps, LLMOps, lifecycle management and AI workload orchestration." },
  { icon: Radio, title: "RAN · Core · OAM", body: "AI for the network, and network for AI — across all functional planes." },
  { icon: GitBranch, title: "Standards Leadership", body: "3GPP, O‑RAN, ETSI, ITU and the AI‑RAN Alliance — rapporteur of ETSI ZSM‑012." },
  { icon: Cpu, title: "From Vision to Blueprint", body: "Translate business needs into architectures, RFIs and pilot programs." },
];

const stats = [
  { value: "100+", label: "Granted patents" },
  { value: "10+", label: "Keynotes & panels" },
  { value: "10+", label: "Peer‑reviewed papers" },
  { value: "4", label: "Standards bodies" },
];

const partners = [
  "Nokia", "Deutsche Telekom", "3GPP", "O‑RAN", "ETSI", "ITU", "AI‑RAN Alliance", "TU Dresden", "KIT", "Ericsson",
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink pt-16">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink" />
        <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-28 lg:px-10 lg:pb-44 lg:pt-40">
          <p className="reveal text-xs font-medium uppercase tracking-[0.22em] text-white/60">
            Lead Architect · Research Team Lead · Munich
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 max-w-5xl font-display text-5xl font-light leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Designing the <em className="not-italic text-aurora">AI‑native</em> fabric of next‑generation networks.
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
            I'm Abdelrahman Abdelkader — a Ph.D. architect leading expert AI researchers shaping
            6G across RAN, Core, OAM, customer services and monetization. Standards rapporteur,
            inventor of 100+ patents, and a translator between business intent and technical reality.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
            <Link
              to="/experience"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-all hover:bg-white/90"
            >
              Explore the journey
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/showcase"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              View showcase
            </Link>
          </div>

          {/* Stats strip */}
          <dl className="reveal reveal-delay-4 mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-4xl font-light text-white sm:text-5xl">{s.value}</dt>
                <dd className="mt-2 text-xs uppercase tracking-widest text-white/50">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-white/10 bg-white/[0.02] py-5">
          <div className="flex w-max marquee gap-12 px-6">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="whitespace-nowrap text-sm font-medium tracking-wide text-white/40">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS AT A GLANCE */}
      <section className="relative bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
                Skills at a glance
              </p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                Architectural depth across the AI‑native stack.
              </h2>
            </div>
            <p className="max-w-md text-pretty text-muted-foreground">
              A capability set sharpened over a decade of standards work, research and
              cross‑functional architecture leadership.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div
                key={s.title}
                className="group relative flex flex-col gap-5 bg-card p-8 transition-colors hover:bg-secondary/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
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
              A decade translating research into shipped network standards.
            </h2>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ink-foreground">
                <Award className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-medium">Ph.D., TU Dresden</p>
                <p className="text-sm text-muted-foreground">AI/ML for wireless & energy efficiency</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ink-foreground">
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
              "Lead Architect and Research Team Lead with deep technical expertise alongside
              leadership of expert AI researchers building next‑generation telecommunication systems."
            </p>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              Extensive experience leading the definition of end‑to‑end AI‑native architecture for
              6G — spanning RAN, Core, Network & Service Management, customer services and
              monetization — while aligning requirements, architectural decisions and customer
              feedback in a cross‑functional, international organization.
            </p>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              Proven track record integrating Deep Learning, Generative AI and agent‑based
              concepts into cloud‑native telco architectures; skilled at translating complex
              business requirements into technical specifications and coordinating RFI discussions.
              Recognized expert with 100+ granted patents and 10+ keynotes, webinars and panels.
            </p>
            <div className="flex gap-3 pt-2">
              <Link
                to="/experience"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition-all hover:bg-ink/90"
              >
                See full experience
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
