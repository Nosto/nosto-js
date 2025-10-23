# Session API

---

## What is Session API?

- Modern approach for Single-Page Applications (SPAs) and Progressive Web Apps (PWAs)
- Replaces traditional page tagging
- Dynamic tracking without page reloads
- Built for JavaScript frameworks like React, Vue.js, Angular

---

## Why Session API?

**Traditional Page Tagging:**
- Works with full page reloads
- Cannot track dynamic content changes

**Session API:**
- Tracks user interactions in real-time
- Perfect for SPA architectures
- Seamless recommendation updates

> **Important:** Cannot mix Page Tagging and Session API on the same page

---

## Prerequisites

1. Valid domain (localhost not supported)
2. Product catalog synced via Product API
3. Nosto script included on all pages

---

## Setting Up - Script Inclusion

Include in your `<head>` section:

```html
<script type="text/javascript">
  (() => {
    window.nostojs = window.nostojs || 
      (function(cb) {
        (window.nostojs.q = window.nostojs.q || []).push(cb);
      });
  })();
</script>
<script type="text/javascript">
  nostojs(api => api.setAutoLoad(false));
</script>
<script src="//connect.nosto.com/include/$accountID" async></script>
```

**Key Point:** `setAutoLoad(false)` prevents automatic initialization

---

## Key Terminology

**Session**
- Container for user's browsing state
- Manages cart, customer, and interaction data

**Action**
- Triggers data transmission to Nosto
- Examples: `update()`, `viewProduct()`, `viewCategory()`

**Placements**
- Locations where recommendations appear
- Managed programmatically in Session API

---

## Creating a Session

```javascript
nostojs(api => {
  const session = api.defaultSession();
  
  // Session is ready to use
  session.viewFrontPage().update();
});
```

**Alternative:** Create named sessions for complex apps

```javascript
nostojs(api => {
  const customSession = api.createSession();
});
```

---

## Managing Cart Content

Update cart whenever contents change:

```javascript
nostojs(api => {
  api.defaultSession()
    .setCart({
      items: [
        {
          name: "Men's Running Shirt",
          price_currency_code: "EUR",
          product_id: "181503",
          quantity: 2,
          sku_id: "181505",
          unit_price: 123.45
        }
      ]
    })
    .viewCart()
    .update();
});
```

---

## Managing Customer Data

Set customer information when user logs in:

```javascript
nostojs(api => {
  api.defaultSession()
    .setCustomer({
      customer_reference: "user_12345",
      email: "user@example.com",
      first_name: "John",
      last_name: "Doe",
      newsletter: true
    })
    .update();
});
```

**Note:** Omit customer data for anonymous visitors

---

## Tracking Events

### Product View
```javascript
nostojs(api => {
  api.defaultSession()
    .viewProduct("product-123")
    .update();
});
```

### Category View
```javascript
nostojs(api => {
  api.defaultSession()
    .viewCategory("/men/shirts")
    .update();
});
```

---

## Tracking Events (Cont.)

### Search Results
```javascript
nostojs(api => {
  api.defaultSession()
    .viewSearch("running shoes")
    .update();
});
```

### Order Confirmation
```javascript
nostojs(api => {
  api.defaultSession()
    .viewCart()
    .setPurchasedOrder(orderData)
    .update();
});
```

---

## Handling Placements

Request recommendations dynamically:

```javascript
nostojs(api => {
  api.defaultSession()
    .viewProduct("product-123")
    .setPlacements(["productpage-nosto-1", "productpage-nosto-2"])
    .update()
    .then(response => {
      response.recommendations.forEach(placement => {
        console.log(placement.products);
        // Render products in your UI
      });
    });
});
```

---

## Advanced: Multi-Currency

```javascript
nostojs(api => {
  api.defaultSession()
    .setVariation("EUR")
    .viewFrontPage()
    .update();
});
```

**Supports:**
- Multiple currencies
- Customer group pricing
- Dynamic price variations

---

## Advanced: Custom Session Handling

Opt-out of automatic session tracking:

```javascript
nostojs(api => {
  api.setOptOut(true);
  
  // Manual tracking only
  api.defaultSession()
    .viewProduct("product-123")
    .update();
});
```

**Use Cases:**
- GDPR compliance
- Custom consent management
- Selective tracking

---

## Attribution Tracking

Record when users interact with recommendations:

```javascript
// User clicks a recommendation
nostojs(api => {
  api.defaultSession()
    .recordAttribution("productpage-nosto-1", "product-456")
    .viewProduct("product-456")
    .update();
});
```

**Benefits:**
- Accurate ROI measurement
- Recommendation performance tracking
- A/B testing support

---

## Using with Nosto JS Library

Alternative to script injection:

```bash
npm install @nosto/nosto-js
```

```javascript
import { initNosto } from '@nosto/nosto-js';

const nostoClient = await initNosto({
  merchantId: 'your-account-id',
  autoLoad: false
});

nostoClient.api.defaultSession()
  .viewFrontPage()
  .update();
```

---

## Best Practices

✅ Always call `.update()` after state changes
✅ Keep cart content synchronized
✅ Handle errors with Promise `.catch()`
✅ Use named sessions for complex apps
✅ Test with real product data

❌ Don't mix Page Tagging and Session API
❌ Don't forget to sync product catalog first
❌ Don't use localhost (use valid TLD)

---

## Error Handling

```javascript
nostojs(api => {
  api.defaultSession()
    .viewProduct("product-123")
    .setPlacements(["nosto-1"])
    .update()
    .then(response => {
      // Handle success
    })
    .catch(error => {
      console.error("Nosto error:", error);
      // Fallback behavior
    });
});
```

---

## Common Patterns

**Route Change Handler (React/Vue):**
```javascript
router.afterEach((to, from) => {
  nostojs(api => {
    if (to.name === 'product') {
      api.defaultSession()
        .viewProduct(to.params.id)
        .update();
    } else if (to.name === 'category') {
      api.defaultSession()
        .viewCategory(to.path)
        .update();
    }
  });
});
```

---

## Resources

- [Nosto JS Library](https://github.com/Nosto/nosto-js)
- [Session API Documentation](https://docs.nosto.com/techdocs/apis/frontend/implementation-guide-session-api/)
- [TypeDoc Documentation](https://nosto.github.io/nosto-js/)
- [Nosto Support](https://help.nosto.com)

---

## Questions?

Thank you!
