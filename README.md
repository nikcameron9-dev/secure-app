# 🔐 Cyber Security Assignments - Secure Web Application

## 👤 Student Information

**Name:** Aneeqa Kamran
**Course:** Cyber Security
**ID:** DHC-8189

---

# 📌 Assignment 1 - Vulnerability Assessment

## 🔍 Objective

The objective of this task was to identify common vulnerabilities in a web application using manual and automated testing techniques.

---

## ⚙️ Tools Used

* OWASP ZAP
* Browser Developer Tools

---

## 🧪 Tasks Performed

* Explored application functionality
* Identified input validation issues
* Tested for potential XSS vulnerabilities
* Performed automated scanning using OWASP ZAP

---

## ⚠️ Vulnerabilities Identified

### 1. Input Validation Issues

The application accepted invalid inputs such as incorrect email formats.

**Risk:**
May allow malicious or unexpected data to be processed.

---

### 2. Weak Password Handling

Passwords were stored in plain text.

**Risk:**
If the database is compromised, user passwords can be exposed.

---

### 3. Missing Authentication

No proper authentication mechanism was implemented.

**Risk:**
Unauthorized users could access protected data.

---

### 4. Missing Security Headers

The application lacked secure HTTP headers.

**Risk:**
Increased exposure to XSS and clickjacking attacks.

---

## 🎯 Outcome

Basic vulnerabilities were successfully identified and analyzed.

---

# 🔍 Assignment 2 - Vulnerability Fixes

## 📌 Objective

The objective of this task was to fix the vulnerabilities identified in Assignment 1 and enhance application security.

---

## ⚠️ Vulnerabilities & Fixes

### 1. Input Validation Issue

**Before:** Application accepted invalid inputs
**Fix Applied:** Used `validator` library

---

### 2. Weak Password Storage

**Before:** Passwords stored in plain text
**Fix Applied:** Implemented hashing using `bcrypt`

---

### 3. Missing Authentication

**Before:** No access control
**Fix Applied:** Implemented JWT authentication

---

### 4. Missing Security Headers

**Before:** No protection against attacks
**Fix Applied:** Added Helmet middleware

---

## 🧪 Testing After Fixes

* Invalid inputs are rejected
* Passwords are stored as hashed values
* Unauthorized access is blocked
* Security headers are applied

---

## ✅ Outcome

All vulnerabilities were fixed, improving application security.

---

# 🚀 Assignment 3 - Secure Implementation & Testing

## 📌 Project Overview

This task focuses on implementing security best practices in a Node.js web application and testing them using Postman.

---

## ⚙️ Technologies Used

* Node.js
* Express.js
* Validator
* Bcrypt
* JSON Web Token (JWT)
* Helmet
* Postman

---

## 🔐 Security Features Implemented

### ✅ Input Validation

```javascript id="b7o17d"
const validator = require('validator');

if (!validator.isEmail(email)) {
  return res.status(400).send('Invalid email');
}
```

---

### 🔐 Password Hashing

```javascript id="mx7c8c"
const bcrypt = require('bcrypt');

const hashedPassword = await bcrypt.hash(password, 10);
```

---

### 🔑 JWT Authentication

```javascript id="fpg86d"
const jwt = require('jsonwebtoken');

const token = jwt.sign({ email: user.email }, 'secretKey');
```

---

### 🛡️ Security Middleware

```javascript id="9ubq4n"
const helmet = require('helmet');
app.use(helmet());
```

---

## 🧪 API Testing (Postman)

### 📍 Test 1: Invalid Email

POST /signup
{ "email": "invalidemail", "password": "123456" }
➡ Response: 400 Bad Request

---

### 📍 Test 2: Successful Signup

➡ Response: User registered successfully

---

### 📍 Test 3: Login Success

➡ Response: JWT Token generated

---

### 📍 Test 4: Login Failure

➡ Response: Authentication failed

---

## ✅ Security Checklist

* ✔ Input validation
* ✔ Password hashing
* ✔ JWT authentication
* ✔ Helmet security headers
* ✔ HTTPS recommended

---

## 📂 Project Structure

```
secure-app/
│── index.js
│── package.json
│── package-lock.json
│── README.md
│── cyber_security_detailed_report.pdf
```

---

## 🧠 Final Conclusion

This project demonstrates:

1. Identifying vulnerabilities
2. Fixing security issues
3. Implementing secure practices
4. Testing application security

The application is now significantly more secure against common web vulnerabilities.

---

## 📎 Notes

* HTTPS should be used in production
* Additional improvements: logging, rate limiting

---
