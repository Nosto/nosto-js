# Tagging Provider

---

## What is Tagging Provider?

- Provides product/page metadata to Nosto
- Essential for Session API implementations
- Returns structured data about current page context
- Enables accurate tracking and recommendations

---

## Why Tagging Provider?

**Traditional Approach:**
- Static HTML tags in page markup
- Hard to maintain in SPAs
- Requires page reloads

**Tagging Provider:**
- Dynamic data provision
- JavaScript-based
- Perfect for modern web apps
- Integrates seamlessly with Session API

---

## When to Use

**Use Tagging Provider when:**
- Building Single-Page Applications
- Using Session API
- Product data changes dynamically
- Custom page architectures

**Not needed when:**
- Using traditional page tagging
- Static HTML implementation
- Server-side rendering with static tags

---

## Setting Up Tagging Provider

Basic implementation:

```javascript
nostojs(api => {
  api.setTaggingProvider({
    provider: () => {
      return {
        // Return page and product data
        page: getPageData(),
        products: getProductData()
      };
    }
  });
});
```

**Key Point:** Set up before calling Session API methods

---

## Page Types

Tagging Provider must identify page context:

- **Front Page** - Homepage
- **Product Page** - Product detail view
- **Category Page** - Product listing/category
- **Search Page** - Search results
- **Cart Page** - Shopping cart
- **Order Page** - Checkout confirmation
- **Not Found** - 404 pages

---

## Front Page Tagging

```javascript
nostojs(api => {
  api.setTaggingProvider({
    provider: () => {
      return {
        page: {
          type: 'front'
        }
      };
    }
  });
  
  api.defaultSession()
    .viewFrontPage()
    .update();
});
```

**Simple and straightforward** - minimal data needed

---

## Product Page Tagging

```javascript
nostojs(api => {
  api.setTaggingProvider({
    provider: () => {
      return {
        page: {
          type: 'product'
        },
        products: [getCurrentProduct()]
      };
    }
  });
  
  api.defaultSession()
    .viewProduct(productId)
    .update();
});
```

---

## Product Data Structure

Complete product object:

```javascript
{
  product_id: "12345",
  name: "Men's Running Shoe",
  image_url: "https://example.com/image.jpg",
  price: 99.99,
  list_price: 129.99,
  price_currency_code: "EUR",
  availability: "InStock",
  categories: ["/Men/Shoes", "/Men/Athletic"],
  description: "Comfortable running shoe...",
  brand: "Nike",
  url: "https://example.com/products/12345",
  tags1: ["sport", "running"],
  custom_fields: {
    size: ["9", "10", "11"],
    color: ["black", "blue"]
  }
}
```

---

## Category Page Tagging

```javascript
nostojs(api => {
  api.setTaggingProvider({
    provider: () => {
      return {
        page: {
          type: 'category'
        },
        category: {
          category: getCurrentCategory(),
          products: getCategoryProducts()
        }
      };
    }
  });
  
  api.defaultSession()
    .viewCategory(categoryPath)
    .update();
});
```

---

## Search Page Tagging

```javascript
nostojs(api => {
  api.setTaggingProvider({
    provider: () => {
      return {
        page: {
          type: 'search'
        },
        search: {
          query: getSearchQuery(),
          products: getSearchResults()
        }
      };
    }
  });
  
  api.defaultSession()
    .viewSearch(searchQuery)
    .update();
});
```

---

## Cart Page Tagging

```javascript
nostojs(api => {
  api.setTaggingProvider({
    provider: () => {
      return {
        page: {
          type: 'cart'
        },
        cart: {
          items: getCartItems()
        }
      };
    }
  });
  
  api.defaultSession()
    .setCart(getCartData())
    .viewCart()
    .update();
});
```

---

## Order Confirmation Tagging

```javascript
nostojs(api => {
  api.setTaggingProvider({
    provider: () => {
      return {
        page: {
          type: 'order'
        },
        order: getPurchaseOrder()
      };
    }
  });
  
  api.defaultSession()
    .setPurchasedOrder(orderData)
    .update();
});
```

