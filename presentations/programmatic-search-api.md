# Programmatic Search API

---

## What is Programmatic Search?

- Direct API access to Nosto Search functionality
- Query Nosto's product catalog programmatically
- Build custom search experiences
- Integrate search into any part of your application

---

## Why Programmatic Search?

**Traditional Search:**
- Limited customization
- Fixed UI components
- Basic filtering

**Programmatic Search:**
- Full control over UI/UX
- Custom filtering logic
- Advanced search features
- Seamless integration with your design

---

## Prerequisites

- Nosto account with Search enabled
- Product catalog synced with Nosto
- Nosto script loaded on page
- Modern browser with Promise support

---

## Two Approaches

### 1. Nosto JS API (Native)
Built-in search functionality

### 2. Search JS Library
Enhanced wrapper with extras:
- Currency formatting
- Thumbnail optimization
- Retry logic
- TypeScript support

---

## Native JS API - Basic Search

```javascript
nostojs(api => {
  api.search({
    query: "running shoes",
    products: {
      fields: ["productId", "name", "price", "imageUrl"]
    }
  }).then(response => {
    console.log(response.hits);
    // Display results
  });
});
```

**Simple and straightforward!**

---

## Search Response Structure

```javascript
{
  hits: [
    {
      productId: "12345",
      name: "Men's Running Shoe",
      price: 99.99,
      imageUrl: "https://example.com/shoe.jpg"
    },
    // ... more products
  ],
  facets: { ... },
  total: 42,
  took: 15
}
```

---

## Available Product Fields

Request specific fields:

```javascript
products: {
  fields: [
    "productId",
    "name",
    "price",
    "listPrice",
    "priceCurrencyCode",
    "imageUrl",
    "imageHash",
    "url",
    "brand",
    "availability",
    "category",
    "description",
    "customFields"
  ]
}
```

**Tip:** Request only what you need for better performance

---

## Faceted Search

Get facets for filtering:

```javascript
nostojs(api => {
  api.search({
    query: "shoes",
    products: {
      fields: ["productId", "name", "price"]
    },
    facets: {
      brand: { size: 10 },
      category: { size: 10 },
      price: {
        ranges: [
          { from: 0, to: 50 },
          { from: 50, to: 100 },
          { from: 100 }
        ]
      }
    }
  }).then(response => {
    console.log(response.facets);
  });
});
```

---

## Facet Response

```javascript
{
  facets: {
    brand: {
      terms: [
        { value: "Nike", count: 42 },
        { value: "Adidas", count: 38 },
        { value: "Puma", count: 15 }
      ]
    },
    price: {
      ranges: [
        { from: 0, to: 50, count: 20 },
        { from: 50, to: 100, count: 35 },
        { from: 100, count: 10 }
      ]
    }
  }
}
```

---

## Filtering Results

Apply filters to narrow down results:

```javascript
nostojs(api => {
  api.search({
    query: "shoes",
    products: {
      fields: ["productId", "name", "price"]
    },
    filters: {
      brand: ["Nike", "Adidas"],
      price: { from: 50, to: 150 },
      availability: ["InStock"]
    }
  });
});
```

---

## Sorting Results

Control result order:

```javascript
nostojs(api => {
  api.search({
    query: "shoes",
    products: {
      fields: ["productId", "name", "price"]
    },
    sort: {
      field: "price",
      order: "asc"  // or "desc"
    }
  });
});
```

**Sort by:**
- Price
- Name
- Relevance (default)
- Custom fields

---

## Pagination

Handle large result sets:

```javascript
nostojs(api => {
  api.search({
    query: "shoes",
    products: {
      fields: ["productId", "name", "price"],
      from: 0,    // Start index
      size: 20    // Results per page
    }
  });
});
```

**Example pagination:**
```javascript
// Page 2 (items 20-39)
from: 20, size: 20

// Page 3 (items 40-59)  
from: 40, size: 20
```

---

## Autocomplete Search

Implement search suggestions:

```javascript
function searchAutocomplete(input) {
  if (input.length < 2) return;
  
  nostojs(api => {
    api.search({
      query: input,
      products: {
        fields: ["productId", "name", "imageUrl"],
        size: 5  // Limit suggestions
      }
    }).then(response => {
      displaySuggestions(response.hits);
    });
  });
}
```

**Debounce for better performance!**

---

## Category Search

Search within specific category:

```javascript
nostojs(api => {
  api.search({
    query: "blue",
    products: {
      fields: ["productId", "name", "price"]
    },
    filters: {
      category: ["/Men/Shirts"]
    }
  });
});
```

