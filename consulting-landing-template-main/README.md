# Visual Identity Lab

Visual Identity Lab is a structured MVP for identity discovery, archetype analysis, visual direction, image concept generation, payment and delivery.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Provider abstractions for AI, image generation, payments and delivery

## Structure

- `src/app` - routes and API handlers
- `src/components` - shared UI shell
- `src/features` - feature-level client flows
- `src/providers` - provider contracts and implementations
- `src/services` - orchestration and domain logic
- `src/types` - shared domain types
- `src/content` - archetype content files

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## MVP flow

1. Landing page
2. Multi-step quiz
3. AI analysis via `AIProvider`
4. Archetype result
5. Image concept generation via `ImageProvider`
6. Checkout via `PaymentProvider`
7. Telegram delivery skeleton via `DeliveryProvider`

## Notes

- `MockAIProvider` and `MockImageProvider` keep the vertical slice runnable.
- `OllamaAIProvider` is ready for `http://localhost:11434` and `gemma3:27b`.
- `FondyPaymentProvider` is a skeleton and reads configuration from environment variables.
