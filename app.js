const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();


const PORT = process.env.PORT || 5000;

const app = express();

// Rate limiting
const limiter = rateLimit({
    windowMS: 10 * 60 * 1000, // 10 minutes
    max: 100
});

app.use(limiter);
app.set('trust proxy', 1);

// ROUTES
app.use('/api', require('./routes/index'));

// Enable cors
app.use(cors());

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});