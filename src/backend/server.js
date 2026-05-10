const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../frontend')))

app.listen(8080, () => {
    console.log('Server running on port 8080')
})