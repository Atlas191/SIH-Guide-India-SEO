"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-white mb-2">Mentorship Request Received!</h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          Thank you for reaching out. One of our student finalist mentors will review your problem statement inquiry and respond within 48 to 72 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
        >
          Submit Another Query
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="e.g. Rahul Sharma"
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="name@college.edu"
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="college" className="block text-xs font-semibold text-slate-300 mb-1">
            College / Institute Name *
          </label>
          <input
            type="text"
            id="college"
            name="college"
            required
            placeholder="e.g. NIT Trichy / DTU / Anna Univ"
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-xs font-semibold text-slate-300 mb-1">
            Inquiry Topic *
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
          >
            <option value="deck-review">PPT Deck & Architecture Review</option>
            <option value="ps-selection">Problem Statement Feasibility</option>
            <option value="internal-round">Internal Screening Advice</option>
            <option value="editorial">Editorial / Content Feedback</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1">
          Your Query / Problem Statement Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Share your Problem Statement ID, team composition, or specific questions about your deck architecture..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-amber-500/10 cursor-pointer"
      >
        <Send className="w-4 h-4" />
        <span>Send Mentorship Query</span>
      </button>
    </form>
  );
}
