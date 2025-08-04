# Instructions for GitHub Copilot

## Coding standards

* Use closures over classes
* Utilize type inference in return types, except for functions with multiple return statements
* Use utility types to derive types from constants
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