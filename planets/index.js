const server = require('./src/server');

const PORT = 8003;

server.listen(8003, ()=>{
    console.log(`Planets service listeing on port ${PORT}`);
})