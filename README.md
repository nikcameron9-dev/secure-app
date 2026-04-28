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

**Before:**
Application accepted invalid inputs.

**Fix Applied:**
Used `validator` library to validate user inputs.

---

### 2. Weak Password Storage

**Before:**
Passwords stored in plain text.

**Fix Applied:**
Implemented password hashing using `bcrypt`.

---

### 3. Missing Authentication

**Before:**
No access control for protected routes.

**Fix Applied:**
Implemented JWT-based authentication.

---

### 4. Missing Security Headers

**Before:**
No protection against common web attacks.

**Fix Applied:**
Added Helmet middleware to secure HTTP headers.

---

## 🧪 Testing After Fixes

* Invalid inputs are rejected
* Passwords are stored as hashed values
* Unauthorized access is blocked
* Security headers are properly applied

---

## ✅ Outcome

All major vulnerabilities were fixed, improving the overall security of the application.

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

### ✅ 1. Input Validation

All user inputs are validated using the `validator` library.

```javascript id="gxtwdk"
const validator = require('validator');

if (!validator.isEmail(email)) {
  return res.status(400).send('Invalid email');
}
```

---

### 🔐 2. Password Hashing

Passwords are hashed and salted using `bcrypt`.

```javascript id="cijm0n"
const bcrypt = require('bcrypt');

const hashedPassword = await bcrypt.hash(password, 10);
```

---

### 🔑 3. JWT Authentication

JWT tokens are generated for secure authentication.

```javascript id="7b5gny"
const jwt = require('jsonwebtoken');

const token = jwt.sign({ email: user.email }, 'secretKey');
```

---

### 🛡️ 4. Security Middleware

Helmet is used to secure HTTP headers.

```javascript id="0k36hl"
const helmet = require('helmet');
app.use(helmet());
```

---

## 🧪 API Testing using Postman

### 📍 Test 1: Invalid Email Signup

**Request:**
POST /signup
{ "email": "invalidemail", "password": "123456" }

**Response:**
400 Bad Request - Invalid email

---

### 📍 Test 2: Successful Signup

**Request:**
POST /signup
{ "email": "[test@example.com](mailto:test@example.com)", "password": "123456" }

**Response:**
User registered successfully

---

### 📍 Test 3: Login with Correct Credentials

**Request:**
POST /login
{ "email": "[test@example.com](mailto:test@example.com)", "password": "123456" }

**Response:**
JWT Token generated

---

### 📍 Test 4: Login with Incorrect Password

**Response:**
Authentication failed

---

## ✅ Security Checklist

* ✔ Input validation implemented
* ✔ Password hashing and salting
* ✔ JWT authentication
* ✔ Helmet security headers
* ✔ HTTPS recommended for production

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

This project demonstrates a complete security workflow:

1. Identifying vulnerabilities
2. Fixing security issues
3. Implementing secure coding practices
4. Testing application security

The application is now significantly more secure against common web vulnerabilities.

---

## 📎 Notes

* HTTPS should be implemented in production environments
* Additional improvements can include logging and rate limiting

---
