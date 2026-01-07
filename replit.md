# BNI Korea Member Onboarding

## Overview

A member onboarding resource hub for BNI Korea, providing new members with organized access to essential links and tools. This is a single-page application that serves as an internal utility tool, not a marketing site - focused on clarity and efficient resource access rather than promotional content.

The application displays categorized resource cards linking to external BNI systems including membership payment, global connect, business tools, training programs, and social media channels. All content is in Korean with supporting English elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **Build Tool**: Vite with HMR support

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Static Serving**: Express serves built frontend assets in production

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Storage Pattern**: Abstract `IStorage` interface with `MemStorage` implementation (can be swapped for database-backed storage)

### Project Structure
```
client/           # React frontend
  src/
    components/ui/  # shadcn/ui components
    pages/          # Page components
    hooks/          # Custom React hooks
    lib/            # Utility functions
server/           # Express backend
  routes.ts       # API route definitions
  storage.ts      # Data access layer
shared/           # Shared types and schemas
  schema.ts       # Drizzle schema definitions
```

### Design System
- Material Design approach with professional adaptations
- Single-page layout with max-width `max-w-5xl`
- Resource cards in responsive grid (1 column mobile, 2 columns desktop)
- Korean-English font stack with system fonts and Noto Sans KR

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migrations and schema push

### UI Components
- **Radix UI**: Headless component primitives (dialog, dropdown, tabs, etc.)
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant styling

### Build & Development
- **Vite**: Frontend bundling and dev server
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal`: Error overlay
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development banner