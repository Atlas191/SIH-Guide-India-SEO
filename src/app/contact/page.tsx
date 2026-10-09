import type { Metadata } from "next";
import { Mail, MessageSquare, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact SIH Guide India | Mentorship and Feedback",
  description:
    "Get in touch with the SIH Guide India team for college hackathon mentoring sessions, presentation deck reviews, editorial suggestions, and queries.",
  alternates: {
    canonical: "https://sih-guide-india.vercel.app/contact",
  },
  openGraph: {
    title: "Contact SIH Guide India | Mentorship and Feedback",
    description:
      "Get in touch with the SIH Guide India team for college hackathon mentoring sessions, presentation deck reviews, editorial suggestions, and queries.",
    url: "https://sih-guide-india.vercel.app/contact",
    siteName: "SIH Guide India",
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact SIH Guide India Mentorship",
    url: "https://sih-guide-india.vercel.app/contact",
    description:
      "Mentorship request and community feedback portal for engineering students participating in the Smart India Hackathon.",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "SIH Guide India",
      url: "https://sih-guide-india.vercel.app",
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <JsonLd data={structuredData} />
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      <header className="mt-6 mb-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Student Mentorship & Feedback</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Connect with SIH Guide India Mentors
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Need a peer review for your team’s problem statement submission or have feedback on our guide frameworks? Reach out directly.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Contact Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-xl font-bold text-white mb-2">Submit a Mentorship or Deck Review Request</h2>
          <p className="text-xs text-slate-400 mb-6">
            Free community peer-reviews for Indian undergraduate engineering squads.
          </p>

          <ContactForm />
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Mentorship Response Policy</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We review submissions on a first-come, first-served basis. During peak AICTE submission periods (August - October), response turnaround is typically within 48 to 72 hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              <span>What We Provide</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Unbiased critique of your 8-slide AICTE PPT deck</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Detection of over-saturated problem statement choices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Architecture feasibility verification for 36-hour sprint scope</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
