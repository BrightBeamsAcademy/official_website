"use client";
import { useState } from "react";

const testimonials = [
  { name: "Hattie Bradly", role: "Kids' Father", text: "Bright Beams Academy has been a wonderful experience for our family. Our child loves going every day and has grown so much in confidence and language skills." },
  { name: "Jessica Brown", role: "Kids' Mother", text: "The bilingual program is exceptional. My daughter is now speaking both English and Mandarin with ease, and the teachers are so caring and dedicated." },
  { name: "Christine Eve", role: "Kids' Mother", text: "I couldn't be happier with the environment at Bright Beams. It's safe, nurturing, and the curriculum is perfectly balanced between play and learning." },
];

const faqs = [
  { q: "How much is tuition at Bright Beams Academy?", a: "Tuition at Bright Beams Academy is affected by your child's age, programs, days and hours your child attends, and location. Contact your local Academy for specific costs." },
  { q: "What will my child be learning?", a: "We employ innovative educational approaches that encourage creativity, problem-solving, and learning how to face life's challenges." },
  { q: "What is your health and safety policy?", a: "Bright Beams Academy has secure entries, authorized pick-up procedures, cleaning protocols, and completes background checks for all staff." },
];

export default function TestimonialFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
        {/* Testimonials */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Happy Parents Say</h1>
          <div className="space-y-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#fff8f7] rounded-2xl p-6 border border-[#f4edd0]">
                <p className="text-gray-600 italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fde8e5] flex items-center justify-center text-lg">👤</div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{t.name}</div>
                    <div className="text-[#ff7162] text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Frequently Ask Questions</h1>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-[#f4edd0] rounded-xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center hover:bg-[#fff8f7] transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="text-[#ff7162] ml-4">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <div className="px-6 pb-4 text-gray-600 text-sm">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
