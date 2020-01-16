import io from 'socket.io-client'

export const joinChatRoom = (name, room) => dispatch => {
    const socket = io('http://localhost:4000')
    socket.emit('join', ({ name, room }), () => {
        console.log(name, room)
    })
}