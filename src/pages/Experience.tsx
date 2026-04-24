import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

type Role = {
  role: string;
  org: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tag: "current" | "past" | "edu";
};

const timeline: Role[] = [
  {
    role: "Research & Standards Team Leader",
    org: "Nokia Networks",
    location: "Munich, Germany",
    period: "2026 — Present",
    tag: "current",
    summary:
      "Define and execute the roadmap for AI‑native network standardization, driving consensus aligned with Nokia's 6G vision.",
    highlights: [
      "Define and execute the roadmap for AI‑native network standardization in alignment with Nokia's vision for 6G.",
      "Drive the creation of novel concepts and architectures for AI‑native networks, including system enablers and integration with 6G Core.",
      "Represent Nokia in 3GPP, ETSI and ITU; lead impactful contributions across forums.",
      "Align internal research, product and business units to ensure consistency between standards and Nokia's technology strategy.",
      "Mentor and grow a high‑performing team of experts in AI/ML and network standardization.",
      "Author white papers and influence the global ecosystem on AI‑native networking.",
    ],
  },
  {
    role: "Senior Staff Research and Standardization Expert",
    org: "Nokia Networks",
    location: "Munich, Germany",
    period: "2020 — 2025",
    tag: "past",
    summary:
      "Lead architect for AI‑native 6G across multiple standards organizations, integrating AI/ML/GenAI into cloud‑native core, RAN and OAM.",
    highlights: [
      "Lead architect for AI‑native 6G across 3GPP, O‑RAN, AI‑RAN Alliance and ITU.",
      "Direct technical projects integrating AI/ML/GenAI into 6G cloud‑native core, RAN and network management — both AI for Network and Network for AI.",
      "Coordinate AI standardization activities and operator/partner discussions on AI‑native core and OAM, including handling and presenting RFI responses.",
      "Design and oversee training & workshops on AI/ML in telecom — MLOps, cloud‑native AI/ML deployment, lifecycle management and workload orchestration.",
      "Author of 100+ patents, articles and whitepapers on unlocking 6G potential with AI/ML.",
      "3GPP coordinator, O‑RAN AI/ML lead delegate, and rapporteur of ETSI ZSM‑012 — AI Enablers for Network & Service Automation.",
      "Industry‑recognized speaker and panelist at international conferences and workshops on AI‑native 6G.",
    ],
  },
  {
    role: "Associate Researcher",
    org: "Technische Universität Dresden",
    location: "Dresden, Germany",
    period: "2015 — 2020",
    tag: "past",
    summary:
      "Research and publications on AI/ML‑enabled wireless network optimization, energy efficiency and smart grids.",
    highlights: [
      "Conducted research and authored publications on AI/ML‑enabled wireless network optimization and energy efficiency.",
      "Collaborated with industry partners in joint BMBF projects on AI‑enabled solutions for smart grids.",
      "Dissertation focused on AI/ML‑driven optimization for wireless networks and energy efficiency.",
    ],
  },
  {
    role: "Guest Researcher",
    org: "Ericsson",
    location: "Linköping, Sweden",
    period: "2017",
    tag: "past",
    summary: "Advanced research in 5G transmission protocols and technologies.",
    highlights: ["Advanced research in 5G transmission protocols and enabling technologies."],
  },
  {
    role: "Internship",
    org: "Vodafone Egypt",
    location: "Cairo, Egypt",
    period: "2011",
    tag: "past",
    summary: "Radio planning, network coverage optimization and contractor negotiations.",
    highlights: ["Radio planning, coverage optimization and contractor negotiations."],
  },
];

const education = [
  {
    degree: "Ph.D. in Telecommunications Engineering",
    school: "Technische Universität Dresden (TUD)",
    period: "2015 — 2020",
    note: "Wireless networks · Energy efficiency · Optimization · 10+ publications.",
  },
  {
    degree: "M.Sc. in Electrical Engineering — Double Degree",
    school: "Karlsruhe Institute of Technology · Polytechnic University of Cataluña",
    period: "2013 — 2015",
    note: "Wireless networks · 8.5 / 10 — Very Good.",
  },
  {
    degree: "B.Sc. in Electrical Engineering",
    school: "Cairo University",
    period: "2007 — 2012",
    note: "Major: Communications · Minor: Computer Engineering · 3.6 / 4.0.",
  },
];

const TimelineItem = ({ item, index }: { item: Role; index: number }) => {
  const [open, setOpen] = useState(index === 0);
  return (
    <li className="relative pl-12 sm:pl-20">
      {/* Dot */}
      <span
        className={`absolute left-3 top-3 flex h-4 w-4 items-center justify-center rounded-full sm:left-7 ${
          item.tag === "current" ? "bg-accent shadow-glow" : "bg-foreground/20"
        }`}
      >
        {item.tag === "current" && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
      </span>

      <button
        onClick={() => setOpen((o) => !o)}
        className="group w-full rounded-2xl border border-hairline bg-card p-6 text-left shadow-soft transition-all hover:border-accent/40 hover:shadow-card sm:p-8"
        aria-expanded={open}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {item.period}
            </p>
            <h3 className="mt-2 font-display text-2xl font-light leading-tight tracking-tight sm:text-3xl">
              {item.role}
            </h3>
            <p className="mt-1 text-sm font-medium text-foreground">
              {item.org}
              <span className="ml-3 inline-flex items-center gap-1 font-normal text-muted-foreground">
                <MapPin className="h-3 w-3" /> {item.location}
              </span>
            </p>
          </div>
          {item.tag === "current" && (
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              Current
            </span>
          )}
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
        <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">
          {item.summary}
        </p>

        <div
          className={`grid transition-all duration-500 ease-out-expo ${
            open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="space-y-3 border-t border-hairline pt-6">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </button>
    </li>
  );
};

const Experience = () => {
  return (
    <>
      {/* Header */}
      <section className="border-b border-hairline bg-background pt-32">
        <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
          <p className="reveal text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Experience
          </p>
          <h1 className="reveal reveal-delay-1 mt-4 max-w-4xl font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            A trajectory from research bench to standards floor.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            Tap any role to expand the detail. Highlights are drawn from delivered work in
            architecture, standards leadership and team building.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <ol className="relative space-y-6 before:absolute before:left-5 before:top-2 before:h-full before:w-px before:bg-hairline sm:before:left-9">
            {timeline.map((item, i) => (
              <TimelineItem key={item.role + i} item={item} index={i} />
            ))}
          </ol>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-hairline bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">Education</p>
              <h2 className="mt-3 font-display text-4xl font-light tracking-tight sm:text-5xl">
                Foundations
              </h2>
            </div>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline lg:grid-cols-3">
            {education.map((e) => (
              <div key={e.degree} className="bg-card p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {e.period}
                </p>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug tracking-tight">
                  {e.degree}
                </h3>
                <p className="mt-2 text-sm font-medium">{e.school}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
