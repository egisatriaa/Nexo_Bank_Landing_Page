# <img src="public/assets/images/logo/nexo-logo.svg" width="40" vertical-align="middle"> NexoBank - Professional Digital Banking Projects

![Nexo Bank Banner](public/assets/images/thumbs/banner-img1.png)

NexoBank is a robust and secure digital banking backend system built with Laravel. It provides core banking functionalities such as wallet management, peer-to-peer transfers, top-ups via Midtrans, and a secure savings vault.

---

## 🚀 Tech Stack

- **Backend Framework:** Laravel 12 (PHP 8.2+)
- **Database:** MySQL
- **Frontend Framework:** React 19 (SPA integrated via Vite 7)
- **Styling:** Tailwind CSS 4
- **State Management:** Zustand 5
- **Routing:** React Router 7
- **Icons:** Lucide React
- **Third-party Services:** 
    - **Midtrans:** Payment gateway for Top Up transactions (Snap API).
- **Security:** Laravel Sanctum (Cookie-based Authentication).

---

## ✨ Features

- **Wallet Engine:** High-integrity balance tracking using a strict **Double-Entry Ledger System**.
- **Secure P2P Transfer:** Instant fund transfers with built-in **Deadlock Prevention** and atomicity.
- **Top Up System:** Integrated with **Midtrans Snap**, supporting asynchronous status updates via webhooks.
- **Savings Vault:** Dedicated virtual vault for separate savings, protecting funds from accidental spending.
- **Split Bill (Payment Request):** Create and manage financial requests from other users with real-time tracking.
- **Transaction Security:** Secondary authentication via **6-digit Transaction PIN**.
- **Idempotency Control:** Global enforcement of `idempotency_key` to prevent duplicate transactions across all services.
- **Analytics Dashboard:** Visual representation of financial health (Inflow vs Outflow).
- **Audit Logs:** Automated tracking of all sensitive financial activities for security compliance.

---

## 🏗️ System Architecture

### High-Level Flow
The system utilizes a **Service-Oriented Architecture (SOA)**, separating business logic from controllers into dedicated services for Transfers, Savings, and Transactions.

### Core Principles
- **ACID Compliance:** All financial operations are wrapped in `DB::transaction` blocks.
- **Concurrency Control:** Utilizes database-level row locks (`lockForUpdate`) with sequential ID ordering to prevent deadlocks.
- **Double-Entry Ledger:** Every balance change creates two ledger entries (Debit/Credit) to ensure auditability.
- **Idempotency:** Strict validation of unique keys to handle network retries without double-charging.
- **Asynchronous Webhooks:** Stateless webhook handling with signature verification and state-check guards.


---

## 🛠️ Installation & Setup Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/egisatriaa/project-mini-bank.git
   cd project-mini-bank
   ```

2. **Install Dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Setup Environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Database Configuration**
   Update your `.env` file with your database credentials.

5. **Run Migrations & Seeders**
   ```bash
   php artisan migrate --seed
   ```

6. **Build Assets & Start Server**
   ```bash
   # Development
   npm run dev
   # or
   php artisan serve
   ```

---

## 🔑 Environment Variables

Essential variables to configure in your `.env`:

```env
# App Config
APP_NAME=NexoBank
APP_ENV=local
APP_KEY=base64:your_generated_key_here
APP_URL=http://localhost:8000

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nexo_bank
DB_USERNAME=root
DB_PASSWORD=

# Midtrans Configuration
MIDTRANS_SERVER_KEY=your_server_key
MIDTRANS_IS_PRODUCTION=false
MIDTRANS_IS_SANITIZED=true
MIDTRANS_IS_3DS=true
```

---

## 📑 API Documentation

### Authentication
- `POST /api/register` - Register a new user.
- `POST /api/login` - Authenticate user.
- `POST /api/logout` - Revoke session.

### Core Banking
- `GET /api/me` - Get current user profile and wallet.
- `POST /api/topup` - Initiate a top-up request (returns Midtrans Snap Token).
- `POST /api/transfer` - Transfer funds to another user.
- `GET /api/transactions` - Fetch transaction history.

### Savings & Requests
- `POST /api/savings/deposit` - Move funds to Savings Vault.
- `POST /api/savings/withdraw` - Withdraw funds from Savings Vault.
- `POST /api/payment-requests` - Create a new split bill request.

---

## 🔗 Webhook Documentation

### Midtrans Webhook
- **Endpoint:** `POST /api/webhooks/midtrans`
- **Source:** Midtrans Notification Service.
- **Security:** Validates `signature_key` using SHA512 (OrderId + StatusCode + GrossAmount + ServerKey).
- **Behavior:** 
    - Always returns `200 OK` to prevent retry spam.
    - Idempotent: Checks if the transaction is already marked as `SUCCESS`.
    - Automatically updates wallet balance and creates ledger entries upon successful settlement.

---

## 🧪 Testing Guide

### Local Testing
1. Use **Postman** or **Insomnia** to test API endpoints.
2. For Webhooks, use **ngrok** to expose your local server:
   ```bash
   ngrok http 8000
   ```
3. Update the Midtrans dashboard with your ngrok URL.

### Running Tests
```bash
php artisan test
```

---

## 📸 Screenshots / Demo

*(Coming Soon )*
- Dashboard Overview
- Transaction Flow
- Mobile Preview

---

## 🔮 Future Improvements

- **Real-time Notifications:** Implement WebSockets (Laravel Reverb/Pusher) for instant transaction alerts.
- **Fraud Detection:** Rule-based system to flag suspicious transactions.
- **Admin Dashboard:** Enhanced management interface for bank administrators.
- **Performance Optimization:** Implementing Redis for high-frequency balance reads.

---

## 🛡️ Security Notes

- **Input Validation:** Strict validation rules on all incoming requests to prevent SQL Injection and XSS.
- **Authentication:** Session-based security via Laravel Sanctum for SPA security.
- **Authorization:** Role-based access control (RBAC) where applicable.
- **Transaction Safety:** 
    - Database transactions for atomic operations.
    - `lockForUpdate` on wallets to handle concurrent transactions safely.
    - Rate limiting on API endpoints to prevent brute force attacks.

---

## 👨💻 Author / Contact

- **Name:** Egi Satria Dharma Yudha Wicaksana
- **GitHub:** [egisatriaa](https://github.com/egisatriaa)
- **LinkedIn:** [Egi Satria DYW](https://www.linkedin.com/in/egi-satria-dyw)
- **Portfolio:** [egi-portfolio.vercel.app](https://egi-portfolio.vercel.app/)

---
*Built by Egi Satria Dharma Yudha Wicaksana*
