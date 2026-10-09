import type { Metadata } from "next";
import Link from "next/link";
import { Clock, CheckCircle2, ArrowRight, Layout } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "SIH Idea Presentation PPT Format and Slide Guide",
  description:
    "Official-aligned SIH idea presentation PPT format breakdown. Review every required slide from problem definition to architecture and USP slides.",
  alternates: {
    canonical: "https://sih-guide-india.vercel.app/templates/sih-ppt-format",
  },
  openGraph: {
    title: "SIH Idea Presentation PPT Format and Slide Guide",
    description:
      "Official-aligned SIH idea presentation PPT format breakdown. Review every required slide from problem definition to architecture and USP slides.",
    url: "https://sih-guide-india.vercel.app/templates/sih-ppt-format",
    siteName: "SIH Guide India",
    locale: "en_IN",
    type: "article",
  },
};

export default function SihPptFormatPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "SIH Idea Presentation PPT Format & Slide-by-Slide Breakdown",
        description:
          "Official-aligned breakdown of the 8-slide presentation deck format for the Smart India Hackathon preliminary evaluation.",
        url: "https://sih-guide-india.vercel.app/templates/sih-ppt-format",
        datePublished: "2026-02-05T00:00:00Z",
        dateModified: "2026-10-09T00:00:00Z",
        author: {
          "@type": "EducationalOrganization",
          name: "SIH Guide India",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Build the Winning SIH Idea Presentation PPT",
        description:
          "Step-by-step guide to structuring the 8 required slides for the Smart India Hackathon idea submission portal.",
        totalTime: "PT4H",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Slide 1: Team & Problem Statement Metadata",
            text: "List Problem Statement Code, Ministry Name, Team Name, and College affiliation.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Slide 2: Proposed Solution & Core Workflow",
            text: "Summarize your high-level approach in three concise bullet points.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Slide 3: System Architecture Diagram",
            text: "Embed an end-to-end block diagram depicting frontend, backend API, and database layers.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Slide 4: Novelty & Unique Selling Proposition (USP)",
            text: "Detail what makes your solution superior to existing state-level or commercial offerings.",
          },
        ],
      },
    ],
  };

  const slides = [
    {
      num: "Slide 01",
      title: "Cover Slide: Problem Identification & Team Credentials",
      requiredContent: [
        "Problem Statement ID (e.g., SIH1420)",
        "Title of Problem Statement exactly as listed in AICTE portal",
        "Submitting Ministry / Department (e.g., Ministry of Jal Shakti)",
        "Team Name, Leader Name, and Academic Institution details",
      ],
      tip: "Keep the design minimalist. Do not crowd with unneeded clip art.",
    },
    {
      num: "Slide 02",
      title: "Problem Statement Analysis & Root Cause Mapping",
      requiredContent: [
        "Background context: Who suffers from this issue?",
        "Statistical validation: Quantify the economic or logistical pain",
        "Existing bottlenecks in the government's current manual or legacy pipeline",
      ],
      tip: "Include a real data citation from a government press release or audit report.",
    },
    {
      num: "Slide 03",
      title: "Proposed Solution & Operational Flow",
      requiredContent: [
        "One-sentence executive summary of your software or hardware intervention",
        "Primary user personas (citizen, field inspector, ministry admin)",
        "High-level workflow: Step 1 (Input) -> Step 2 (Computation) -> Step 3 (Action)",
      ],
      tip: "Use an infographic sequence rather than wall-to-wall paragraphs of text.",
    },
    {
      num: "Slide 04",
      title: "System Architecture & Data Pipeline",
      requiredContent: [
        "End-to-end technical architecture block diagram",
        "Data ingestion sources (sensors, mobile GPS, open APIs)",
        "Application logic tier, database storage, and caching layers",
        "Security & Encryption mechanisms (JWT, TLS 1.3, AES-256)",
      ],
      tip: "This is the slide jury evaluators inspect longest. Make your diagram high-contrast and crystal clear.",
    },
    {
      num: "Slide 05",
      title: "Novelty & Unique Selling Proposition (USP)",
      requiredContent: [
        "Feature comparison matrix contrasting your prototype vs 3 market alternatives",
        "Key technological differentiator (e.g., offline-first sync, edge AI, zero server fees)",
        "Intellectual property potential or unique algorithmic heuristic",
      ],
      tip: "Never claim 'No competitors exist'. Show how your approach improves upon current tools.",
    },
    {
      num: "Slide 06",
      title: "Technical Stack & Feasibility Justification",
      requiredContent: [
        "Frontend framework: Next.js / Flutter / React Native",
        "Backend & DB: FastAPI / Node.js, Supabase / PostgreSQL",
        "AI / Analytics tools: OpenCV / PyTorch / Scikit-learn",
        "Cloud & Infrastructure: Zero-cost tier Vercel / Railway / Docker",
      ],
      tip: "List only tools your team has actively implemented. Evaluators test these in viva.",
    },
    {
      num: "Slide 07",
      title: "Societal Impact, Scalability & Commercial Viability",
      requiredContent: [
        "Direct beneficiaries: How many citizens or officials benefit?",
        "Cost-efficiency: Annual operational budget estimation for government adoption",
        "Phase 2 roadmap: Post-hackathon scaling potential across Indian states",
      ],
      tip: "Align directly with national policy goals (Digital India, Viksit Bharat, Make in India).",
    },
    {
      num: "Slide 08",
      title: "Team Composition, Role Matrix & 36-Hour Sprint Plan",
      requiredContent: [
        "Name, photo, specific technical role for each of the 6 squad members",
        "Proof of past hackathon wins or relevant project GitHub links",
        "36-hour sprint milestones broken into 6-hour blocks",
      ],
      tip: "Ensure your mandatory female team member and squad roles are clearly highlighted.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <JsonLd data={structuredData} />
      <Breadcrumbs
        items={[
          { label: "Templates", href: "/" },
          { label: "SIH PPT Presentation Format" },
        ]}
      />

      <article className="mt-6">
        <header className="mb-10 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">
            <Layout className="w-4 h-4" />
            <span>AICTE-Aligned Submission Template</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 10 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            SIH Idea Presentation PPT Format & Official Slide-by-Slide Breakdown
          </h1>

          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Every year, the AICTE Innovation Cell requires college teams to submit an official presentation deck. Here is the comprehensive breakdown of the <strong>sih idea presentation ppt format</strong> to ensure maximum evaluator scoring.
          </p>
        </header>

        {/* Section 1: Official Structure */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            1. The Official 8-Slide AICTE Standard Structure
          </h2>
          <p>
            Evaluators review between 100 and 300 decks per problem statement. Deviating from the required slide sequence or exceeding 8-10 slides often triggers immediate point deductions. Adhere strictly to this proven blueprint:
          </p>

          <div className="space-y-6">
            {slides.map((slide) => (
              <div key={slide.num} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                    {slide.num}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Evaluation Criterion</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{slide.title}</h3>
                
                <div className="space-y-1.5 mb-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Mandatory Elements:</span>
                  {slide.requiredContent.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-amber-300/90 flex items-start gap-2">
                  <span className="font-bold text-amber-400 shrink-0">Evaluator Tip:</span>
                  <span>{slide.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Technical Diagrams Warning */}
        <section className="space-y-6 text-slate-300 leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            2. System Architecture Diagram Rules
          </h2>
          <p>
            Slide 4 (Technical Architecture) carries up to 35% of the initial evaluation weight. Follow these formatting guidelines:
          </p>
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Use Clear Tier Separation:</strong> Visually partition your diagram into 3 horizontal zones: Client Tier (Web/Mobile), Processing/API Tier, and Storage/Analytics Tier.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Directional Arrows with Protocols:</strong> Label data flows with actual protocols (e.g., &ldquo;HTTPS POST /api/predict&rdquo; or &ldquo;WSS realtime socket&rdquo;).
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Avoid Generic Icon Grids:</strong> Never slap disconnected logos of Python, Docker, and React without showing how data flows between them.
              </div>
            </div>
          </div>
        </section>

        {/* Next Step */}
        <section className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold">Recommended Prototyping Stack:</span>
            <p className="text-base font-bold text-white">Best Tech Stack for Hackathon Prototype</p>
          </div>
          <Link
            href="/tech-stacks/hackathon-prototype-stack"
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors flex items-center gap-2"
          >
            <span>Review Prototype Stack</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </article>
    </div>
  );
}
