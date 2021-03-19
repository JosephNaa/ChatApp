const express = require('express')
const app = express()
const port = 3030

app.get('/', (_, res) => {
    res.sendFile(__dirname + '/index.html')
})

const server = app.listen(port, () => {
    console.log('Express listening on port', port)
})

const listen = require('socket.io')
const io = listen(server)

io.on('connection', (socket) => {
    console.log('socket server connected')
    
    socket.on('client message', (data) => {
        console.log(data)

        io.emit('server message', {
            mesaage: data.message
        })
    })
})