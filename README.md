# React Template

Modern React setup with TypeScript, Vite, and Tailwind CSS v4.

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

## Stack

- **React 19** with TypeScript
- **Vite** - Fast build tool
- **Tailwind CSS v4** - Utility-first CSS
- **Vitest** - Unit testing
- **ESLint & Prettier** - Code quality
- **Husky** - Git hooks

## Quality Checks

```bash
npm run test:coverage-report  # Test coverage
npm run duplication-check     # Find duplicate code
npm run depcheck             # Find unused dependencies
npm run vulnerability_retirejs # Security scan
npm run vulnerability_auditjs  # OSS vulnerability check
```

## Project Structure

```
src/
├── components/
├── App.tsx
└── main.tsx
```

## Notes

- Module Federation ready via `@module-federation/vite`
- Pre-commit hooks enabled with Husky
- Jest-DOM matchers included for testing
