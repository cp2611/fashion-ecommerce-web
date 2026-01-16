# Fashion Ecommerce App – v1 Data Model

This document defines core data entities and their relationships.
No database or implementation details included.

---

## 1. User

Represents any authenticated person on the platform.

Attributes:
- id
- name
- email
- role (admin / seller / customer)
- created_at

---

## 2. Seller

Represents a seller account.

Attributes:
- id
- user_id
- store_name
- status (active / disabled)
- created_at

Relationship:
- One Seller belongs to one User
- One Seller can have many Products

---

## 3. Product

Represents a product listed by a seller.

Attributes:
- id
- seller_id
- name
- description
- price
- images
- stock_quantity
- status (active / inactive)
- created_at

Relationship:
- One Product belongs to one Seller

---

## 4. Customer

Represents a customer profile.

Attributes:
- id
- user_id
- created_at

Relationship:
- One Customer belongs to one User
- One Customer can place many Orders

---

## 5. Order

Represents a purchase transaction.

Attributes:
- id
- customer_id
- total_amount
- payment_status
- order_status
- created_at

Relationship:
- One Order belongs to one Customer
- One Order has many OrderItems

---

## 6. OrderItem

Represents an individual product in an order.

Attributes:
- id
- order_id
- product_id
- quantity
- price_at_purchase

Relationship:
- One OrderItem belongs to one Order
- One OrderItem references one Product
