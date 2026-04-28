# 🔐 Secure Web Application - Cyber Security Assignment

## 👤 Student Information

**Name:** Aneeqa Kamran
**Course:** Cyber Security
**ID:** DHC-8189

---

## 📌 Project Overview

This project demonstrates basic web application security implementation using a Node.js Express application. The goal is to identify common vulnerabilities and apply security best practices to protect the application.

---

## ⚙️ Technologies Used

* Node.js
* Express.js
* Validator
* Bcrypt
* JSON Web Token (JWT)
* Helmet
* Postman (for API testing)

---

## 🚀 Features Implemented

### ✅ 1. Input Validation

All user inputs are validated using the `validator` library to prevent invalid or malicious data.

Example:

```javascript
const validator = require('validator');

if (!validator.isEmail(email)) {
  return res.status(400).send('Invalid email');
}
```

---

### 🔐 2. Password Hashing

Passwords are securely hashed and salted using `bcrypt`.

```javascript
const bcrypt = require('bcrypt');

const hashedPassword = await bcrypt.hash(password, 10);
```

---

### 🔑 3. Authentication using JWT

JWT tokens are generated for secure user authentication.

```javascript
const jwt = require('jsonwebtoken');

const token = jwt.sign({ email: user.email }, 'secretKey');
```

---

### 🛡️ 4. Security Middleware

Helmet is used to secure HTTP headers.

```javascript
const helmet = require('helmet');
app.use(helmet());
```

---

## 🧪 API Testing (Postman)

### 📍 Test 1: Invalid Email Signup

**Request:**

```
POST /signup
{
  "email": "invalidemail",
  "password": "123456"
}
```

**Response:**

```
400 Bad Request - Invalid email
```

---

### 📍 Test 2: Successful Signup

**Request:**

```
POST /signup
{
  "email": "test@example.com",
  "password": "123456"
}
```

**Response:**

```
User registered successfully
```

---

### 📍 Test 3: Login (Correct Credentials)

**Request:**

```
POST /login
{
  "email": "test@example.com",
  "password": "123456"
}
```

**Response:**

```
JWT Token generated
```

---

### 📍 Test 4: Login (Wrong Password)

**Response:**

```
Authentication failed
```

---

## ✅ Security Checklist

* ✔ Input validation implemented
* ✔ Password hashing with bcrypt
* ✔ JWT authentication added
* ✔ Helmet for secure headers
* ✔ HTTPS recommended for production

---

## 📂 Project Structure

```
secure-app/
│── index.js
│── package.json
│── package-lock.json
│── README.md
│── report.pdf
```

---

## 🧠 Conclusion

This project successfully demonstrates basic web security practices including validation, authentication, and secure password handling. Vulnerabilities were identified and mitigated through proper implementation and testing.

---

## 📎 Notes

* HTTPS is recommended for production environments.
* Additional security measures can include rate limiting and logging.

---
