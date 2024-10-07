# NostoJS SDK

NostoJS is a wrapper for the client script, providing an easy way to interact with the Nosto service from your JavaScript or TypeScript applications.

For more information about JS API, see (https://docs.nosto.com/techdocs/apis/frontend/js-apis)[Our documentation].

## Installation

To install the package, use your preferred package manager:

```bash
yarn add nosto-js
# or
npm install nosto-js --save
```

## Nosto stub

When using this SDK, it is not necessary to create the Nosto stub. It will be created automatically as soon as the SDK is imported for the first time.

## Initialization

The `init` function will load the latest version of the client script and add it to your page on runtime.

```js
await init({
  merchantId: "shopify-12345"
})
```

It returns a promise that resolves when the client script is fully loaded and initialized. However, awaiting it is optional.

## API access

Use the `nostojs` function exported from the SDK in the same way you would use `window.nostojs`. In fact, this is a typed wrapper over the window function.

```js
await nostojs(async api => {
  const recommendations = await api.loadRecommendations()
  console.info(recommendations)
})
```

You may safely use this even before the `init` function has been called. Any early calls will be queued and processed later, when the client script is initialized.