---

## Customer Data in Provider

Include logged-in customer information:

```javascript
nostojs(api => {
  api.setTaggingProvider({
    provider: () => {
      const data = {
        page: { type: 'front' }
      };
      
      const customer = getCurrentCustomer();
      if (customer) {
        data.customer = {
          customer_reference: customer.id,
          email: customer.email,
          first_name: customer.firstName,
          last_name: customer.lastName
        };
      }
      
      return data;
    }
  });
});
```

---

## Dynamic Updates

Update provider when data changes:

```javascript
// Initial setup
nostojs(api => {
  api.setTaggingProvider({
    provider: () => getPageData()
  });
});

// Later, when navigating to new page
function onRouteChange(newRoute) {
  // Provider automatically called on next update
  nostojs(api => {
    api.defaultSession()
      .viewProduct(newRoute.productId)
      .update();
  });
}
```

**Key:** Provider function called each time `.update()` is invoked

---

## Multiple Products

For category/search pages with multiple products:

```javascript
nostojs(api => {
  api.setTaggingProvider({
    provider: () => {
      return {
        page: { type: 'category' },
        category: {
          category: "/men/shirts",
          products: [
            { product_id: "101", name: "Shirt 1", ... },
            { product_id: "102", name: "Shirt 2", ... },
            { product_id: "103", name: "Shirt 3", ... }
          ]
        }
      };
    }
  });
});
```

**Limit:** Include visible products, not entire catalog

---

## Handling Variations

For products with SKU variations:

```javascript
{
  product_id: "shoe-123",
  name: "Running Shoe",
  skus: [
    {
      id: "shoe-123-size-9",
      name: "Running Shoe - Size 9",
      price: 99.99,
      availability: "InStock",
      custom_fields: {
        size: "9",
        color: "black"
      }
    },
    {
      id: "shoe-123-size-10",
      name: "Running Shoe - Size 10", 
      price: 99.99,
      availability: "OutOfStock",
      custom_fields: {
        size: "10",
        color: "black"
      }
    }
  ]
}
```

---

## Custom Fields

Extend product data with custom attributes:

```javascript
{
  product_id: "12345",
  name: "Product Name",
  // ... standard fields
  custom_fields: {
    material: "cotton",
    eco_friendly: true,
    collection: "summer-2024",
    sizes: ["S", "M", "L", "XL"]
  },
  tags1: ["new", "sale"],
  tags2: ["featured"],
  tags3: ["limited-edition"]
}
```

**Use Cases:**
- Custom filtering
- Advanced segmentation
- Business-specific attributes

---

## Availability States

Correctly tag product availability:

```javascript
{
  product_id: "12345",
  availability: "InStock",  // or "OutOfStock", "Discontinued"
  // ...
}
```

**Impact:**
- Recommendations only show in-stock products by default
- Out-of-stock items can be filtered
- Discontinued items can be excluded

---

## Price and Currency

Always include accurate pricing:

```javascript
{
  product_id: "12345",
  price: 79.99,              // Current price
  list_price: 99.99,         // Original/list price (optional)
  price_currency_code: "EUR" // ISO 4217 code
}
```

**Benefits:**
- Enables price-based recommendations
- Shows discounts automatically
- Supports multi-currency

---

## Image URLs

Provide high-quality product images:

```javascript
{
  product_id: "12345",
  image_url: "https://cdn.example.com/products/12345.jpg",
  alternate_image_urls: [
    "https://cdn.example.com/products/12345-alt1.jpg",
    "https://cdn.example.com/products/12345-alt2.jpg"
  ]
}
```

**Best Practices:**
- Use HTTPS
- Use CDN URLs
- Square images work best

---

## Categories and Breadcrumbs

Use consistent category paths:

```javascript
{
  product_id: "12345",
  categories: [
    "/Men/Clothing/Shirts",
    "/Men/Clothing/Shirts/Casual",
    "/Sale/Men"
  ],
  category: "/Men/Clothing/Shirts" // Primary category
}
```

**Format:**
- Start with `/`
- Use hierarchy
- Consistent naming

