import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, ArrowRight, Flame } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Prepare for Hackathon as a Beginner: 30-Day Plan",
  description:
    "Learn how to prepare for hackathon as a beginner with our practical 30-day training roadmap, Git collaboration essentials, and MVP delivery drills.",
  alternates: {
    canonical: "https://sih-guide-india.vercel.app/guides/beginner-hackathon-preparation",
  },
  openGraph: {
    title: "How to Prepare for Hackathon as a Beginner: 30-Day Plan",
    description:
      "Learn how to prepare for hackathon as a beginner with our practical 30-day training roadmap, Git collaboration essentials, and MVP delivery drills.",
    url: "https://sih-guide-india.vercel.app/guides/beginner-hackathon-preparation",
    siteName: "SIH Guide India",
    locale: "en_IN",
    type: "article",
  },
};

export default function BeginnerHackathonPreparationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "How to Prepare for Hackathon as a Beginner: 30-Day Tactical Roadmap",
        description:
          "Complete month-long training guide for beginner engineering students preparing for the Smart India Hackathon.",
        url: "https://sih-guide-india.vercel.app/guides/beginner-hackathon-preparation",
        datePublished: "2026-02-01T00:00:00Z",
        dateModified: "2026-10-09T00:00:00Z",
        author: {
          "@type": "EducationalOrganization",
          name: "SIH Guide India",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Prepare for Hackathon as a Beginner",
        description:
          "A structured 4-week preparation plan to build rapid MVP engineering skills, Git mastery, and jury presentation confidence.",
        totalTime: "P30D",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Week 1: Git Collaboration & Branching Hygiene",
            text: "Master collaborative Git workflows: feature branches, PR reviews, resolving merge conflicts under pressure, and GitHub issue tracking.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Week 2: Standardize the Full-Stack Boilerplate",
            text: "Pre-configure and rehearse scaffolding Next.js, Supabase auth, and Tailwind component libraries in under 15 minutes.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Week 3: Run a 12-Hour Mock Hackathon Drill",
            text: "Pick an old SIH problem statement and build a working MVP with your squad in an uninterrupted weekend simulation.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Week 4: Deck Polish & Jury Defense Practice",
            text: "Finalize your presentation slides, rehearse 5-minute time caps, and conduct aggressive peer Q&A grilling sessions.",
          },
        ],
      },
    ],
  };

  const weeks = [
    {
      week: "Week 01",
      title: "Team Alignment & Git Branching Hygiene",
      desc: "Beginners fail in hackathons when 6 developers push to the main branch at 3 AM. Establish clean Git habits first.",
      milestones: [
        "Create team GitHub organization with strict branch protection rules",
        "Practice resolving intentional merge conflicts across shared CSS files",
        "Agree on uniform coding conventions, linter setups, and env management",
      ],
    },
    {
      week: "Week 02",
      title: "Boilerplate Fluency & UI Component Drills",
      desc: "Speed is king. You should never waste 4 hours in a hackathon figuring out how authentication or Tailwind styles work.",
      milestones: [
        "Assemble a reusable starter repository with Next.js, Lucide icons, and pre-built modals",
        "Set up Supabase backend with pre-configured authentication flows",
        "Test deployment pipelines on Vercel with automatic preview branches",
      ],
    },
    {
      week: "Week 03",
      title: "12-Hour Mock Hackathon Simulation",
      desc: "Put your team under real pressure. Pick a past Smart India Hackathon problem statement and simulate the rush.",
      milestones: [
        "Dedicate a Saturday (9:00 AM to 9:00 PM) to build a functioning prototype from scratch",
        "Conduct interim checkpoints every 3 hours to evaluate feature completeness",
        "Identify team bottlenecks, communication gaps, and dependency delays",
      ],
    },
    {
      week: "Week 04",
      title: "Deck Architecture & High-Pressure Pitch Drills",
      desc: "Great engineering with weak pitching loses every time. Spend your final week mastering the art of the presentation.",
      milestones: [
        "Build the 8-slide AICTE standard deck format with system architecture diagrams",
        "Conduct timed 7-minute presentations with faculty or senior finalist mentors",
        "Pre-record a 2-minute offline backup demo video in case venue Wi-Fi fails",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <JsonLd data={structuredData} />
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/" },
          { label: "How to Prepare for Hackathon as a Beginner" },
        ]}
      />

      <article className="mt-6">
        <header className="mb-10 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">
            <Flame className="w-4 h-4" />
            <span>Undergraduate Onboarding Roadmap</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 9 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How to Prepare for Hackathon as a Beginner: The 30-Day Blueprint
          </h1>

          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Entering your first competitive national hackathon can feel intimidating. Discover <strong>how to prepare for hackathon as a beginner</strong> with a systematic 4-week roadmap that transforms first-time coders into podium contenders.
          </p>
        </header>

        {/* Section 1: The Mindset Shift */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            1. The Mindset Shift: Prototype Velocity Over Academic Perfection
          </h2>
          <p>
            The biggest mental hurdle for undergraduate engineers is unlearning university assignment habits. In college coursework, you spend weeks writing extensive reports and testing every edge case. In a 36-hour hackathon, what matters is demonstrating the core user journey without friction.
          </p>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-sm">
            <strong className="text-amber-400 block mb-1">The Golden Rule of Hackathons:</strong>
            &ldquo;A clean UI connected to a functioning mock database beats an invisible, perfect neural network with no interface every single time.&rdquo;
          </div>
        </section>

        {/* Section 2: 4-Week Timeline */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            2. The 30-Day Week-by-Week Preparation Timeline
          </h2>
          <p>
            Execute these structured milestones across the 4 weeks preceding your internal or national hackathon:
          </p>

          <div className="space-y-6">
            {weeks.map((item) => (
              <div key={item.week} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    {item.week}
                  </span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-400 mb-4">{item.desc}</p>
                <div className="space-y-2">
                  {item.milestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 3 Fatal Mistakes */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            3. Common Pitfalls That Destroy Beginner Teams
          </h2>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-base font-semibold text-rose-400">1. Over-Engineering Microservices</h3>
              <p className="text-sm text-slate-400 mt-1">
                Beginners often try using Kubernetes, 4 microservices, and Kafka for a simple hackathon app. Keep it monolithic: a single Next.js fullstack repository or Next.js + FastAPI.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-base font-semibold text-rose-400">2. Empty Databases During Jury Demos</h3>
              <p className="text-sm text-slate-400 mt-1">
                When judges ask to see your analytics dashboard, showing &ldquo;0 users, 0 transactions&rdquo; kills credibility. Pre-seed your database with 200+ realistic mock records beforehand.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-base font-semibold text-rose-400">3. Relying Solely on Cloud Wi-Fi</h3>
              <p className="text-sm text-slate-400 mt-1">
                Hackathon venues suffer notorious Wi-Fi blackouts when 1,000 developers connect. Always ensure your database and prototype run seamlessly on localhost.
              </p>
            </div>
          </div>
        </section>

        {/* Next Step */}
        <section className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold">Recommended PPT Blueprint:</span>
            <p className="text-base font-bold text-white">SIH Idea Presentation PPT Format</p>
          </div>
          <Link
            href="/templates/sih-ppt-format"
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors flex items-center gap-2"
          >
            <span>Inspect Slide Format</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </article>
    </div>
  );
}
