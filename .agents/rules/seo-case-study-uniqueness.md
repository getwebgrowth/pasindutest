# SEO Case Study Uniqueness & Anti-Duplicate Content Rule

## 1. Zero-Boilerplate Invariant
- NEVER use identical template sentences across multiple case studies (e.g., "is an enterprise-grade software deliverable engineered by...").
- Every single `.mdx` case study MUST have a completely distinct introductory hook, authentic client problem description, and bespoke technical challenges.

## 2. Domain-Specific System Architectures
- ASCII architecture diagrams must accurately reflect the specific data flow of that tool (e.g. OCR canvas pipelines for trading tools, multi-iframe selectors for logistics bots, WebAssembly video muxers for media tools, BIP39 derivation trees for crypto tools).
- Never copy-paste generic ASCII diagrams across different projects.

## 3. Extractable FAQs & AEO Standards
- FAQ sections must answer questions specific to that project's industry or domain, avoiding identical generic Q&A text.
- Maintain 40–60 word quotable passages for Google AI Overviews and Perplexity search citations.

## 4. Local Server Port Invariant
- Always run local dev servers on port 3000 (`next dev -p 3000`) and clean `.next/dev/lock` automatically on startup.
