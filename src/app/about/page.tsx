import type { Metadata } from "next";
import Link from "next/link";
import { Award, Compass, ShieldCheck, Code, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About SIH Guide India | Mission and Finalists",
  description:
    "Learn about SIH Guide India, our mission to democratize hackathon mentorship, and the credentials of our engineering undergraduate finalist team.",
  alternates: {
    canonical: "https://sih-guide-india.vercel.app/about",
  },
  openGraph: {
    title: "About SIH Guide India | Mission and Finalists",
    description:
      "Learn about SIH Guide India, our mission to democratize hackathon mentorship, and the credentials of our engineering undergraduate finalist team.",
    url: "https://sih-guide-india.vercel.app/about",
    siteName: "SIH Guide India",
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "SIH Guide India",
      url: "https://sih-guide-india.vercel.app/about",
      description:
        "Open-source hackathon engineering guidance created by past Smart India Hackathon finalists.",
      foundingDate: "2024",
    },
  };

  const teamMembers = [
    {
      name: "Nikhil Kumar",
      role: "Lead Architect & SIH Grand Finalist",
      credentials: "Smart India Hackathon Software Edition Finalist; 4x National Hackathon Winner",
      focus: "Distributed systems, prototype architecture, and AICTE ministry problem scoping.",
    },
    {
      name: "Aaditya Sharma",
      role: "Full-Stack & DevOps Mentor",
      credentials: "SIH Internal Round Rank #1; Winner at InnoHacks & HackNITR",
      focus: "Rapid Next.js boilerplate delivery, Supabase offline-first schemas, and cloud deployment.",
    },
    {
      name: "Sneha Patel",
      role: "UI/UX & Pitch Deck Strategist",
      credentials: "National Hackathon Best Pitch Award; AICTE Innovation Cell Delegate",
      focus: "Jury presentation ergonomics, high-converting problem framing, and Figma-to-code workflows.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero */}
      <section className="mt-6 mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Finalist Student Credentials</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Democratizing Hackathon Mentorship for Indian Engineers
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          SIH Guide India is an independent, non-profit academic portal developed by undergraduate engineering peers who navigated the high-stakes journey of internal college rounds, national shortlisting, and 36-hour Grand Finale showdowns.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Zero-Cost Playbook</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Every template, architectural diagram, and vetting checklist is freely accessible to Tier-2 and Tier-3 engineering colleges across India without paywalls.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
            <Code className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Technical Rigor</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            We reject vaporware ideas. Our guides emphasize real architectural feasibility, functional APIs, and prototype resilience under offline jury testing.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Battle-Tested Truth</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Advice born from real jury grilling, AICTE evaluation rubrics, and the high-pressure 3 AM debugging marathons of national hackathons.
          </p>
        </div>
      </section>

      {/* Team Credentials */}
      <section className="mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Student Core Team Credentials</h2>
          <p className="text-sm text-slate-400 mt-2">
            The engineering undergraduate cohort behind the frameworks and editorial guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 font-bold text-base mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <span className="text-xs font-semibold text-amber-400 block mt-0.5 mb-2">{member.role}</span>
                <p className="text-xs text-slate-300 font-medium bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 mb-3">
                  {member.credentials}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {member.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 text-center max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Need Mentorship for Your College Squad?</h2>
        <p className="text-sm text-slate-400 mt-2 max-w-lg mx-auto">
          We offer community reviews of problem statement pitches and presentation slide decks for student teams nationwide.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors flex items-center gap-2"
          >
            <span>Request Feedback</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
