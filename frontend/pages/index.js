// src/pages/index.js
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white font-sans text-gray-900">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-green-600">CareBridge</h1>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-green-600">Home</a>
          
          

          <a href="#" className="hover:text-green-600">Transparency</a>
        </div>
       <a href="/login">
  <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
    Login
  </button>
</a>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold text-gray-800">
          Empowering Citizens Through{" "}
          <span className="text-green-600">Transparency & Access</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover welfare schemes using AI and modern governance.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
            Find Your Benefits
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
            View Transparency Dashboard
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10 px-6">
        {[
          ["1000+", "Active Schemes"],
          ["50,000+", "Citizens Served"],
          ["₹3,420 Cr", "Funds Allocated"],
          ["95%", "Success Rate"],
        ].map(([value, label]) => (
          <div key={label}>
            <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </section>

      {/* Platform Features */}
      <section className="px-10 py-16">
        <h3 className="text-2xl font-bold text-center mb-10">
          Platform Features
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "ID Verification",
            "Voice Support",
            "AI Matching",
            "Transparency",
            "Risk Detection",
            "Verified Reports",
          ].map((feature) => (
            <div
              key={feature}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">{feature}</h4>
              <p className="text-sm text-gray-500 mt-2">
                Secure, intelligent and citizen-friendly services.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Scheme Categories */}
      <section className="px-10 py-16 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-10">
          Popular Scheme Categories
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Housing & Infrastructure",
            "Agriculture & Farming",
            "Healthcare & Wellness",
          ].map((cat) => (
            <div
              key={cat}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="h-40 bg-gray-200" />
              <div className="p-5">
                <h4 className="font-semibold">{cat}</h4>
                <button className="mt-4 text-green-600 text-sm hover:underline">
                  View All →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-green-600 text-white">
        <h3 className="text-3xl font-bold">Ready to Get Started?</h3>
        <p className="mt-3">
          Join thousands of citizens accessing the right benefits.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100">
            Sign Up Now
          </button>
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-green-500/70">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}
