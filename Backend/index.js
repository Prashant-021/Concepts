const express = require('express')
const app = express()
const PORT = 5000

app.get('/product', (req, res) => {
    res.send("Hello, this is product Api")
})
app.get('/', (req, res) => {
    res.send("Hello, this is node backend")
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})