const express = require('express')
const app = express()
const port = 3000

//import library CORS
const cors = require('cors')

//use cors digunakan agar Restfull API bisa di akses oleh aplikasi lain
app.use(cors())

//import body parser merupakan library midlleware untuk membaca data yg dikirim oleh HTTP POST
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//import route posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter); // use route posts di Express

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})