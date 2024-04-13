const socket = io()

// socket.on('countupdated', (e) => {
//     console.log("e: ", e)
// })

// socket.emit('increment')
// socket.emit('increment')
// socket.emit('increment')
// socket.emit('increment')

socket.on('broadcast', (e) => {
    console.log("broadcast: ", e)
})

document.querySelector("#message-form").addEventListener('submit', (e) => {
    e.preventDefault()

    const inputElem = document.querySelector("input")
    socket.emit('sendMessage', inputElem.value)
    inputElem.value = ""
})


