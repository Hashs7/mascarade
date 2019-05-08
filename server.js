const mongoose = require('mongoose');
const app = require('./app');

const {HOSTNAME, DB_USER, DB_PASSWORD, PORT} = process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${HOSTNAME}?retryWrites=true`;

mongoose
    .connect(uri, {useNewUrlParser: true})
    .then(_ => {
        const server = app.listen(PORT || 3000);
        const io     = require('./socket').init(server);
        io.on('connection', socket => {
            console.log('Client connected');

            socket.on('disconnect', () => io.emit('disconnected'));
        })
    })
    .catch(err => console.log('connection failed => ', err));