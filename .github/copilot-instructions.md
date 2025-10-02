# Instructions for GitHub Copilot

**ALWAYS follow these instructions first and fallback to additional search and context gathering only if the information here is incomplete or found to be in error.**

## Nosto JS Library

Nosto JS is a TypeScript wrapper library for the Nosto client script, providing an easy way to interact with the Nosto service from JavaScript or TypeScript applications. It builds to multiple module formats (ESM, CJS) and includes comprehensive TypeScript type definitions.

## Repository Structure and Navigation

### Key Directories
```
src/                    # Main source code
├── lib/               # Core library functionality
│   ├── init.ts        # Nosto client script initialization 
│   ├── nostojs.ts     # Main API wrapper
│   ├── settings.ts    # Configuration management
│   ├── helpers.ts     # Utility functions
│   └── addSkuToCart.ts # E-commerce integration
├── testing/           # Testing utilities and mocks
├── client/            # TypeScript definitions for Nosto client API
├── utils/             # Shared utilities
├── performance.ts     # Performance measurement tools
└── index.ts           # Main entry point

test/                  # Test suites
demo/                  # Demo application
docs/                  # Generated TypeDoc documentation  
dist/                  # Built library outputs
```

## Before Committing Changes

**ALWAYS run this validation sequence:**
```bash
npm run lint-fix      # Fix code style (~2 seconds)
npm test              # Run tests (~4 seconds) 
```

**Ensure all these commands pass locally before pushing changes.**

## Commits and Git Hooks

### Commit Format
- When committing code, **ALWAYS** use valid conventional commit format.
- Examples: `feat(api): add new helper function`, `fix(build): resolve TypeScript error`
- Husky enforces conventional commit format via commitlint

### Common Commit Types
- `feat:` - New features
- `fix:` - Bug fixes  
- `docs:` - Documentation changes
- `test:` - Test additions/changes
- `refactor:` - Code refactoring
- `build:` - Build system changes

### Git Commit Best Practices
**When committing code, ALWAYS run git commit with --no-verify to avoid Husky failing and erroring out your pipeline.**

```bash
git commit --no-verify -m "feat: your commit message"
```

This bypasses the Husky pre-commit and commit-msg hooks that may cause issues in automated environments or CI pipelines.
