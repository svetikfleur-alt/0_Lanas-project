"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function CheckoutForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const session = await response.json();
    setLoading(false);
    router.push(session.checkoutUrl);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-6 rounded-[32px] bg-white p-8 shadow-card">
      <div>
        <h2 className="font-serif text-3xl">Checkout</h2>
        <p className="mt-2 text-ink/70">
          Fondy is wrapped behind a provider layer. This MVP uses a safe skeleton without
          real credentials.
        </p>
      </div>

      <label className="grid gap-2">
        <span className="text-sm text-ink/70">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-2xl border border-ink/10 bg-sand px-4 py-3 outline-none"
          placeholder="you@example.com"
        />
      </label>

      <button type="submit" className="rounded-full bg-ink px-6 py-3 text-white">
        {loading ? "Creating session..." : "Pay $149"}
      </button>
    </form>
  );
}
