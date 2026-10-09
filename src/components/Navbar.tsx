import Link from "next/link";
import { Compass, BookOpen, Layers, FileText, Users, Mail, Award } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-600 to-indigo-600 p-0.5 shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold text-slate-100 tracking-tight flex items-center gap-1.5">
                SIH Guide <span className="text-amber-400 text-xs px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 font-mono font-semibold">INDIA</span>
              </span>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">National Hackathon Playbook</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
            <Link
              href="/guides/sih-problem-statement-selection"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              Guides
            </Link>
            <Link
              href="/templates/sih-ppt-format"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-orange-400" />
              PPT Template
            </Link>
            <Link
              href="/tech-stacks/hackathon-prototype-stack"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              Tech Stacks
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <Users className="w-4 h-4 text-emerald-400" />
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              Contact
            </Link>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/guides/beginner-hackathon-preparation"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-sans shadow-md shadow-orange-500/20 transition-all hover:shadow-orange-500/30"
            >
              <Award className="w-4 h-4" />
              <span>30-Day Roadmap</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
