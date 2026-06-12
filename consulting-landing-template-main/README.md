# Visual Identity Lab

Visual Identity Lab is a minimal but complete vertical slice for a guided AI identity product:

`Landing -> Quiz -> AI Analysis -> Archetype Result -> Prompt Compilation -> Image Generation -> Checkout -> Payment Success -> Telegram Delivery`

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Local client state for MVP flow
- Provider abstractions for AI, image, payment, and delivery

## Locale Routing

- `/` redirects to `/ru`
- Supported locales:
  - `/ru`
  - `/uk`
  - `/en`
  - `/es`

## Project Structure

- `src/app/[locale]/*` - locale pages
- `src/app/api/*` - API routes for analysis, generation, delivery, and payments
- `src/components/*` - shell and language switcher
- `src/features/*` - quiz, result, generation, checkout client flows
- `src/providers/*` - provider contracts and implementations
- `src/services/*` - orchestration, content loading, prompt compilation, order storage
- `src/content/{locale}/*.md` - archetype content files
- `src/i18n/*.json` - translations

## Required Environment Variables

Copy `.env.example` to `.env.local` and set what you need:

```bash
AI_PROVIDER=local
LOCAL_AI_BASE_URL=http://localhost:11434
LOCAL_AI_MODEL=gemma3:27b
PAYMENT_PROVIDER=fondy
APP_BASE_URL=http://localhost:3000
FONDY_MERCHANT_ID=
FONDY_SECRET_KEY=
WAYFORPAY_MERCHANT_ACCOUNT=
WAYFORPAY_SECRET_KEY=
PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHANNEL_INVITE_LINK=
```

Notes:

- If `AI_PROVIDER=local` is unavailable, the app falls back to `MockAIProvider`.
- If `TELEGRAM_CHANNEL_INVITE_LINK` is empty, payment success still works but no Telegram button is shown.
- If Fondy credentials are not configured, checkout still runs through a simulated hosted checkout route for the MVP slice.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## What Is Implemented

- Locale-based routing with language switching that preserves the current path
- Multi-step quiz with local answer persistence
- AI analysis through `AIProvider` with Ollama-compatible primary adapter and mock fallback
- Archetype result layer for `queen`, `mentor`, and `creator`
- Prompt compilation from AI analysis plus locale content files
- Mock image generation through `ImageProvider`
- Payment checkout creation through `PaymentProvider`
- Fondy provider skeleton plus webhook skeletons for Fondy, WayForPay, and PayPal
- Telegram delivery skeleton through `DeliveryProvider`

## Payment Flow for the MVP

- `POST /api/payments/create` creates a pending order through the payment abstraction
- the provider returns a hosted checkout URL
- the hosted checkout route simulates external payment confirmation for the vertical slice
- `payment-success` requests Telegram delivery only after server-side order status becomes `paid`

## Next Steps for Real Integrations

1. Replace the simulated hosted checkout route inside `FondyPaymentProvider` with real Fondy request signing and redirect handling.
2. Implement webhook signature verification for Fondy and persist orders in a database instead of in-memory storage.
3. Add a real `ImageProvider` adapter for Leonardo, OpenAI Images, or another provider.
4. Replace the Telegram invite-link skeleton with bot-backed entitlement and delivery logic if needed.
