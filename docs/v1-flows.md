# Fashion Ecommerce App – v1 User Flows

This document describes how each actor uses the system in v1.
No UI, no technical implementation details.

---

## 1. Seller Flow

1. Seller opens the website
2. Seller logs in
3. Seller goes to seller dashboard
4. Seller adds a new product:

4. Seller adds products using one of the following options:
   - Option A: Add a single product manually
      - Name
      - Price
      - Description
      - Images
      - Available quantity
   - Option B: Upload multiple products at once
     - Seller uploads a CSV / Excel file
     - System validates the file
     - Errors are shown for invalid rows
     - Valid products are created successfully
5. Seller saves the product
6. Product becomes visible to customers
7. Seller can:
   - Edit product details
   - Update stock
   - Disable a product
8. Seller views received orders (read-only in v1)

---

## 2. Customer Flow

1. Customer lands on website from Facebook / Instagram ad
2. Customer views product listing page
3. Customer clicks a product
4. Customer views product detail page
5. Customer adds product to cart
6. Customer proceeds to checkout
7. Customer enters:
   - Name
   - Email
   - Shipping address
8. Customer makes online payment
9. Order is created
10. Customer sees order confirmation page
11. Customer receives order confirmation email

---

## 3. Admin Flow (Minimal)

1. Admin logs in
2. Admin can:
   - View all sellers
   - View all products
   - View all orders
3. Admin can disable a seller or product if required
