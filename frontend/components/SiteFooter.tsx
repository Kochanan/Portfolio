"use client";

import { useLanguage } from "@/lib/i18n";

type SiteFooterProps = {
  name: string;
  year: number;
};

export function SiteFooter({ name, year }: SiteFooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--line)] px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {name}
        </p>
        <p>{t.footer.template}</p>
      </div>
    </footer>
  );
}
