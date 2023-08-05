// Server Creation

//1.) Import http module

const http=require('http');

http.createServer((req,res)=>{
    console.log('request has been made from browser to the server')
})

//port number,host, call-back function
Server.listen(3000, 'Localhost',()=>{
    console.log('server is listening on port 3000');
});

