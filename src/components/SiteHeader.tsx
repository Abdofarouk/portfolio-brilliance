import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/technical-vision", label: "Technology vision" },
  { to: "/business-evolution", label: "Business value" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-hairline/70"
          : onDark
          ? "bg-transparent"
          : "bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8 lg:px-12">
        <Link to="/" className="group flex items-center gap-2">
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-lg font-display text-base font-medium transition-colors ${
              scrolled || !onDark ? "bg-ink text-ink-foreground" : "bg-white text-ink"
            }`}
          >
            A
          </span>
          <span
            className={`text-sm font-medium tracking-tight ${
              scrolled || !onDark ? "text-foreground" : "text-white"
            }`}
          >
            Abdelrahman Abdelkader
            <span className="ml-1 text-muted-foreground">, Ph.D.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative border-b-2 px-0 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-primary text-primary"
                    : scrolled || !onDark
                    ? "border-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    : "border-transparent text-white/75 hover:border-white/60 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="mailto:abdelrahman@abdelkader-online.de"
          className="hidden rounded-[4px] bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#c40062] md:inline-flex"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
};
