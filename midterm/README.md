# Web Technologies (CSC336) - Lab Mid Term

**Name:** Mahum Riaz
**Roll number:** FA24-BCS-049

| Value | Formula | Result |
|---|---|---|
| N | last two digits of roll number | **49** |
| BP | 600 + N | **649px** |
| H | (N x 7) mod 360 | **343** -> accent `hsl(343, 70%, 45%)` |
| K | (N mod 3) + 3 | **4** categories (Face, Eyes, Lips, Cheeks) |
| Sticky top | (N mod 40) + 70 | **79px** |
| Premium limit | N x 100 | **Rs. 4,900** |

## Files changed
- `index.html` - filter radios, `category-*` classes on the cards, search box, sort button, "No products found" message, script link, and one price changed
- `product.html` - new Grid structure (image / details / description areas) and a longer description
- `style.css` - filter styles, product page grid and sticky box, search/sort/Premium styles
- `script.js` (new) - search, sort and Premium label
- `README.md` (new)

## Task 1 - CSS-only category filter
- Gave every product card a category class (`category-face`, `category-eyes`, `category-lips`, `category-cheeks`) and added 5 radio buttons (All + 4 categories) above the grid. "All" is checked on load.
- `.shop-section:has(#filter-xxx:checked) .product-grid .product-col:not(.category-xxx) { display: none; }` hides the other cards as whole Bootstrap columns, so there are no gaps. The checked label uses the accent colour `hsl(343, 70%, 45%)`.

## Task 2 - Product page grid with sticky box
- Rebuilt the layout of `product.html` with CSS Grid and `grid-template-areas`: image / details / description stacked below 649px, and "image details / description description" from 649px up.
- From 649px the details box uses `position: sticky; top: 79px`. The description was made long enough to scroll and the image taller so the sticky effect is visible.

## Task 3 - JavaScript search and sort
- `script.js` reads names and prices from the existing cards. The search box filters by name (not case-sensitive) together with the category filter, and shows "No products found" in place of the grid when nothing matches.
- The "Sort by price" button toggles lowest-to-highest / highest-to-lowest by moving the existing cards with `appendChild`. Products above Rs. 4,900 get a "Premium" label when the page loads. Product 5's price was changed to Rs. 5,499 so the label shows.

## AI tools used
Claude (Anthropic), ChatGPT
