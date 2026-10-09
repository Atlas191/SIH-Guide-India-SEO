import type { Metadata } from "next";
import Link from "next/link";
import { Target, CheckCircle2, AlertTriangle, ArrowRight, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Choose Problem Statement in SIH: Step-by-Step",
  description:
    "Learn how to choose problem statement in SIH with our 5-filter evaluation framework, domain feasibility scoring, and competitor saturation analysis.",
  alternates: {
    canonical: "https://sih-guide-india.vercel.app/guides/sih-problem-statement-selection",
  },
  openGraph: {
    title: "How to Choose Problem Statement in SIH: Step-by-Step",
    description:
      "Learn how to choose problem statement in SIH with our 5-filter evaluation framework, domain feasibility scoring, and competitor saturation analysis.",
    url: "https://sih-guide-india.vercel.app/guides/sih-problem-statement-selection",
    siteName: "SIH Guide India",
    locale: "en_IN",
    type: "article",
  },
};

export default function ProblemStatementSelectionPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "How to Choose Problem Statement in SIH: Step-by-Step Guide",
        description:
          "Strategic guide on how to choose problem statement in SIH using domain feasibility scoring and competitor saturation analysis.",
        url: "https://sih-guide-india.vercel.app/guides/sih-problem-statement-selection",
        datePublished: "2026-01-15T00:00:00Z",
        dateModified: "2026-10-09T00:00:00Z",
        author: {
          "@type": "EducationalOrganization",
          name: "SIH Guide India",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Choose Problem Statement in SIH",
        description:
          "5-step framework to evaluate, filter, and lock a high-win-rate Smart India Hackathon problem statement.",
        totalTime: "P3D",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Download and Aggregate Official PS Repository",
            text: "Export the full list of problem statements from the official portal and categorize them by technical theme (Software vs Hardware, Ministry domain).",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Eliminate Over-Saturated Generic Themes",
            text: "Filter out generic chatbot and student attendance trackers which attract 500+ competing teams and offer minimal jury differentiation.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Audit 36-Hour MVP Feasibility",
            text: "Determine if external datasets, government APIs, or specialized hardware sensors required by the ministry are accessible within 36 hours.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Map Internal Squad Skill Coverage",
            text: "Ensure at least 2 members have working experience in the exact backend and UI stack required before locking the selection.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Draft 1-Page Feasibility Matrix for College SPOC",
            text: "Present the top 3 shortlisted PS IDs with novelty scores to your college Single Point of Contact (SPOC) to avoid campus-level duplicate submissions.",
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <JsonLd data={structuredData} />
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/" },
          { label: "How to Choose Problem Statement in SIH" },
        ]}
      />

      <article className="mt-6">
        <header className="mb-10 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <Target className="w-4 h-4" />
            <span>Problem Statement Strategy</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 8 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How to Choose Problem Statement in SIH: The 5-Filter Evaluation Matrix
          </h1>

          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Selecting the wrong problem statement is the #1 reason 85% of collegiate teams are eliminated before the grand finale. Here is how national finalists systematically filter 500+ problem statements to find low-saturation, high-impact winners.
          </p>
        </header>

        {/* Section 1 */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>1. The Competitor Saturation Index Trap</span>
          </h2>
          <p>
            When students first explore <strong>how to choose problem statement in sih</strong>, their default instinct is to gravitate toward popular keywords like &ldquo;AI Medical Diagnosis&rdquo; or &ldquo;Smart Campus Attendance with Face Recognition&rdquo;. These statements inevitably see submissions from over 400 college teams nationwide, drastically reducing your probability of selection.
          </p>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">Finalist Secret:</strong>
                Target problem statements from state ministries or niche departments (e.g., Department of Water Resources, Inland Waterways Authority, or Postal Logistics) where total team submissions are often under 25 teams.
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Step by step */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            2. The 5-Filter Evaluation Framework
          </h2>
          <p>
            Before finalizing any Problem Statement ID on the AICTE portal, run your proposal through this five-tier feasibility check:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Filter 1: Open Dataset Availability
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Does the ministry provide real datasets or open APIs on data.gov.in? If your ML model requires proprietary satellite imagery that is classified, you will stall during the 36-hour hackathon.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Filter 2: 36-Hour Demonstrable Scope
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Can your squad assemble a functioning, clicked end-to-end prototype within 36 hours? Avoid statements that require months of laboratory calibration or unverified hardware sensors.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Filter 3: Ministry Pain Point Urgency
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Review whether the problem statement was submitted by an active government department with assigned jury officers. High-priority sovereign initiatives score significantly higher during evaluation rounds.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Filter 4: Squad Skill Resonance
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Verify that at least two team members have past hands-on experience building the required architecture (e.g., WebSockets, WebRTC, GIS layers, or embedded microcontrollers).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Filter 5: Clear Unique Selling Proposition (USP)
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Can you articulate what makes your approach fundamentally superior in one single sentence? Juries review dozens of decks and require instant clarity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Scoring Matrix Table */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            3. Problem Statement Decision Scoring Rubric
          </h2>
          <p>
            Rank your top 3 candidate statements using this weighted matrix before presenting them to your college faculty mentor:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900 text-xs uppercase font-semibold text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-4">Criteria</th>
                  <th className="p-4">Weight</th>
                  <th className="p-4">Low Score (1-2)</th>
                  <th className="p-4">High Score (4-5)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/60">
                <tr>
                  <td className="p-4 font-medium text-white">Dataset Availability</td>
                  <td className="p-4 text-amber-400 font-semibold">25%</td>
                  <td className="p-4 text-slate-400">Zero publicly accessible data</td>
                  <td className="p-4 text-emerald-400">Clean public API or Kaggle/data.gov.in set</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Competition Density</td>
                  <td className="p-4 text-amber-400 font-semibold">25%</td>
                  <td className="p-4 text-slate-400">Over-hyped general AI topic</td>
                  <td className="p-4 text-emerald-400">Specialized ministry domain problem</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Prototype Viability</td>
                  <td className="p-4 text-amber-400 font-semibold">20%</td>
                  <td className="p-4 text-slate-400">Requires production enterprise infra</td>
                  <td className="p-4 text-emerald-400">Full demonstrable UI + backend logic in 36h</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">USP & Innovation</td>
                  <td className="p-4 text-amber-400 font-semibold">15%</td>
                  <td className="p-4 text-slate-400">Simple CRUD dashboard wrapper</td>
                  <td className="p-4 text-emerald-400">Novel algorithm, offline sync, or GIS visualizer</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Internal College Clash</td>
                  <td className="p-4 text-amber-400 font-semibold">15%</td>
                  <td className="p-4 text-slate-400">3+ teams in your college chose it</td>
                  <td className="p-4 text-emerald-400">Exclusive pick in your institution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Next Steps Links */}
        <section className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold">Next Tactical Milestone:</span>
            <p className="text-base font-bold text-white">College Internal Screening Round</p>
          </div>
          <Link
            href="/guides/internal-hackathon-round"
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors flex items-center gap-2"
          >
            <span>Read Internal Round Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </article>
    </div>
  );
}
