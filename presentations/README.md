# Nosto JS Presentations

This directory contains Reveal.js-based presentations covering key aspects of the Nosto JS library.

## Presentations

### 1. Session API
Learn how to implement Nosto's Session API for Single-Page Applications (SPAs) and Progressive Web Apps (PWAs). This presentation covers:
- Session management
- Cart and customer tracking
- Event tracking
- Placement handling
- Multi-currency support
- Attribution tracking

**File:** `session-api.html`

### 2. Tagging Provider
Understand how to provide product and page metadata dynamically using the Tagging Provider pattern. Topics include:
- Setting up Tagging Provider
- Page type identification
- Product data structure
- Dynamic updates
- Integration with state management
- Best practices and debugging

**File:** `tagging-provider.html`

### 3. Programmatic Search API
Master Nosto's Search API to build custom search experiences. This presentation covers:
- Basic and advanced search
- Faceted filtering
- Sorting and pagination
- Autocomplete implementation
- Search JS library features
- Performance optimization

**File:** `programmatic-search-api.html`

## Viewing the Presentations

### Option 1: Using npm script (Recommended)
```bash
npm run presentations
```

Then open your browser to `http://localhost:3000/presentations/`

### Option 2: Using any HTTP server
```bash
# Using Python 3
python -m http.server 3000

# Using Node.js http-server
npx http-server -p 3000
```

Then navigate to `http://localhost:3000/presentations/`

### Option 3: Direct file access
Open the HTML files directly in your browser. However, some browsers may block loading of markdown files due to CORS restrictions when using `file://` protocol. Using an HTTP server is recommended.

## Navigation

- **Arrow Keys** or **Space**: Navigate between slides
- **F**: Enter fullscreen mode
- **S**: Open speaker notes (if available)
- **O** or **Esc**: Toggle overview mode
- **?**: Show keyboard shortcuts

## Technology

These presentations are built using:
- [Reveal.js](https://revealjs.com/) - HTML presentation framework
- Markdown - Slide content format
- Syntax highlighting - Code examples

## Customization

Each presentation uses the "black" theme by default. To customize:
1. Edit the HTML file for the presentation
2. Change the theme in the `<link>` tag (available themes: black, white, league, beige, sky, night, serif, simple, solarized)
3. Modify the custom CSS in the `<style>` section

## References

- [Nosto JS Library](https://github.com/Nosto/nosto-js)
- [Nosto Documentation](https://docs.nosto.com/techdocs/)
- [TypeDoc Documentation](https://nosto.github.io/nosto-js/)
- [Reveal.js Documentation](https://revealjs.com/)
