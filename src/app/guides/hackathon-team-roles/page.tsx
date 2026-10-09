import type { Metadata } from "next";
import Link from "next/link";
import { Users, Clock, ShieldCheck, CheckCircle2, ArrowRight, UserCheck, Code, Cpu, Presentation, Database } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Smart India Hackathon Team Roles and Squad Matrix",
  description:
    "Explore ideal Smart India Hackathon team roles: frontend, backend, AI/ML, pitching, and mandatory female lead representation for a winning team.",
  alternates: {
    canonical: "https://sih-guide-india.vercel.app/guides/hackathon-team-roles",
  },
  openGraph: {
    title: "Smart India Hackathon Team Roles and Squad Matrix",
    description:
      "Explore ideal Smart India Hackathon team roles: frontend, backend, AI/ML, pitching, and mandatory female lead representation for a winning team.",
    url: "https://sih-guide-india.vercel.app/guides/hackathon-team-roles",
    siteName: "SIH Guide India",
    locale: "en_IN",
    type: "article",
  },
};

export default function HackathonTeamRolesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Smart India Hackathon Team Roles & Ideal 6-Member Squad Matrix",
        description:
          "Tactical role distribution and responsibility matrix for 6-member Smart India Hackathon teams.",
        url: "https://sih-guide-india.vercel.app/guides/hackathon-team-roles",
        datePublished: "2026-01-25T00:00:00Z",
        dateModified: "2026-10-09T00:00:00Z",
        author: {
          "@type": "EducationalOrganization",
          name: "SIH Guide India",
        },
      },
      {
        "@type": "ItemList",
        name: "Recommended 6-Member SIH Squad Structure",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Role 1: Team Leader & Pitch Strategist",
            description: "Directs team cadence, leads jury interactions, and presents value proposition.",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Role 2: Frontend & UI/UX Specialist",
            description: "Builds responsive client interfaces, interactive state, and intuitive workflows.",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Role 3: Backend & Database Architect",
            description: "Designs schema, REST/GraphQL endpoints, authentication, and cloud databases.",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Role 4: AI/ML or Domain Logic Specialist",
            description: "Builds predictive models, data processing pipelines, or specialized algorithms.",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Role 5: DevOps & Integration Engineer",
            description: "Manages containerization, CI/CD, external API proxies, and local demo backups.",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Role 6: QA & Technical Presentation Deck Lead",
            description: "Tests edge cases, validates jury evaluation slides, and ensures zero broken links.",
          },
        ],
      },
    ],
  };

  const squadRoles = [
    {
      num: "01",
      title: "Team Leader & Pitch Strategist",
      icon: Presentation,
      color: "text-amber-400",
      duties: [
        "Primary spokesperson during all 3 jury mentoring evaluation rounds",
        "Paces team milestones every 6 hours during the 36-hour sprint",
        "Prepares slides, slide transitions, and rehearses Q&A defenses",
      ],
      skillset: "Public speaking, product vision, system design basics",
    },
    {
      num: "02",
      title: "Lead Frontend Engineer",
      icon: Code,
      color: "text-cyan-400",
      duties: [
        "Builds pixel-perfect, responsive UI within the first 12 hours",
        "Integrates interactive charts, tables, and live state transitions",
        "Ensures zero visual latency during jury screen share demos",
      ],
      skillset: "Next.js, React, Tailwind CSS, Lucide icons, mobile responsiveness",
    },
    {
      num: "03",
      title: "Backend & Data Architect",
      icon: Database,
      color: "text-emerald-400",
      duties: [
        "Configures authentication, role-based access control, and PostgreSQL schema",
        "Creates clean REST or GraphQL endpoints with validation",
        "Pre-seeds test databases with 500+ realistic records for live demos",
      ],
      skillset: "FastAPI / Node.js, Supabase, PostgreSQL, Prisma, Postman",
    },
    {
      num: "04",
      title: "AI / ML / Domain Specialist",
      icon: Cpu,
      color: "text-indigo-400",
      duties: [
        "Trains and exports lightweight models (ONNX, PyTorch, Scikit-learn)",
        "Builds inference pipelines that complete predictions in <200ms",
        "Prepares fallback mock responses in case external AI endpoints fail",
      ],
      skillset: "Python, PyTorch, OpenCV, LangChain, Kaggle datasets",
    },
    {
      num: "05",
      title: "Integration & Cloud DevOps",
      icon: ShieldCheck,
      color: "text-orange-400",
      duties: [
        "Hosts live deployments on Vercel / Railway / Render with custom domain",
        "Sets up local Docker containers as offline fallback if venue Wi-Fi drops",
        "Connects third-party APIs (SMS gateways, maps, Aadhaar sandbox, etc.)",
      ],
      skillset: "Docker, Vercel, Git branching, Linux shell, Nginx",
    },
    {
      num: "06",
      title: "QA & Documentation Lead",
      icon: UserCheck,
      color: "text-rose-400",
      duties: [
        "Stress tests user journey edge cases and invalid form inputs",
        "Maintains the official submission PPT and system architecture diagrams",
        "Validates that all mandatory AICTE criteria are covered across checkpoints",
      ],
      skillset: "Testing, technical writing, diagramming (Excalidraw/Draw.io)",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <JsonLd data={structuredData} />
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/" },
          { label: "Smart India Hackathon Team Roles" },
        ]}
      />

      <article className="mt-6">
        <header className="mb-10 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            <Users className="w-4 h-4" />
            <span>Squad Formation Blueprint</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 8 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Smart India Hackathon Team Roles & The Ideal 6-Member Squad Matrix
          </h1>

          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Team composition decides hackathon outcomes before a single line of code is written. Learn the optimal allocation of <strong>smart india hackathon team roles</strong>, regulatory compliance rules, and shift strategies for the 36-hour finale.
          </p>
        </header>

        {/* Section 1: Official AICTE Rules */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            1. Official SIH Team Regulatory Guidelines
          </h2>
          <p>
            Under AICTE Innovation Cell regulations, all teams submitting proposals must satisfy strict composition prerequisites:
          </p>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Strict 6-Member Rule:</strong> No team can register with fewer or more than 6 undergraduate students.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Mandatory Female Representation:</strong> At least one team member must identify as female. Teams failing this condition are instantly disqualified during portal validation.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Same College Institution:</strong> All 6 members must belong to the exact same academic institution (inter-college squads are strictly prohibited).
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 6 Squad Roles */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            2. The 6-Member Role Distribution Matrix
          </h2>
          <p>
            Avoid having 6 frontend developers or 6 AI hobbyists who cannot assemble an end-to-end working system. Every member must own an exclusive responsibility slice:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {squadRoles.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.num} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase">Member {role.num}</span>
                      <Icon className={`w-5 h-5 ${role.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{role.title}</h3>
                    <ul className="space-y-2 text-xs text-slate-400 mb-4">
                      {role.duties.map((duty, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400">•</span>
                          <span>{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <strong className="text-slate-300">Key Skills:</strong> {role.skillset}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: 36-Hour Sleep & Shift Schedule */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            3. The 36-Hour Grand Finale Rotation Strategy
          </h2>
          <p>
            Teams that stay awake for 36 consecutive hours crash during the decisive final morning evaluation. Professional teams implement a 2-tier sleep shift:
          </p>
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2 text-sm text-slate-300">
            <p><strong>Shift A (Backend + DevOps + AI):</strong> Works continuously from Hour 0 to Hour 16 (Day 1 Morning to Midnight). Rests from 1:00 AM to 5:00 AM while frontend logic polishes data binding.</p>
            <p><strong>Shift B (Frontend Lead + Pitch Lead + QA):</strong> Validates UI and presentation until 1:00 AM, rests from 1:30 AM to 5:30 AM, and wakes up refreshed to drive final jury evaluations from 7:00 AM onward.</p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold">Recommended 30-Day Training:</span>
            <p className="text-base font-bold text-white">How to Prepare for Hackathon as a Beginner</p>
          </div>
          <Link
            href="/guides/beginner-hackathon-preparation"
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors flex items-center gap-2"
          >
            <span>Review 30-Day Plan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </article>
    </div>
  );
}
