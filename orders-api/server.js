// server.js
const express = require('express');
const cors = require('cors');
const orders = require('./orders'); // Import the orders data

const app = express();
const PORT = 8080;

app.use(cors());

app.get('/api/orders', (req, res) => {
  let { limit, offset } = req.query;

  // Validate and set default values
  limit = parseInt(limit, 10);
  offset = parseInt(offset, 10);

  if (isNaN(limit) || limit <= 0) {
    limit = 10; // default limit
  }

  if (isNaN(offset) || offset < 0) {
    offset = 0; // default offset
  }

  // Slice the orders array based on limit and offset
  const paginatedOrders = orders.slice(offset, offset + limit);
  
  res.status(200).json(paginatedOrders);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
