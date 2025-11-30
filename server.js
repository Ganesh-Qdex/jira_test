const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/', (req, res) => {
  res.json({
    message: 'API Server is running',
    status: 'healthy',
    timestamp: new Date().toISOString(),
    note: 'No CRUD operations implemented - 0% of JIRA requirements',
  });
});

// Simple info endpoint
app.get('/api/info', (req, res) => {
  res.json({
    message: 'This is a basic API server',
    version: '1.0.0',
    implementation: '0% of JIRA requirements',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Note: No CRUD operations implemented');
});

