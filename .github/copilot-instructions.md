# Instructions for GitHub Copilot

**ALWAYS follow these instructions first and fallback to additional search and context gathering only if the information here is incomplete or found to be in error.**

## Nosto JS Library

Nosto JS is a TypeScript wrapper library for the Nosto client script, providing an easy way to interact with the Nosto service from JavaScript or TypeScript applications. It builds to multiple module formats (ESM, CJS) and includes comprehensive TypeScript type definitions.

## Bootstrap and Build Process

**CRITICAL**: All build and test commands are FAST in this repository. Do not expect long build times.

### Install Dependencies
```bash
npm ci
```
- Takes ~55 seconds to complete
- Use `npm ci` over `npm install` for clean, reproducible builds
- May show 2 moderate security vulnerabilities (acceptable for dev dependencies)

### Build Commands and Timing
```bash
npm run build
```
- **Takes ~7 seconds** - Set timeout to 30+ seconds minimum
- Full build pipeline: TypeScript compilation + Vite bundling + declaration files + TypeDoc generation
- Outputs to `./dist/` directory with ESM (.es.js) and CJS (.cjs.js) formats
- Generates TypeScript declarations (.d.ts files)
- Creates documentation in `./docs/` directory

### Individual Build Steps
```bash
npm run build-dts     # Generate TypeScript declarations only (~2 seconds)
npm run typedoc       # Generate documentation only (~4 seconds)
```

## Testing

### Run Test Suite
```bash
npm test
```
- **Takes ~4 seconds** - Set timeout to 30+ seconds minimum  
- Runs Vitest with coverage reporting
- 35 tests across 9 test files
- Coverage thresholds: 80% statements, branches, and lines
- Uses jsdom environment for DOM testing

### Test Structure
- Use vitest as the test framework
- Use 'describe' and 'it' for test structure  
- Use 'beforeEach' for setup, 'afterEach' for cleanup
- Use 'expect' for assertions
- Tests located in `./test/` directory

## Code Quality

### Linting
```bash
npm run lint          # Check code quality (~2 seconds)
npm run lint-fix      # Auto-fix issues (~2 seconds)
```
- **Both take ~2 seconds** - Set timeout to 30+ seconds minimum
- Uses ESLint with TypeScript, Prettier, and barrel-files plugins
- **ALWAYS run `npm run lint-fix` before committing changes**

### Code Standards
- Use closures over classes
- Utilize type inference in return types, except for functions with multiple return statements
- Use utility types to derive types from constants
- Avoid 'any' type usage
- Use const (and let) over var
- Use async/await instead of Promise chaining
- Use individual named exports over bulk exports
- Favor named exports over default exports

## Development and Testing

### Manual Validation Scenarios
**ALWAYS test these scenarios after making changes:**

1. **Library Build Validation**:
   ```bash
   npm run build && ls -la dist/
   ```
   - Verify all module formats are generated: index.es.js, index.cjs.js, *.d.ts files

2. **Type Safety Check**:
   ```bash
   npx tsc --noEmit
   ```
   - Verify no TypeScript compilation errors

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

### Important Files
- `package.json` - Dependencies and build scripts
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Build and test configuration  
- `eslint.config.js` - Linting rules
- `.github/workflows/ci.yml` - CI pipeline
- `.husky/commit-msg` - Git hooks for conventional commits

### Module Exports
The library provides multiple entry points:
- `.` - Core functionality (init, nostojs, helpers)
- `./client` - TypeScript definitions for Nosto client API
- `./performance` - Performance measurement utilities  
- `./testing` - Mocking and testing utilities

## Common Development Tasks

### Making Changes to Core Library
1. Edit files in `src/lib/` or `src/`
2. Run `npm run lint-fix` to fix code style
3. Run `npm test` to verify tests pass
4. Run `npm run build` to verify clean build
5. Test demo app with `npm run dev`

### Adding New Tests
1. Create `.spec.ts` files in `./test/` directory
2. Follow existing test patterns using vitest
3. Run `npm test` to verify tests pass and coverage

### Before Committing Changes
**ALWAYS run this validation sequence:**
```bash
npm run lint-fix      # Fix code style (~2 seconds)
npm test              # Run tests (~4 seconds)  
npm run build         # Verify clean build (~7 seconds)
npm run dev           # Test demo functionality
```

## CI Pipeline Validation
The GitHub Actions CI pipeline runs:
1. Node.js 22 setup
2. `npm ci` - dependency installation
3. `npm run build` - full build
4. `npm run test` - test suite
5. `npm run lint` - code quality check

**Ensure all these commands pass locally before pushing changes.**

## Commits and Git Hooks

### Commit Format
- Use conventional commits: `<type>(<scope>): <subject>`
- Examples: `feat(api): add new helper function`, `fix(build): resolve TypeScript error`
- Husky enforces conventional commit format via commitlint

### Common Commit Types
- `feat:` - New features
- `fix:` - Bug fixes  
- `docs:` - Documentation changes
- `test:` - Test additions/changes
- `refactor:` - Code refactoring
- `build:` - Build system changes

## Troubleshooting

### Build Issues
- Clean build: `rm -rf dist/ && npm run build`
- Clean install: `rm -rf node_modules/ package-lock.json && npm ci`

### Test Issues  
- Clear coverage: `rm -rf coverage/ && npm test`
- Run specific test: `npx vitest test/filename.spec.ts`

### Demo Issues
- Check import paths in `demo/` files
- Verify TypeScript compilation with `npx tsc --noEmit`
- Check browser console for runtime errors

### Known Issues
- 2 moderate npm security vulnerabilities in dev dependencies (acceptable)
- TypeDoc generates warnings for client API documentation (non-blocking)
- Demo may show "ERR_BLOCKED_BY_CLIENT" in restricted environments (expected)

## GitHub Action Plugins – Review Checklist

When reviewing pull requests that add or update GitHub Action plugins, Copilot should check each item and output this checklist in its review comment or summary.  
If scan results are not yet available, mark as pending and update after results are attached or after invoking `@copilot` for scanning.

- **Pinning:**
  - [ ] Are all GitHub Actions pinned to a specific commit SHA (not a tag such as `@v3`, `@main`, or `@latest`)?
- **Vulnerability Scanning:**
  - [ ] Has a vulnerability scan been performed for each new/updated Action SHA?
    - If not available, mark as ⬜ Pending.
- **No Critical Vulnerabilities:**
  - [ ] Has it been confirmed that no Action at the specified SHA has critical vulnerabilities?
    - If not available, mark as ⬜ Pending.

**Note:** If a SHA for a plugin was previously scanned in a Nosto repo `[Nosto/REPO]`, you may reference that result here.
