import React from "react";

/**
 * Final call‑to‑action section.  Encourages users to get started now.
 */
export default function FinalCta() {
  return (
    <section className="py-16 bg-primary text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4">Ready to elevate your portraits?</h2>
        <p className="mb-8 text-lg">
          Join PersonaVision today and create stunning self photography with the power of AI.
        </p>
        <a
          href="#pricing"
          className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-full hover:bg-gray-100"
        >
          Start now
        </a>
      </div>
    </section>
  );
}