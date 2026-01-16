# Fashion Ecommerce App – v1 API List

This document lists all backend APIs required for v1.
No implementation or request/response schemas included.

---

## 1. Authentication APIs

- POST /auth/signup  
  Purpose: Register a new user

- POST /auth/login  
  Purpose: Authenticate user

- POST /auth/logout  
  Purpose: End user session

---

## 2. Seller APIs

- POST /seller/profile  
  Purpose: Create seller profile

- GET /seller/dashboard  
  Purpose: Fetch seller overview

- POST /seller/product  
  Purpose: Add a single product

- POST /seller/products/bulk  
  Purpose: Upload multiple products at once (CSV / Excel)

- GET /seller/products  
  Purpose: List seller products

- PUT /seller/product/{id}  
  Purpose: Update product details

- GET /seller/orders  
  Purpose: View orders for seller products

---

## 3. Customer APIs

- GET /products  
  Purpose: Fetch product listings

- GET /products/{id}  
  Purpose: Fetch product details

- POST /cart  
  Purpose: Add product to cart

- GET /cart  
  Purpose: View cart

- POST /checkout  
  Purpose: Place order and initiate payment

- GET /orders  
  Purpose: View customer orders

---

## 4. Admin APIs

- GET /admin/sellers  
  Purpose: View all sellers

- GET /admin/products  
  Purpose: View all products

- GET /admin/orders  
  Purpose: View all orders

- PUT /admin/seller/{id}/disable  
  Purpose: Disable a seller

- PUT /admin/product/{id}/disable  
  Purpose: Disable a product
