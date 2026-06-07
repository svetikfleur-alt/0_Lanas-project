import React from "react";

/**
 * A simplified solution section explaining how the service works.  The
 * original includes numbered steps and icons; this version lays out
 * three steps in cards.
 */
export default function SolutionSection() {
  const steps = [
    {
      title: "Upload photos",
      description: "Provide a handful of selfies to train your AI portrait model.",
    },
    {
      title: "Choose your style",
      description: "Select from a curated library of settings, outfits and moods.",
    },
    {
      title: "Generate your look",
      description: "AI transforms your portraits into stunning self photography.",
    },
  ];
  return (
    <section id="solution" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 bg-white border rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary mb-4">{idx + 1}</div>
              <h3 className="font-medium text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}