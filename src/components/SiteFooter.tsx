export const SiteFooter = () => {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-2xl tracking-tight">
            Let's build AI-native 6G.
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Open to discussions on the value potential of AI in 6G network across technology, architecture and business evolution.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="hover:text-accent" href="mailto:abdelrahman@abdelkader-online.com">
                  abdelrahman@abdelkader-online.com
                </a>
              </li>
              <li className="text-muted-foreground">+49 152 560 59961</li>
              <li className="text-muted-foreground">München, Germany</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Languages</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>Arabic — Native</li>
              <li>English — Bilingual</li>
              <li>German — Fluent</li>
              <li>Spanish — Fluent</li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-muted-foreground lg:text-right">
          <p>© {new Date().getFullYear()} Abdelrahman Abdelkader, Ph.D.</p>
          <p className="mt-1">Designed with restraint. Built for clarity.</p>
        </div>
      </div>
    </footer>
  );
};
