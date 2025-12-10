## Setup

Requirements:

- Node.js (version noted in `./tool-versions`).
- Make (GNU Make 3.81 locally).
- Bash (5.3.8(1)-release locally).

Check out `./Makefile`. Here are some example commands:

```sh
# Init project, install dependencies.
make init

# Format and Lint.
make format lint

# Run dev server.
make framework

# Build TypeScript.
make build
```

## Structure

Root directory contains package info, dependencies, and config (e.g., ESLint).

### Source

Main files located in `./src` directory:

- SQL queries are in `./src/queries.sql`.
- Node app leveraging Express in `./src/framework` directory.
- Node app without framework is not implemented (ran out of time) in
  `./src/vanilla` directory.
- Mock server to stub out S3 request located in `./src/mocks` directory.

## Improvement Ideas

- Add tests.
- Enforce response shape/style (e.g., OpenAPI/Swagger, GraphQL).
- Use client correlation IDs.
- Take measures to prevent logging of sensitive data.
- Implement retries for S3 ingestion.
- Docker/Nix/Vagrant for local dev.
