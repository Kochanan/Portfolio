import type { Project } from "@/lib/types";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="work" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm tracking-[0.2em] text-[var(--accent-bright)] uppercase">
            Selected work
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-white md:text-5xl">
            Projects &amp; experience
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Edit <code className="text-[var(--accent-bright)]">data/projects.json</code> to
            replace these placeholders with your real work.
          </p>
        </div>

        <div className="section-rule mb-10" />

        <ul className="flex flex-col">
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="group border-b border-[var(--line)] py-10 transition-colors first:pt-0 last:border-b-0"
            >
              <div className="grid gap-6 md:grid-cols-[7rem_1fr_auto] md:items-start md:gap-10">
                <span className="font-[family-name:var(--font-syne)] text-sm tracking-wider text-[var(--text-muted)] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--text-muted)]">
                    <span className="text-[var(--accent-bright)]">{project.category}</span>
                    <span aria-hidden>·</span>
                    <span>{project.year}</span>
                    <span aria-hidden>·</span>
                    <span>{project.role}</span>
                  </div>

                  <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-white transition-colors group-hover:text-[var(--accent-bright)] md:text-3xl">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-relaxed text-[var(--text-muted)]">
                    {project.summary}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-sm text-[var(--text-muted)]">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[var(--line)] px-2.5 py-1 text-xs tracking-wide text-[var(--text-muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--accent-bright)] transition hover:text-white md:pt-1"
                  >
                    Open →
                  </a>
                ) : (
                  <span className="hidden text-sm text-[var(--text-muted)]/50 md:block md:pt-1">
                    —
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
