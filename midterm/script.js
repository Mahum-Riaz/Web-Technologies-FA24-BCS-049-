// Midterm Task 3 - plain JavaScript, works on the product cards already in the page.
const N = 49;
const PREMIUM_LIMIT = N * 100;                 // 4900

const grid = document.querySelector('.product-grid');
const cards = Array.from(grid.querySelectorAll('.product-col'));
const searchBox = document.getElementById('search-box');
const sortBtn = document.getElementById('sort-btn');
const noResults = document.getElementById('no-results');
let ascending = true;                          // next sort direction

// Read the name and price straight from the card.
function getName(card) {
  return card.querySelector('.product-info h2').textContent.trim().toLowerCase();
}
function getPrice(card) {
  return parseInt(card.querySelector('.product-price').textContent.replace(/[^\d]/g, ''), 10);
}

// The checked radio id is "filter-all", "filter-face", ... -> "all", "face", ...
function getCategory() {
  const checked = document.querySelector('input[name="category"]:checked');
  return checked.id.replace('filter-', '');
}

// A card is shown only if it matches BOTH the search text and the category.
// Category hiding is done by CSS (Task 1); here we add the search hiding and
// count the cards matching both, to decide whether to show "No products found".
function applyFilters() {
  const text = searchBox.value.trim().toLowerCase();
  const category = getCategory();
  let visibleCount = 0;

  cards.forEach(function (card) {
    const matchesSearch = getName(card).includes(text);
    const matchesCategory = category === 'all' || card.classList.contains('category-' + category);
    card.classList.toggle('search-hidden', !matchesSearch);
    if (matchesSearch && matchesCategory) visibleCount++;
  });

  grid.hidden = visibleCount === 0;            // message replaces the grid
  noResults.hidden = visibleCount !== 0;
}

searchBox.addEventListener('input', applyFilters);
document.querySelectorAll('input[name="category"]').forEach(function (radio) {
  radio.addEventListener('change', applyFilters);
});

// Sort by price: 1st click low -> high, 2nd click high -> low, and so on.
// The existing card elements are moved with appendChild (no innerHTML).
sortBtn.addEventListener('click', function () {
  const sorted = Array.from(grid.querySelectorAll('.product-col')).sort(function (a, b) {
    return ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
  });
  sorted.forEach(function (card) { grid.appendChild(card); });
  sortBtn.textContent = ascending ? 'Sort by price: low to high \u2191' : 'Sort by price: high to low \u2193';
  ascending = !ascending;
});

// "Premium" label for products costing more than N x 100, added when the page loads.
cards.forEach(function (card) {
  if (getPrice(card) > PREMIUM_LIMIT) {
    const badge = document.createElement('span');
    badge.className = 'premium-badge';
    badge.textContent = 'Premium';
    card.querySelector('.product-info').prepend(badge);
  }
});
