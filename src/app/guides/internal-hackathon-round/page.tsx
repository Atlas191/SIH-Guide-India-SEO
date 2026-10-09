import type { Metadata } from "next";
import Link from "next/link";
import { Award, Clock, ArrowRight, HelpCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Clear Internal College Hackathon Round",
  description:
    "Discover how to clear internal college hackathon round selections with college jury presentation tactics, prototype readiness, and viva strategies.",
  alternates: {
    canonical: "https://sih-guide-india.vercel.app/guides/internal-hackathon-round",
  },
  openGraph: {
    title: "How to Clear Internal College Hackathon Round",
    description:
      "Discover how to clear internal college hackathon round selections with college jury presentation tactics, prototype readiness, and viva strategies.",
    url: "https://sih-guide-india.vercel.app/guides/internal-hackathon-round",
    siteName: "SIH Guide India",
    locale: "en_IN",
    type: "article",
  },
};

export default function InternalHackathonRoundPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "How to Clear Internal College Hackathon Round: Proven Guide",
        description:
          "Practical strategy for engineering undergraduates on how to clear internal college hackathon round evaluations.",
        url: "https://sih-guide-india.vercel.app/guides/internal-hackathon-round",
        datePublished: "2026-01-20T00:00:00Z",
        dateModified: "2026-10-09T00:00:00Z",
        author: {
          "@type": "EducationalOrganization",
          name: "SIH Guide India",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Clear Internal College Hackathon Round",
        description:
          "Step-by-step roadmap to impress college faculty judges, present live MVP prototypes, and secure an official SIH nomination.",
        totalTime: "P7D",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Audit College SPOC Evaluation Guidelines",
            text: "Meet with your college Single Point of Contact (SPOC) and review the exact rubric used by appointed department heads.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Build a Clickable Figma or Localhost Prototype",
            text: "Teams showing a working frontend or interactive mockup consistently beat teams who rely exclusively on PowerPoint slides.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Structure the Strict 7-Minute Pitch",
            text: "Allocate 2 minutes to problem context, 3 minutes to architecture and live UI demo, and 2 minutes to feasibility and tech stack.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Prepare for Faculty Cross-Questioning",
            text: "Anticipate tough queries regarding database scalability, cost overheads, and student workload distribution.",
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
          { label: "How to Clear Internal College Hackathon Round" },
        ]}
      />

      <article className="mt-6">
        <header className="mb-10 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
            <Award className="w-4 h-4" />
            <span>Campus Screening Tactics</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 7 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How to Clear Internal College Hackathon Round: The Evaluator Playbook
          </h1>

          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            The internal college round is the gateway filter where hundreds of campus teams compete for the official AICTE nomination quota. Master the presentation psychology and technical proof needed to guarantee your team’s nomination.
          </p>
        </header>

        {/* Section 1 */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            1. Understanding the College Nomination Quota
          </h2>
          <p>
            Many engineering students asking <strong>how to clear internal college hackathon round</strong> misunderstand the stakes. Each accredited college can nominate a limited number of teams (typically 30 software + 5 waitlisted squads) to the central AICTE portal. Faculty juries prioritize teams that can uphold the institution&rsquo;s reputation at the national stage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">What Juries Dread</span>
              <p className="text-sm text-slate-400 mt-2">
                Unprepared slide readers with zero prototype progress, conflicting team answers, and theoretical hand-waving.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">What Juries Reward</span>
              <p className="text-sm text-slate-400 mt-2">
                Cohesive team chemistry, high-fidelity UI click-throughs, clear architecture diagrams, and crisp responses to feasibility queries.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            2. The High-Converting 7-Minute Pitch Formula
          </h2>
          <p>
            Most college internal rounds allocate between 5 to 7 minutes for presentation followed by 3 minutes of jury Q&A. Here is the second-by-second breakdown:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">Minute 0:00 - 1:30: The Ministry Pain Point</h3>
                <span className="text-xs font-mono text-amber-400">90 Seconds</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Cite the exact Problem Statement ID, submitting Ministry, and quantify the national problem (e.g., &ldquo;₹4,000 Crore lost annually due to crop storage logistics latency&rdquo;).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">Minute 1:30 - 3:00: Proposed Solution Architecture</h3>
                <span className="text-xs font-mono text-amber-400">90 Seconds</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Present your system block diagram: Data Ingestion layer, processing/API tier, and end-user interfaces (mobile app vs web portal).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">Minute 3:00 - 5:30: Working Prototype Demonstration</h3>
                <span className="text-xs font-mono text-emerald-400">150 Seconds</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Switch screens to your working prototype (or high-fidelity Figma). Trigger a real workflow: input data, trigger processing, and show the rendered response. This seals selection.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">Minute 5:30 - 7:00: Innovation, Tech Stack & Road Ahead</h3>
                <span className="text-xs font-mono text-amber-400">90 Seconds</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Explain your 36-hour sprint milestones, offline resilience, and why your approach outpaces commercial competitors.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            3. Common College Jury Questions & How to Answer
          </h2>
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                &ldquo;Where will you get the real training data if the ministry hasn&rsquo;t released it?&rdquo;
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                <strong>Best Response:</strong> &ldquo;We have already sourced an open benchmark dataset from Kaggle/data.gov.in with 40,000 anonymized records. We built an automated synthetic data pipeline using Python Faker to simulate production loads until official ministry APIs are unlocked.&rdquo;
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                &ldquo;Can your team realistically build this complex system in 36 hours?&rdquo;
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                <strong>Best Response:</strong> &ldquo;Yes. We are utilizing a pre-configured Next.js + Supabase boilerplate, headless auth, and pre-trained HuggingFace ONNX weights. Our squad has already mapped 6 distinct task modules to our individual member roles.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <section className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold">Related Team Architecture:</span>
            <p className="text-base font-bold text-white">Smart India Hackathon Team Roles</p>
          </div>
          <Link
            href="/guides/hackathon-team-roles"
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors flex items-center gap-2"
          >
            <span>Review Squad Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </article>
    </div>
  );
}
