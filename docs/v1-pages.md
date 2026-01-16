# Fashion Ecommerce App – v1 Pages & Navigation

This document lists all pages required for v1 and who can access them.
No UI or routing details included.

---

## 1. Public Pages (No Login Required)

- Home page
- Product listing page
- Product detail page
- Cart page
- Login / Signup page

Navigation:
Home → Product Listing → Product Detail → Cart → Login / Signup

---

## 2. Customer Pages (Login Required)

- Checkout page
- Order confirmation page
- My orders page

Navigation:
Cart → Checkout → Order Confirmation  
My Orders accessible from header/menu

---

## 3. Seller Pages (Login Required)

- Seller dashboard
- Add product page (manual)
- Bulk product upload page
- Product list & edit page
- Orders list page (read-only)

Navigation:
Seller Dashboard → Products → Add / Bulk Upload  
Seller Dashboard → Orders

---

## 4. Admin Pages (Login Required)

- Admin dashboard
- Seller management page
- Product management page
- Order overview page

Navigation:
Admin Dashboard → Sellers / Products / Orders

---

## 5. Access Rules

- Public pages: anyone
- Customer pages: logged-in customers only
- Seller pages: logged-in sellers only
- Admin pages: admin only
