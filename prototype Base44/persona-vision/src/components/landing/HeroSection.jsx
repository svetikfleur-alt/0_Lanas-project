import React from "react";
import { Link } from "react-router-dom";

/**
 * A simple hero section for the landing page.  The original version
 * includes animations and language support; this stripped down
 * component provides a clean heading, description and call to
 * actions.  Feel free to swap the background image and text.
 */
export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-[80vh] overflow-hidden bg-gray-100">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1950&q=80"
          alt="Photographer working"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl text-center px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Capture your style with{' '}
          <span className="text-primary">PersonaVision</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          A photography companion to create stunning self portraits using AI.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#pricing"
            className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90"
          >
            Get started
          </a>
          <a
            href="#features"
            className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-gray-900"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}