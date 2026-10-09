import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Layers,
  Users,
  Target,
  ArrowRight,
  Sparkles,
  Award,
  Zap,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Smart India Hackathon Preparation and Roadmaps",
  description:
    "Master the Smart India Hackathon with step-by-step guides, problem statement vetting, PPT templates, tech stack roadmaps, and insider finalist tips.",
  alternates: {
    canonical: "https://sih-guide-india.vercel.app",
  },
  openGraph: {
    title: "Smart India Hackathon Preparation and Roadmaps",
    description:
      "Master the Smart India Hackathon with step-by-step guides, problem statement vetting, PPT templates, tech stack roadmaps, and insider finalist tips.",
    url: "https://sih-guide-india.vercel.app",
    siteName: "SIH Guide India",
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://sih-guide-india.vercel.app/#website",
        url: "https://sih-guide-india.vercel.app",
        name: "SIH Guide India",
        description:
          "Zero-cost educational playbook for Smart India Hackathon engineering participants.",
        inLanguage: "en-IN",
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://sih-guide-india.vercel.app/#organization",
        name: "SIH Guide India",
        url: "https://sih-guide-india.vercel.app",
        logo: "https://sih-guide-india.vercel.app/favicon.ico",
        description:
          "Student-led national hackathon mentorship initiative founded by past Smart India Hackathon grand finalists.",
        knowsAbout: [
          "Smart India Hackathon",
          "Engineering Project Prototyping",
          "Internal College Hackathons",
          "Technical Presentation PPTs",
        ],
      },
    ],
  };

  const roadmaps = [
    {
      step: "01",
      title: "Problem Statement Selection",
      desc: "Filter PS codes by feasibility, market saturation, and ministry priority scoring.",
      href: "/guides/sih-problem-statement-selection",
      tag: "Foundation",
      icon: Target,
    },
    {
      step: "02",
      title: "Internal College Hackathon",
      desc: "Clear college screening round with high-impact live demos and jury handling.",
      href: "/guides/internal-hackathon-round",
      tag: "Screening",
      icon: Award,
    },
    {
      step: "03",
      title: "Official PPT Submission Deck",
      desc: "Standard 8-slide AICTE/MoE presentation format, system architecture diagrams, and USP.",
      href: "/templates/sih-ppt-format",
      tag: "Selection",
      icon: FileText,
    },
    {
      step: "04",
      title: "36-Hour Prototype Architecture",
      desc: "Zero-latency full-stack blueprint to assemble demonstrable MVPs on finale night.",
      href: "/tech-stacks/hackathon-prototype-stack",
      tag: "Grand Finale",
      icon: Zap,
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Updated For SIH 2026 Season</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Smart India Hackathon <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">Preparation & Roadmaps</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The definitive technical guide for engineering undergraduates. Proven step-by-step methodologies from problem statement shortlisting to winning the 36-hour Grand Finale.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/guides/beginner-hackathon-preparation"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <span>Explore 30-Day Preparation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/templates/sih-ppt-format"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base transition-all hover:border-slate-600 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Get PPT Template Format</span>
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">6 Members</div>
              <div className="text-xs text-slate-400 mt-1">Mandatory squad with 1+ female member</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-orange-400">36 Hours</div>
              <div className="text-xs text-slate-400 mt-1">Continuous non-stop finale coding</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">100+ Ministries</div>
              <div className="text-xs text-slate-400 mt-1">Real-world sovereign problem challenges</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">₹1,00,000</div>
              <div className="text-xs text-slate-400 mt-1">Prize award per winning problem statement</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Milestone Roadmap */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            The 4-Stage Hackathon Survival Roadmap
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Every Smart India Hackathon journey follows this strict progression. Master each milestone with our curated deep dives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmaps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative rounded-2xl p-6 bg-slate-900/40 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-700 group-hover:text-amber-400/80 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {item.tag}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Strategic Resources */}
      <section className="py-16 bg-slate-900/30 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Knowledge Base</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Essential Hackathon Toolkits</h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md mt-2 md:mt-0">
              Handcrafted frameworks, PPT templates, and production setups designed to maximize your jury scoring impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-3">
                  <Layers className="w-4 h-4" />
                  <span>Architecture</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Hackathon Prototype Stack</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  A high-velocity boilerplate using Next.js 15, Tailwind, Supabase, and FastAPI for non-blocking offline resilience.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/tech-stacks/hackathon-prototype-stack"
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  Inspect Tech Stack <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-3">
                  <FileText className="w-4 h-4" />
                  <span>Submission Blueprint</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">SIH PPT Slide Breakdown</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The exact slide-by-slide structure demanded by evaluators: problem statement clarity, system architecture, and novelty.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/templates/sih-ppt-format"
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
                >
                  Download Deck Structure <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-3">
                  <Users className="w-4 h-4" />
                  <span>Team Building</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Squad Roles & Matrix</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  How to allocate roles across fullstack frontend, backend logic, AI modeling, hardware integration, and presentation lead.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/guides/hackathon-team-roles"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  Review Squad Matrix <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
          Frequently Answered Hackathon Queries
        </h2>
        
        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
            <h3 className="text-base font-semibold text-white">What is the composition requirement for SIH teams?</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Every team must strictly comprise 6 undergraduate students from the same college institution, with at least one female candidate mandated under official AICTE guidelines.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
            <h3 className="text-base font-semibold text-white">How many teams are selected from each college for SIH?</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Colleges conduct an Internal Hackathon to nominate a strict quota (usually 30-35 teams plus reserves for software and hardware editions) to the official AICTE portal.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
            <h3 className="text-base font-semibold text-white">Are freshers eligible to participate in the Smart India Hackathon?</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Yes, first-year engineering undergraduates are fully eligible. Teaming up with experienced 2nd or 3rd-year seniors is recommended to balance system design and fast code shipping.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
