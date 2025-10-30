MAMCG.Frontend
A modern, scalable React.js front-end for MAM CG, built with TypeScript, Vite, Tailwind CSS, and best practices for enterprise-grade apps.

🚀 Features
React 19 + TypeScript: Fast, type-safe, and reliable SPA framework.

Blazing-fast Vite dev/build tooling.

Modern UI: Tailwind CSS 4, shadcn/ui (Radix-based), Lucide icons.

State Management: TanStack Query (remote state), Zustand (global state).

Type-safe Routing: Powered by TanStack Router.

Modular, Feature-Based Architecture: Clean separation of concerns for maintainability.

Reusable UI Components: Shared and domain-specific primitives, accessible by design.

Forms & Validation: React Hook Form and Zod integration.

CI/CD & Docker: GitHub Actions for automation, Docker & Compose for deploy-ready workflows.

Robust Dev Tooling: ESLint, Prettier, Husky, TypeScript strict mode, lint-staged.

Extensible & Testable: Easily add, test, and maintain features.

🧑‍💻 Tech Stack
Framework: React 19, Vite 7

Language: TypeScript (strict mode)

UI: Tailwind CSS v4, shadcn/ui, Lucide icons

State/Data: TanStack Query, Zustand

Routing: TanStack Router

Tooling: ESLint, Prettier, Husky, Docker, GitHub Actions

APIs: RESTful backend (Axios abstraction)

Forms: React Hook Form, Zod

Notifications: Sonner, React Top Loading Bar

🏗️ Project Structure
text
src/
  ├─ api/         # API configs and service calls
  ├─ assets/      # Static and design assets
  ├─ components/  # App-wide UI primitives
  ├─ config/      # App config and constants
  ├─ context/     # React context providers
  ├─ features/    # Business feature modules (dashboard, auth, etc.)
  ├─ hooks/       # Custom React hooks
  ├─ interface/   # TypeScript interfaces/types
  ├─ lib/         # Utilities, helpers, shared logic
  ├─ routes/      # Route tree and config
  ├─ shared/      # Reusable shared UI
  ├─ stores/      # Zustand stores (e.g., auth-store)
  ├─ styles/      # Global/app styles
  ├─ utils/       # Utility functions
  ├─ App.tsx      # App root
  ├─ main.tsx     # Entry point
⚡ Getting Started
Prerequisites
Node.js LTS (v20+)

Yarn

Installation
bash
git clone https://github.com/vtvms01/MAMCG.Frontend.git
cd MAMCG.Frontend
yarn install
Environment Setup
Create .env at the root:

text
VITE_API_BASE_URL=http://localhost:5000
Develop
bash
yarn dev
Build
bash
yarn build
Lint, Format, Typecheck
bash
yarn lint         # ESLint
yarn format       # Prettier
yarn typecheck    # TypeScript
Test (Pending setup)
bash
yarn test
(Update this with your preferred test runner/instructions)

🔌 API Integration
Communicates with a REST API backend.

Configure API endpoint base URL in .env.

🐳 Docker
Build and run with Docker Compose:

bash
docker-compose up --build
🔥 Deployment
Supports CI/CD via GitHub Actions (.github/workflows)

Recommended targets: Vercel, Netlify, or custom Docker host.

👨‍👩‍👧‍👦 Contributing
Fork the repository and create your feature branch

Run yarn lint && yarn typecheck before committing

Submit a pull request and describe your changes

📝 License
© 2025 VTVBroadcom Media & Solution. All rights reserved.

🙌 Acknowledgments
React, Vite, shadcn/ui, Radix UI, Tailwind CSS

For any questions or issues, please create an issue on GitHub or contact the maintainer.