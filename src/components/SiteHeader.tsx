import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/showcase", label: "Showcase" },
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
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

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? scrolled || !onDark
                      ? "bg-secondary text-foreground"
                      : "bg-white/10 text-white"
                    : scrolled || !onDark
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="mailto:abdelrahman@abdelkader-online.de"
          className={`hidden rounded-full px-4 py-2 text-sm font-medium transition-all md:inline-flex ${
            scrolled || !onDark
              ? "bg-ink text-ink-foreground hover:bg-ink/90"
              : "bg-white text-ink hover:bg-white/90"
          }`}
        >
          Get in touch
        </a>
      </div>
    </header>
  );
};
