"use client";

import { formatDateOfBirth } from "@/lib/age";
import { useLanguage } from "@/lib/i18n";
import type { Contact } from "@/lib/types";

type AboutContactProps = {
  contact: Contact;
  age: number;
};

export function AboutContact({ contact, age }: AboutContactProps) {
  const { locale, t } = useLanguage();

  const facts = [
    { label: t.about.school, value: t.content.school },
    { label: t.about.grade, value: contact.grade },
    { label: t.about.location, value: t.content.location },
    {
      label: t.about.dateOfBirth,
      value: formatDateOfBirth(contact.dateOfBirth, locale),
    },
    { label: t.about.age, value: `${age} ${t.about.years}` },
  ];

  return (
    <>
      <section id="about" className="relative px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <p className="mb-3 text-sm tracking-[0.2em] text-[var(--accent-bright)] uppercase">
              {t.about.eyebrow}
            </p>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-white md:text-5xl">
              {t.about.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
              {t.content.bio}
            </p>

            {t.content.targetPrograms.length > 0 && (
              <div className="mt-8">
                <p className="mb-3 text-xs tracking-[0.18em] text-[var(--text-muted)] uppercase">
                  {t.about.targetPrograms}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.content.targetPrograms.map((program) => (
                    <span
                      key={program}
                      className="border border-[var(--accent)]/35 bg-[var(--accent)]/10 px-3 py-1.5 text-sm text-[var(--accent-bright)]"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <dl className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-6 py-4"
              >
                <dt className="text-sm text-[var(--text-muted)]">{fact.label}</dt>
                <dd className="text-right font-medium text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact" className="relative px-6 pb-28 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)]">
          <div className="relative px-8 py-14 md:px-14 md:py-16">
            <div className="orb -right-16 -top-16 h-56 w-56 bg-[var(--accent)]/25" />
            <div className="relative z-10 max-w-2xl">
              <p className="mb-3 text-sm tracking-[0.2em] text-[var(--accent-bright)] uppercase">
                {t.contact.eyebrow}
              </p>
              <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white md:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mt-4 text-[var(--text-muted)]">{t.contact.hint}</p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <a href={`mailto:${contact.email}`} className="group block">
                  <p className="text-xs tracking-[0.16em] text-[var(--text-muted)] uppercase">
                    {t.contact.email}
                  </p>
                  <p className="mt-1 text-lg text-white transition group-hover:text-[var(--accent-bright)]">
                    {contact.email}
                  </p>
                </a>
                <a
                  href={`tel:${contact.telephoneNumber.replace(/\s/g, "")}`}
                  className="group block"
                >
                  <p className="text-xs tracking-[0.16em] text-[var(--text-muted)] uppercase">
                    {t.contact.telephone}
                  </p>
                  <p className="mt-1 text-lg text-white transition group-hover:text-[var(--accent-bright)]">
                    {contact.telephoneNumber}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
