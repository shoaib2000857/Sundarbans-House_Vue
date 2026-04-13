# Contact Social Links Update

## Task
Update the contact page social links with the links from the footer (LinkedIn, Instagram, YouTube) and their respective SVGs.
Make the contact cards entirely clickable.

## Action Plan
- The links in `ContactView.vue` are already the `contactInfo` array using an `<a>` tag with the `card-base` class.
- I will verify the SVG paths and URLs to ensure they perfectly match the `AppFooter.vue`.
- I will guarantee the card is clickable by ensuring the anchor tag (`<a>`) wraps all the card content correctly without any nested interactive elements that might block it. I will explicitly set `cursor: pointer`.
