import Link from "next/link";
import { Compass, BookOpen, FileText, Layers, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-600 to-indigo-600 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-slate-100 tracking-tight">
                SIH Guide <span className="text-amber-400 font-mono text-xs">INDIA</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              An open-access, zero-cost knowledge architecture built by past Smart India Hackathon finalists to empower engineering undergraduates with authentic frameworks, PPT formats, and prototype engineering stacks.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Independent academic guidance initiative. Not affiliated with AICTE/MoE.</span>
            </div>
          </div>

          {/* Core Guides */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-400" />
              Core Guides
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/guides/sih-problem-statement-selection" className="hover:text-amber-400 transition-colors">
                  Problem Statement Selection
                </Link>
              </li>
              <li>
                <Link href="/guides/internal-hackathon-round" className="hover:text-amber-400 transition-colors">
                  Internal Hackathon Round
                </Link>
              </li>
              <li>
                <Link href="/guides/hackathon-team-roles" className="hover:text-amber-400 transition-colors">
                  Team Roles & Composition
                </Link>
              </li>
              <li>
                <Link href="/guides/beginner-hackathon-preparation" className="hover:text-amber-400 transition-colors">
                  Beginner Preparation 30-Day
                </Link>
              </li>
            </ul>
          </div>

          {/* Blueprints & Stacks */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-orange-400" />
              Templates & Stacks
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/templates/sih-ppt-format" className="hover:text-orange-400 transition-colors">
                  SIH PPT Deck Format
                </Link>
              </li>
              <li>
                <Link href="/tech-stacks/hackathon-prototype-stack" className="hover:text-cyan-400 transition-colors">
                  Hackathon Prototype Stack
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-indigo-400 transition-colors">
                  Strategy Blog & Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional / Meta */}
          <div>
            <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-400" />
              Initiative
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us & Finalist Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Mentorship
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-white transition-colors">
                  XML Sitemap
                </a>
              </li>
              <li>
                <a href="/robots.txt" className="hover:text-white transition-colors">
                  Robots Directive
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 SIH Guide India. Built for Indian Engineering Undergraduates.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for open source education
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
