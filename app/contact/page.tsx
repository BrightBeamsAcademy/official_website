"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CONTACT } from "../config";

const info = [
  { label: "Address", value: CONTACT.address },
  { label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phoneTel}` },
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: "Hours", value: CONTACT.hours },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative bg-white py-20 overflow-hidden">
      <div className="absolute top-0 right-0 pointer-events-none select-none">
        <img src="/logo.png" alt="" className="w-96 opacity-5" />
      </div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-[#ff7162] text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-gray-800">Get in Touch</h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            We'd love to meet your family. Reach out to schedule a tour, ask about enrollment, or just say hello.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-5 mb-10">
              {info.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fff0ee] flex items-center justify-center shrink-0">
                    <span className="text-[#ff7162]">✦</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#ff7162] font-semibold uppercase tracking-wide">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="text-gray-700 hover:text-[#ff7162] transition-colors">{item.value}</a>
                      : <div className="text-gray-700">{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <iframe
                src={CONTACT.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-[#fff0ee] rounded-2xl p-10 text-center">
                <div className="text-[#ff7162] text-4xl mb-4">✦</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Thank you!</h3>
                <p className="text-gray-600">We received your message and will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      required
                      className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:border-[#ff7162]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      required
                      className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:border-[#ff7162]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:border-[#ff7162]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Phone (optional)</label>
                  <input
                    type="tel"
                    className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:border-[#ff7162]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <select className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:border-[#ff7162]">
                    <option>Schedule a Tour</option>
                    <option>Enrollment Inquiry</option>
                    <option>Program Information</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:border-[#ff7162] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#4A90D9] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2d6fa8] transition-colors self-start"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
