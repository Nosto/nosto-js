# Nosto JS

Nosto JS is a wrapper for the client script, providing an easy way to interact with the Nosto service from your JavaScript or TypeScript applications.

For more information about JS API, see [Our documentation](https://docs.nosto.com/techdocs/apis/frontend/js-apis).

## Installation

To install the package, use your preferred package manager:

```bash
yarn add @nosto/nosto-js
# or
npm install @nosto/nosto-js --save
```

## Modules

| Module | Description |
|-|-|
| . | Core functionality |
| ./client | Client Script types |
| ./performance | Performance tracking utils |
| ./testing | Mocking utils |

## Documentation

Read [Nosto Techdocs](https://docs.nosto.com/techdocs/apis/frontend/oss/nosto-js) for more information on how to use the library.

[Library TypeDoc page](https://nosto.github.io/nosto-js/) includes detailed library helpers documentation and examples.

## Presentations

Interactive presentations covering key topics are available in the [presentations](./presentations/) directory:

- **Session API** - Learn how to implement Nosto's Session API for SPAs and PWAs
- **Tagging Provider** - Understand how to provide product and page metadata dynamically
- **Programmatic Search API** - Master Nosto's Search API to build custom search experiences

To view the presentations locally, run:

```bash
npm run presentations
```