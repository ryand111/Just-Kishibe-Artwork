"use client";

import { useState, useEffect } from "react";
import Navbar from "@/lib/components/Navbar";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <main className="max-w-7xl mx-auto px-8 py-16 text-center">
          <p className="text-gray-400">Loading studio...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 pt-20 pb-16 text-center sm:text-left">
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase block mb-3">
            Original Fine Art & Commissions
          </span>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none text-gray-900 mb-6">
            Statement pieces <br />
            for intentional spaces.
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
            Handcrafted contemporary artwork designed to balance scale, texture, and light. Explore available original paintings or collaborate on a custom bespoke commission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a 
              href="/commissions" 
              className="bg-black text-white px-8 py-4 text-sm font-semibold rounded-lg hover:bg-gray-800 text-center transition-colors tracking-wide shadow-sm"
            >
              Commission a Custom Piece
            </a>
            <a 
              href="/about" 
              className="border border-gray-200 text-black px-8 py-4 text-sm font-semibold rounded-lg hover:bg-gray-50 text-center transition-colors tracking-wide"
            >
              Meet the Artist
            </a>
          </div>
        </div>
      </header>

      {/* Featured Artwork Showcase */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 bg-gray-50 aspect-[16/10] w-full rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
            <div className="text-center p-8">
              <span className="text-4xl block mb-2">🖼️</span>
              <p className="text-xs font-bold tracking-wider text-gray-400 uppercase">Featured Masterpiece Image</p>
              <p className="text-xs text-gray-400 mt-1 max-w-sm">Drop a high-quality photo of your favorite painting or studio layout here.</p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-bold text-gray-400 tracking-wider uppercase block mb-1">CURRENT SHOWCASE</span>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">"Untitled No. 14"</h2>
              <p className="text-sm text-gray-400 mt-1">Mixed Media on Raw Canvas, 120 x 150cm</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              An exploration of minimalist texture and deep earth tones. This signature style highlights the raw imperfections of woven linen intersecting with structural, geometric plaster layers.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold tracking-wide">
                Available for Purchase
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Updated Footer Custom Brand Text */}
      <footer className="max-w-7xl mx-auto px-8 py-16 mt-12 border-t border-t-gray-100 text-center text-xs text-gray-400 tracking-wider uppercase">
        © {new Date().getFullYear()} Just Kishibe Artwork. All Rights Reserved.
      </footer>
    </div>
  );
}