import React from "react";

/**
 * A simplified expert section extolling the benefits of AI guidance.  The
 * original displays a portrait image and a list of credentials; this
 * version summarises the advantages in a few bullet points.
 */
export default function ExpertSection() {
  const credentials = [
    "AI powered posing guidance",
    "Professional lighting simulation",
    "High‑resolution output",
    "Customisable backgrounds",
  ];
  return (
    <section id="expert" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
            alt="Photographer illustration"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Meet your virtual photographer</h2>
          <p className="mb-6 text-muted-foreground">
            PersonaVision harnesses state‑of‑the‑art AI to help you look your best in every shot. Our
            technology guides you through poses, lighting and styling to create professional quality
            portraits without a studio.
          </p>
          <ul className="space-y-2 mb-6">
            {credentials.map((cred, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{cred}</span>
              </li>
            ))}
          </ul>
          <a
            href="#pricing"
            className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90"
          >
            Start your session
          </a>
        </div>
      </div>
    </section>
  );
}