import React from "react";

/**
 * A simplified section describing common pain points.  In the full
 * Base44 project this enumerates specific problems and animates
 * their appearance.  Here we list a few example issues in a grid.
 */
export default function ProblemSection() {
  const problems = [
    {
      title: "Lack of professional photos",
      description: "Getting high‑quality portrait photography can be expensive and time consuming.",
    },
    {
      title: "Awkward poses",
      description: "It’s hard to know how to pose yourself for flattering shots without guidance.",
    },
    {
      title: "Limited locations",
      description: "You’re stuck with the same backgrounds and settings in every photo.",
    },
    {
      title: "Confidence on camera",
      description: "Many people feel self conscious in front of a camera without a photographer’s support.",
    },
  ];
  return (
    <section id="problems" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Why people struggle with self photography</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}