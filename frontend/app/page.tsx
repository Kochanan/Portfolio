import { Suspense } from "react";
import { connection } from "next/server";
import { AboutContact } from "@/components/AboutContact";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import contact from "@/data/contact.json";
import projectsData from "@/data/projects.json";
import { calculateAge } from "@/lib/age";
import type { Contact, ProjectsData } from "@/lib/types";

const contactData = contact as Contact;
const { projects } = projectsData as ProjectsData;

function PortfolioShell() {
  return (
    <>
      <Nav contact={contactData} />
      <main className="flex-1">
        <div className="min-h-[100svh]" />
      </main>
    </>
  );
}

async function Portfolio() {
  await connection();

  const now = new Date();
  const age = calculateAge(contactData.dateOfBirth, now);

  return (
    <>
      <Nav contact={contactData} />
      <main className="flex-1">
        <Hero contact={contactData} age={age} />
        <Projects projects={projects} />
        <AboutContact contact={contactData} age={age} />
      </main>
      <SiteFooter name={contactData.name} year={now.getFullYear()} />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<PortfolioShell />}>
      <Portfolio />
    </Suspense>
  );
}
