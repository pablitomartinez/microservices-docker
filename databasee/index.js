const server = require('./src/server');

const { Character } = require('./src/database');

// Character.find()
// .populate('homeworld',['_id', 'name'])
// .populate('films',['_id', 'title'])
// .then(res => console.log(res[0]));


// const res = Character.list().then(res => console.log(res[0]))
// console.log(res);
// Character.get(1).then(res => console.log(res))

server.listen(8004, ()=>{
    console.log('Database service ON PORT 8004');
});
