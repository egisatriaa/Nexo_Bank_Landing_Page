# README Checklist (Professional Backend / Laravel Project)

## 1. Project Title
- [ ] Nama project jelas dan spesifik
- [ ] Ada short description (1–2 kalimat)
- [ ] Menjelaskan tujuan utama project

---

## 2. Tech Stack
- [ ] Backend framework (Laravel / dll)
- [ ] Database (MySQL / PostgreSQL / dll)
- [ ] Frontend (jika ada)
- [ ] Third-party services (Midtrans / Redis / etc)
- [ ] Build tools (Vite / Webpack / etc)

---

## 3. Features
- [ ] Core features dijelaskan (wallet, transfer, topup, dll)
- [ ] Feature ditulis dalam bentuk bullet list
- [ ] Fokus pada business logic, bukan UI saja
- [ ] Menyebutkan fitur penting (transaction, auth, webhook, dll)

---

## 4. System Architecture (Optional tapi recommended)
- [ ] Menjelaskan flow sistem (high level)
- [ ] Menyebutkan konsep penting (ACID, idempotency, queue)
- [ ] Menjelaskan cara data diproses (transaction flow)
- [ ] Menyebutkan integrasi external service (Midtrans, etc)

---

## 5. Installation / Setup Guide
- [ ] Step clone repository
- [ ] Composer install
- [ ] npm install (jika ada frontend)
- [ ] Setup .env
- [ ] Generate app key
- [ ] Migration database
- [ ] Seed database (jika ada)
- [ ] Run server (php artisan serve / npm run dev)

---

## 6. Environment Variables
- [ ] DB config (DB_DATABASE, DB_USERNAME, DB_PASSWORD)
- [ ] APP_KEY
- [ ] MIDTRANS_SERVER_KEY (jika ada)
- [ ] MIDTRANS_CLIENT_KEY (jika ada)
- [ ] Redis / queue config (jika ada)

---

## 7. API / Endpoint Documentation
- [ ] List endpoint penting
- [ ] Method (GET/POST/PUT/DELETE)
- [ ] Request example
- [ ] Response example
- [ ] Authentication requirement (if any)

---

## 8. Webhook Documentation (if applicable)
- [ ] Endpoint URL jelas
- [ ] Source service (Midtrans / Stripe / etc)
- [ ] Rules (must return 200 OK)
- [ ] Stateless requirement
- [ ] Idempotency behavior explained
- [ ] Example payload

---

## 9. Testing Guide
- [ ] Curl example request
- [ ] Expected response
- [ ] How to test locally
- [ ] How to test production endpoint

---

## 10. Screenshots / Demo (Optional but powerful)
- [ ] Dashboard screenshot
- [ ] Transaction flow screenshot
- [ ] Mobile/desktop preview
- [ ] UI/UX preview

---

## 11. Future Improvements
- [ ] Queue system
- [ ] Real-time notification (WebSocket)
- [ ] Fraud detection system
- [ ] Performance optimization
- [ ] Admin dashboard enhancement

---

## 12. Security Notes (Recommended for fintech project)
- [ ] Input validation explained
- [ ] Authentication system
- [ ] Authorization (roles/permissions)
- [ ] Transaction safety (lockForUpdate / DB transaction)
- [ ] API protection (rate limiting / middleware)

---

## 13. Author / Contact
- [ ] Nama developer = Egi Satria Dharma Yudha Wicaksana
- [ ] GitHub link = https://github.com/egisatriaa
- [ ] LinkedIn link = https://www.linkedin.com/in/egi-satria-dyw
- [ ] Portfolio link (optional)= https://egi-portfolio.vercel.app/