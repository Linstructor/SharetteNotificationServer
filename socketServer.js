var app = require('http').createServer(handler);
var io = require('socket.io')(app);

app.listen(3001);

function handler (req, res) {
    res.writeHead(403);
    return res.end('You shouldnt be there');
}

io.on('connection', function (socket) {
    console.log('connection '+ socket.id);
    socket.emit('news', 'lalala');
    socket.on('disconnect', function () {
        console.log('disconnect '+socket.id);
    });
});