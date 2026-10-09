import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "SIH Guide Blog | Hackathon Strategy and Case Studies",
  description:
    "Read tactical articles, jury debriefs, and national hackathon war stories written by past Smart India Hackathon finalists and student mentors.",
  alternates: {
    canonical: "https://sih-guide-india.vercel.app/blog",
  },
  openGraph: {
    title: "SIH Guide Blog | Hackathon Strategy and Case Studies",
    description:
      "Read tactical articles, jury debriefs, and national hackathon war stories written by past Smart India Hackathon finalists and student mentors.",
    url: "https://sih-guide-india.vercel.app/blog",
    siteName: "SIH Guide India",
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "SIH Guide India Editorial & Tactical Insights",
    url: "https://sih-guide-india.vercel.app/blog",
    description:
      "Tactical case studies, jury evaluation insights, and engineering blueprints for Smart India Hackathon participants.",
    publisher: {
      "@type": "EducationalOrganization",
      name: "SIH Guide India",
    },
  };

  const articles = [
    {
      title: "How to Choose Problem Statement in SIH: The 5-Filter Matrix",
      excerpt: "Why picking high-density generic AI themes ruins selection odds and how to target ministry problem codes with maximum win probability.",
      slug: "/guides/sih-problem-statement-selection",
      date: "Oct 2026",
      readTime: "8 min read",
      tag: "Strategy",
    },
    {
      title: "How to Clear Internal College Hackathon Round: The Evaluator Playbook",
      excerpt: "The exact 7-minute presentation formula to impress campus faculty juries and secure an official SIH nomination slot.",
      slug: "/guides/internal-hackathon-round",
      date: "Oct 2026",
      readTime: "7 min read",
      tag: "Screening",
    },
    {
      title: "SIH Idea Presentation PPT Format & Official Slide Breakdown",
      excerpt: "Step-by-step guidance on structuring the 8 required AICTE slides from problem analysis to technical architecture diagrams.",
      slug: "/templates/sih-ppt-format",
      date: "Oct 2026",
      readTime: "10 min read",
      tag: "Templates",
    },
    {
      title: "Best Tech Stack for Hackathon Prototype Development",
      excerpt: "Why Next.js, Supabase, and FastAPI provide unbeatable prototype velocity during high-stress 36-hour hackathons.",
      slug: "/tech-stacks/hackathon-prototype-stack",
      date: "Oct 2026",
      readTime: "8 min read",
      tag: "Engineering",
    },
    {
      title: "Smart India Hackathon Team Roles & The 6-Member Squad Matrix",
      excerpt: "AICTE gender compliance guidelines, technical role allocation, and managing sleep shifts during non-stop hackathon nights.",
      slug: "/guides/hackathon-team-roles",
      date: "Oct 2026",
      readTime: "8 min read",
      tag: "Team Building",
    },
    {
      title: "How to Prepare for Hackathon as a Beginner: 30-Day Blueprint",
      excerpt: "A week-by-week training roadmap covering Git hygiene, rapid boilerplate scaffolding, and mock 12-hour simulation drills.",
      slug: "/guides/beginner-hackathon-preparation",
      date: "Oct 2026",
      readTime: "9 min read",
      tag: "Roadmaps",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={[{ label: "Blog & Editorial" }]} />

      <header className="mt-6 mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Tactical Knowledge Hub</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Hackathon Strategy & Team Case Studies
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          In-depth analyses, official guidelines, and engineering insights crafted by undergraduate hackathon finalists to help you win national challenges.
        </p>
      </header>

      {/* Grid of articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {articles.map((item, idx) => (
          <article
            key={idx}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                <span className="font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded">
                  {item.tag}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {item.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3 leading-snug">
                <Link href={item.slug}>{item.title}</Link>
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {item.excerpt}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80">
              <Link
                href={item.slug}
                className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center gap-1"
              >
                Read Tactical Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
