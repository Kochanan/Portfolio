import type { Contact } from "@/lib/types";

type NavProps = {
  contact: Contact;
};

export function Nav({ contact }: NavProps) {
  const firstName = contact.name.split(" ")[0] ?? contact.name;

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-syne)] text-sm font-semibold tracking-[0.18em] uppercase text-[var(--accent-bright)]"
        >
          {firstName}
        </a>
        <nav className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
          <a href="#work" className="transition-colors hover:text-white">
            Work
          </a>
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a
            href="#contact"
            className="rounded-md border border-[var(--line)] bg-white/5 px-3 py-1.5 text-white transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)]/15"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
