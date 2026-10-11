# Antique9ja Architecture

Antique9ja uses a monorepo so the frontend, backend, and shared code live in one GitHub repository.

## Request Flow

```text
Browser
  |
  | HTTP request
  v
React frontend
  |
  | fetch()
  v
Express API
  |
  | later: Prisma
  v
PostgreSQL
```

## Modules

The backend will be organized by business feature:

```text
auth
users
products
cart
orders
admin
payments
```

Each backend module will eventually have:

```text
routes       URL definitions
controller   request and response logic
service      business logic
validation   input validation
```

The frontend will also be organized by feature:

```text
auth
products
cart
checkout
orders
admin
```

This keeps the project understandable as it grows.
