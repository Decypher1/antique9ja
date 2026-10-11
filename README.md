# Antique9ja

Antique9ja is a full-stack ecommerce learning project for antique and vintage products in Nigeria.

The goal is to build a small but impressive application that teaches frontend, backend, database, authentication, payments, and cloud deployment skills.

## App Idea

Customers can browse antique products, add items to a cart, check out, and view their orders. Admin users can manage products and update order statuses.

## Tech Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js, Express, TypeScript
- Database: PostgreSQL with Prisma
- Auth: JWT and bcrypt
- Cloud later: Vercel, Render or Railway, Neon or Supabase, Cloudinary

## Project Structure

```text
antique9ja/
  apps/
    api/      Backend API
    web/      Frontend app
  packages/
    shared/   Shared types and schemas
  docs/       Architecture and learning notes
```

## First Milestone

The first milestone is to make the full loop work:

```text
React frontend -> Express API -> shared TypeScript types
```

Then we add PostgreSQL, Prisma, products, authentication, cart, checkout, admin tools, and cloud deployment.

## Local Development

Install dependencies:

```bash
npm install
```

Run the API:

```bash
npm run dev:api
```

Run the frontend:

```bash
npm run dev:web
```
