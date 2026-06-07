import React from "react";

/**
 * A simplified pricing section.  The original includes multiple
 * packages and integration with payment and Telegram links.  Here
 * we present two example tiers.
 */
export default function PriceSection() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "5 portrait generations",
        "Limited styles",
        "Community support",
      ],
    },
    {
      name: "Premium",
      price: "$9.99/mo",
      features: [
        "Unlimited generations",
        "Full style library",
        "Priority support",
      ],
    },
  ];
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Pricing</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className="p-6 bg-white border rounded-lg shadow-sm flex flex-col">
              <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#!"
                className="mt-auto px-6 py-3 bg-primary text-white rounded-full text-center hover:bg-primary/90"
              >
                Choose plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}