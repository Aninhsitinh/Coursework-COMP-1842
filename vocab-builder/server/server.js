const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import the model
global.Vocab = require('./api/models/vocabModel'); 

// Require the routes function, but don't call it yet
const routes = require('./api/routes/vocabRoutes');

// Database Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://khuong:bobom1234@fgwweb2.rsigdr2.mongodb.net/?appName=FGWWeb2', 
    { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();

// 1. APPLY MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 2. REGISTER ROUTES
routes(app);

// 3. ADD ERROR HANDLER (Đảm bảo nó nằm trước app.listen, nhưng sau routes)
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});

// 4. START SERVER
app.listen(port);
console.log(`Server started on port ${port}`);