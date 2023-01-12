const express = require('express');
const http = require('http');
const {Server} = require('socket.io')
const cors = require('cors');
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

const route = require('./router.js')

app.use(cors({ origin: '*'}))
app.use(route)

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})