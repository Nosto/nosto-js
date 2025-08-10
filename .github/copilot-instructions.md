# Instructions for GitHub Copilot

## Coding standards

* Use closures over classes
* Utilize type inference in return types, except for functions with multiple return statements
* Use utility types to derive types from constants
* Avoid 'any' type usage
* Use const (and let) over var
* Use async/await instead of Promise chaining
* Use individual named exports over bulk exports
* Favor named exports over default exports

## Testing

* Use vitest as the test framework 
* Use 'describe' and 'it' for test structure
* Use 'beforeEach' for setup
* Use 'afterEach' for cleanup
* Use 'expect' for assertions

## Build

* `npm ci` - Install dependencies (preferred over `npm install` for CI/CD and clean installs)
* `npm run build` - Main build script: compiles TypeScript, bundles with Vite, generates declaration files, and creates documentation
* `npm run lint` - Run ESLint to check code quality and style
* `npm run lint-fix` - Run ESLint with auto-fix to automatically resolve linting issues (run before commit)
* `npm test` - Run test suite with vitest including coverage reporting
