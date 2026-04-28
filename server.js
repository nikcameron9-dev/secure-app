const express = require('express');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const logger = require('./logger');

const app = express();

app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        imgSrc: ["'self'", "data:"],
      },
    },
  })
);

// Home route
app.get('/', (req, res) => {
  res.send('Server is working');
});

// Register route
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).send('Invalid email');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const token = jwt.sign(
    { email: email },
    'secret123',
    { expiresIn: '1h' }
  );

  res.send({
    message: 'User registered',
    token: token
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
  logger.info('Server started');
});