//it is the brain
const http=require('http'); 
// const requestHandler=require('./route');

const route=require('./route');//redirection
// console.log(route.someText)

console.log(route.someText);



// const server=http.createServer(requestHandler);
const server=http.createServer(route.hand);

server.listen(4000);