"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Locale } from "@/types/identity";

import { readOrderId } from "@/features/quiz/storage";

type DeliveryState = {
  inviteLink?: string;
  message?: string;
};

export function PaymentSuccessView({
  locale,
  orderId,
  labels,
}: {
  locale: Locale;
  orderId?: string;
  labels: {
    thanks: string;
    description: string;
    loadingDelivery: string;
    accessReady: string;
    accessPending: string;
    accessButton: string;
    backGenerate: string;
  };
}) {
  const [delivery, setDelivery] = useState<DeliveryState | null>(null);
  const [loading, setLoading] = useState(true);
  const resolvedOrderId = orderId ?? readOrderId() ?? undefined;

  useEffect(() => {
    const currentOrderId = resolvedOrderId;

    if (!currentOrderId) {
      setLoading(false);
      return;
    }

    fetch("/api/delivery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId: currentOrderId, locale }),
    })
      .then(async (response) => {
        const payload = await response.json();
        setDelivery(payload);
      })
      .finally(() => setLoading(false));
  }, [locale, resolvedOrderId]);

  return (
    <div className="grid gap-6 rounded-[32px] bg-white p-8 shadow-card">
      <div>
        <h2 className="font-serif text-4xl">{labels.thanks}</h2>
        <p className="mt-4 max-w-2xl text-ink/75">{labels.description}</p>
      </div>

      {loading ? <p className="text-sm text-ink/60">{labels.loadingDelivery}</p> : null}

      {!loading && delivery?.inviteLink ? (
        <div className="rounded-[28px] bg-sand p-6">
          <p className="text-sm text-ink/70">{labels.accessReady}</p>
          <a
            href={delivery.inviteLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-copper px-6 py-3 text-white"
          >
            {labels.accessButton}
          </a>
        </div>
      ) : null}

      {!loading && !delivery?.inviteLink ? <p className="text-sm text-ink/60">{labels.accessPending}</p> : null}

      <Link href={`/${locale}/generate`} className="inline-flex rounded-full border border-ink/10 px-6 py-3">
        {labels.backGenerate}
      </Link>
    </div>
  );
}
