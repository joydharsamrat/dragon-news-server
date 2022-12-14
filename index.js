const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());

app.get('/', (req, res) => {
    res.send("news api is running")
})

const categories = require('./data/categories.json')

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log('dragon news server is running on port', port)
})