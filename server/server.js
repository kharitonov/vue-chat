const chathistory = [];
const io = require('socket.io')(4113);

io.on('connect', function (socket) {

    for (x = 0; x != chathistory.length; ++x) {
        y = chathistory[x];
        console.log(y, chathistory);
        socket.emit('send', {name: y.name, message: y.message });
    }
    socket.on('pingServer', function (data) {
        console.log(data);
        socket.emit('pingServer', {pingServer: 'PONG!'});
    });
    socket.on('message', function(data)
    {
        socket.emit('send', {name: data.name, message: data.message});
        chathistory.push(data);
        console.log(chathistory);
        if (chathistory >= 25) {
            chathistory.shift();
        }
    })
    socket.on('disconnect', function () {
        io.emit('user disconnected');
      });
});