---

## Integration with State Management

**React Example:**

```javascript
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function ProductPage({ productId }) {
  const product = useSelector(state => 
    state.products.byId[productId]
  );
  
  useEffect(() => {
    nostojs(api => {
      api.setTaggingProvider({
        provider: () => ({
          page: { type: 'product' },
          products: [product]
        })
      });
      
      api.defaultSession()
        .viewProduct(productId)
        .update();
    });
  }, [productId, product]);
}
```

---

## Integration with Vue.js

**Vue 3 Composition API:**

```javascript
import { watch, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const product = computed(() => 
      store.state.currentProduct
    );
    
    watch(product, (newProduct) => {
      nostojs(api => {
        api.setTaggingProvider({
          provider: () => ({
            page: { type: 'product' },
            products: [newProduct]
          })
        });
        
        api.defaultSession()
          .viewProduct(newProduct.product_id)
          .update();
      });
    });
  }
};
```

---

## Error Handling

Graceful error handling in provider:

```javascript
nostojs(api => {
  api.setTaggingProvider({
    provider: () => {
      try {
        const pageData = getPageData();
        
        if (!pageData) {
          console.warn('No page data available');
          return { page: { type: 'other' } };
        }
        
        return pageData;
      } catch (error) {
        console.error('Tagging provider error:', error);
        return { page: { type: 'other' } };
      }
    }
  });
});
```

---

## Debugging Tagging Provider

Check what data is being sent:

```javascript
nostojs(api => {
  api.setTaggingProvider({
    provider: () => {
      const data = getPageData();
      console.log('Tagging Provider Data:', data);
      return data;
    }
  });
});
```

**Tools:**
- Browser console
- Nosto Debug Extension
- Network tab (check requests)

---

## Best Practices

✅ Keep provider function pure (no side effects)
✅ Return data synchronously
✅ Include only current page data
✅ Use consistent field names
✅ Validate data before returning

❌ Don't make API calls in provider
❌ Don't return entire catalog
❌ Don't mutate global state
❌ Don't skip required fields

---

## Performance Tips

**Efficient Data Retrieval:**

```javascript
// Good - retrieve once
const pageData = getCurrentPageData();
nostojs(api => {
  api.setTaggingProvider({
    provider: () => pageData
  });
});

// Avoid - recalculating every time
nostojs(api => {
  api.setTaggingProvider({
    provider: () => expensiveDataCalculation()
  });
});
```

**Cache when possible!**

---

## Testing Tagging Provider

```javascript
// Test helper
function testTaggingProvider() {
  nostojs(api => {
    api.setTaggingProvider({
      provider: () => {
        const data = getPageData();
        
        // Validate structure
        if (!data.page || !data.page.type) {
          throw new Error('Invalid page data');
        }
        
        return data;
      }
    });
  });
}
```

---

## Migration from Page Tags

Converting static tags to Tagging Provider:

**Before (HTML tags):**
```html
<div class="nosto_product">
  <span class="product_id">12345</span>
  <span class="name">Product Name</span>
  <span class="price">99.99</span>
</div>
```

**After (Tagging Provider):**
```javascript
provider: () => ({
  products: [{
    product_id: "12345",
    name: "Product Name",
    price: 99.99
  }]
})
```

---

## Common Pitfalls

**Mistake 1:** Not updating provider for route changes
**Solution:** Set provider in route change handler

**Mistake 2:** Returning stale data
**Solution:** Ensure data retrieval is current

**Mistake 3:** Missing required fields
**Solution:** Validate against schema

**Mistake 4:** Asynchronous data retrieval
**Solution:** Provider must be synchronous

---

## Resources

- [Nosto JS Library](https://github.com/Nosto/nosto-js)
- [TypeDoc Documentation](https://nosto.github.io/nosto-js/)
- [Session API Guide](https://docs.nosto.com/techdocs/apis/frontend/implementation-guide-session-api/)
- [Product API Reference](https://docs.nosto.com/techdocs/apis/rest/products/)

---

## Questions?

Thank you!
