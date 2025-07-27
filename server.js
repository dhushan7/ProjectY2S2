const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


//imports routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(postRoutes);
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ error: "Internal Server Error" });
});

app.use(cors());

const PORT = 8000;
const DB_URL= 'mongodb+srv://madhushan:madhushan123@cluster0.d75w2wc.mongodb.net/studio?retryWrites=true&w=majority&appName=Cluster0'



mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected')
})
.catch((err) => console.log('DB connection error', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});