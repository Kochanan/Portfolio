import type { Contact } from "@/lib/types";

type HeroProps = {
  contact: Contact;
  age: number;
};

export function Hero({ contact, age }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-16 pt-28 md:px-8 md:pb-24"
    >
      <div className="orb -left-24 top-16 h-72 w-72 bg-[var(--accent)]/30" />
      <div
        className="orb right-[-4rem] top-32 h-80 w-80 bg-[var(--accent-deep)]/50"
        style={{ animationDelay: "-4s" }}
      />
      <div className="pointer-events-none absolute inset-0 grid-haze" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="animate-rise mb-5 text-sm tracking-[0.22em] text-[var(--accent-bright)] uppercase">
          {contact.grade} · University Portfolio · Age {age}
        </p>

        <h1 className="animate-rise-delay-1 max-w-4xl font-[family-name:var(--font-syne)] text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] font-bold tracking-tight text-white">
          {contact.name}
        </h1>

        <p className="animate-rise-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
          {contact.headline}
        </p>

        <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-bright)] hover:text-[#061018]"
          >
            View work
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center rounded-md border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent-bright)] hover:text-white"
          >
            Email me
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </section>
  );
}
