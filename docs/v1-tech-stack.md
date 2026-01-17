# Fashion Ecommerce App – v1 Tech Stack

This document defines the finalized technology choices for v1.
These decisions are frozen unless a scope-change issue is raised.

---

## Frontend
- Next.js (React)
- App Router
- Tailwind CSS
- Mobile-first design

## Backend
- Next.js API routes (monolithic)
- Node.js runtime

## Database
- PostgreSQL

## ORM
- Prisma

## Authentication
- Email + password
- OAuth (Google) – optional later

## Payments
- Stripe (online payments only)

## File Uploads
- Product images
- Bulk product upload (CSV / Excel)

## Hosting
- Vercel (web app)
- Managed PostgreSQL (Neon / Supabase)

## Versioning
- v1 focuses on correctness and simplicity
- No premature optimization
