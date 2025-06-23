const express = require('express');
const { connectDB } = require('./config/db');
const logger = require('./config/logger');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parsing JSON
app.use(require('helmet')()); // Security headers
app.use(require('cors')()); // Cross-Origin Resource Sharing

// Routes
app.use('/api/v1', routes);

// Error Handler
app.use(errorHandler);

// Connect to MongoDB and Start Server
connectDB().then(() => {
    app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
});