**Use case:** Category-specific search bars

---

## Empty Query Search

Browse all products (no query):

```javascript
nostojs(api => {
  api.search({
    query: "",  // Empty query
    products: {
      fields: ["productId", "name", "price"],
      size: 20
    },
    filters: {
      availability: ["InStock"]
    }
  });
});
```

**Use case:** Product catalog browsing

---

## Search JS Library

Enhanced search wrapper:

```bash
npm install @nosto/search-js
```

```javascript
import { search } from "@nosto/search-js";
import { priceDecorator } from "@nosto/search-js/currencies";
import { thumbnailDecorator } from "@nosto/search-js/thumbnails";

const response = await search({
  query: 'shoes',
  products: {
    fields: ["productId", "name", "price", "imageUrl"]
  }
}, {
  track: 'serp',
  hitDecorators: [
    priceDecorator(),
    thumbnailDecorator({ size: "9" })
  ]
});
```

---

## Price Decorator

Automatic currency formatting:

```javascript
import { priceDecorator } from "@nosto/search-js/currencies";

const response = await search({
  query: 'shoes',
  products: { ... }
}, {
  hitDecorators: [priceDecorator()]
});

// Result includes formatted prices
response.hits[0].formattedPrice  // "$99.99"
```

**Respects user's currency settings**

---

## Thumbnail Decorator

Optimized image URLs:

```javascript
import { thumbnailDecorator } from "@nosto/search-js/thumbnails";

const response = await search({
  query: 'shoes',
  products: { ... }
}, {
  hitDecorators: [
    thumbnailDecorator({ size: "9" })  // 600x600px
  ]
});

// Result includes optimized thumbnail URL
response.hits[0].thumbnailUrl
```

**Sizes:** "2" (150x150) to "11" (1500x1500)

---

## Tracking Search Events

Track search for analytics:

```javascript
import { search } from "@nosto/search-js";

const response = await search({
  query: 'running shoes',
  products: { ... }
}, {
  track: 'serp'  // Search Results Page tracking
});
```

**Benefits:**
- Search analytics
- Popular search queries
- Zero-result tracking
- User behavior insights

---

## Error Handling

Graceful error handling:

```javascript
nostojs(api => {
  api.search({
    query: "shoes",
    products: {
      fields: ["productId", "name"]
    }
  })
  .then(response => {
    if (response.hits.length === 0) {
      showNoResultsMessage();
    } else {
      displayResults(response.hits);
    }
  })
  .catch(error => {
    console.error('Search error:', error);
    showErrorMessage();
  });
});
```

---

## Debounced Search

Optimize search-as-you-type:

```javascript
let searchTimeout;

function debounceSearch(query) {
  clearTimeout(searchTimeout);
  
  searchTimeout = setTimeout(() => {
    nostojs(api => {
      api.search({
        query: query,
        products: { ... }
      }).then(displayResults);
    });
  }, 300); // Wait 300ms after typing stops
}

searchInput.addEventListener('input', (e) => {
  debounceSearch(e.target.value);
});
```

---

## React Integration

```javascript
import { useState, useEffect } from 'react';

function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (!query) return;
    
    setLoading(true);
    nostojs(api => {
      api.search({
        query,
        products: {
          fields: ["productId", "name", "price", "imageUrl"]
        }
      }).then(response => {
        setResults(response.hits);
        setLoading(false);
      });
    });
  }, [query]);
  
  return (
    <div>
      {loading ? <Spinner /> : <ProductGrid products={results} />}
    </div>
  );
}
```

---

## Vue.js Integration

```javascript
export default {
  data() {
    return {
      query: '',
      results: [],
      loading: false
    };
  },
  watch: {
    query(newQuery) {
      if (!newQuery) return;
      
      this.loading = true;
      nostojs(api => {
        api.search({
          query: newQuery,
          products: {
            fields: ["productId", "name", "price"]
          }
        }).then(response => {
          this.results = response.hits;
          this.loading = false;
        });
      });
    }
  }
};
```

---

## Advanced Filtering

Complex filter combinations:

```javascript
nostojs(api => {
  api.search({
    query: "shoes",
    products: { ... },
    filters: {
      brand: ["Nike", "Adidas"],
      "customFields.color": ["black", "blue"],
      "customFields.size": ["9", "10"],
      price: {
        from: 50,
        to: 200
      },
      availability: ["InStock"]
    }
  });
});
```

---

## Custom Field Filtering

Filter by custom attributes:

