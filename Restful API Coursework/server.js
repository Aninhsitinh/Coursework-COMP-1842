const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

mongoose.connect('mongodb+srv://khuong:bobom1234@fgwweb2.rsigdr2.mongodb.net/?appName=FGWWeb2')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

require('./api/models/todolistModel');

app.use(express.json());

const routes = require('./api/routes/todolistRoutes');
routes(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});