```javascript
nostojs(api => {
  api.search({
    query: "",
    products: {
      fields: ["productId", "name", "customFields"]
    },
    filters: {
      "customFields.material": ["cotton"],
      "customFields.eco_friendly": [true],
      "customFields.collection": ["summer-2024"]
    }
  });
});
```

**Must be indexed in Nosto first**

---

## Search with Recommendations

Combine search with recommendations:

```javascript
nostojs(api => {
  // Search results
  api.search({
    query: "shoes",
    products: { ... }
  }).then(searchResults => {
    displaySearchResults(searchResults.hits);
  });
  
  // Related recommendations
  api.defaultSession()
    .viewSearch("shoes")
    .setPlacements(["search-recommendations"])
    .update()
    .then(recResponse => {
      displayRecommendations(recResponse.recommendations);
    });
});
```

---

## Zero Results Handling

Improve experience when no results found:

```javascript
nostojs(api => {
  api.search({
    query: userQuery,
    products: { ... }
  }).then(response => {
    if (response.hits.length === 0) {
      // Try alternative search
      api.search({
        query: getSuggestion(userQuery),
        products: { ... }
      }).then(altResponse => {
        if (altResponse.hits.length > 0) {
          showDidYouMean(getSuggestion(userQuery));
          displayResults(altResponse.hits);
        } else {
          showNoResults();
          showPopularProducts();
        }
      });
    } else {
      displayResults(response.hits);
    }
  });
});
```

---

## Search Performance Tips

**Optimize Performance:**

1. Request only needed fields
2. Use appropriate page sizes
3. Implement debouncing
4. Cache recent searches
5. Prefetch popular queries

```javascript
// Good
fields: ["productId", "name", "price"]

// Avoid
fields: ["*"]  // All fields
```

---

## A/B Testing Search

Test different search configurations:

```javascript
const config = isTestGroup() 
  ? { sort: { field: "relevance" } }
  : { sort: { field: "popularity" } };

nostojs(api => {
  api.search({
    query: "shoes",
    products: { ... },
    ...config
  });
});
```

---

## Multi-Language Search

Search in specific language:

```javascript
nostojs(api => {
  api.search({
    query: "chaussures",  // French
    products: {
      fields: ["productId", "name", "price"]
    },
    language: "fr"
  });
});
```

**Requires multi-language product catalog**

---

## Search Analytics

Track search performance:

```javascript
nostojs(api => {
  const startTime = Date.now();
  
  api.search({
    query: userQuery,
    products: { ... }
  }).then(response => {
    const duration = Date.now() - startTime;
    
    analytics.track('search', {
      query: userQuery,
      results: response.total,
      duration: duration
    });
    
    if (response.total === 0) {
      analytics.track('zero_results', {
        query: userQuery
      });
    }
  });
});
```

---

## Best Practices

✅ Always handle empty results
✅ Implement debouncing for autocomplete
✅ Request only necessary fields
✅ Use appropriate page sizes
✅ Track search analytics
✅ Provide filter options

❌ Don't search on every keystroke
❌ Don't request all fields
❌ Don't ignore error cases
❌ Don't forget accessibility

---

## Common Use Cases

1. **Site-wide search bar**
2. **Category filtering**
3. **Autocomplete suggestions**
4. **Faceted navigation**
5. **Product finder tools**
6. **Advanced search forms**
7. **Mobile search interfaces**

---

## Accessibility

Make search accessible:

```javascript
// Announce results to screen readers
function announceResults(count) {
  const message = count === 0 
    ? 'No results found'
    : `${count} results found`;
    
  announcer.textContent = message;
}

// ARIA attributes
<input
  type="search"
  role="searchbox"
  aria-label="Search products"
  aria-describedby="search-help"
/>
```

---

## Testing Search

```javascript
// Test helper
async function testSearch(query, expectedCount) {
  return new Promise((resolve, reject) => {
    nostojs(api => {
      api.search({
        query,
        products: {
          fields: ["productId"]
        }
      }).then(response => {
        if (response.hits.length >= expectedCount) {
          resolve(response);
        } else {
          reject(new Error(`Expected ${expectedCount}, got ${response.hits.length}`));
        }
      });
    });
  });
}
```

---

## Resources

- [Search JS Library](https://github.com/Nosto/search-js)
- [Nosto JS API](https://github.com/Nosto/nosto-js)
- [TypeDoc Documentation](https://nosto.github.io/nosto-js/)
- [Search API Guide](https://docs.nosto.com/techdocs/apis/frontend/search-js/)

---

## Questions?

Thank you!
