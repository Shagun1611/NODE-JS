const http=require('http');       // core module.
const fs=require('fs');           // core module. // for checking that it has redirected or notwe created a file.
const {log}=require('console');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;         //for reason of redirection we use this line. without this method we cannot redirect
    
    if(url==='/'){          //--> / means root url      root url means that it will be home page localhost/portnumber
        res.setHeader('contetn-type','text/html');
        res.write('<html>');
        res.write('<head><title>Name</title></head>');
        res.write('<body><form action="/message" method="POST"><input type name="message"><input type="submit"value="send"></form></body>');
        res.write('</html');
        return res.end();  //if the url is not homerequest and if it is failed it will return some othetr content.
    }
    if(url==='/message' && method==='POST'){  
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);//call back function
        })
        req.on('end',()=>{
            const parsebody=Buffer.concat(body).toString();
            console.log(parsebody);
            const message=parsebody.split('=');
            fs.writeFileSync('Cse.txt',message[0]);
        })
        fs.writeFileSync('hello.txt','SAMPLE');
        res.setHeader('Location','/');
        res.statusCode=302;
        return res.end();
    }
    res.setHeader('contetn-type','text/html');
    res.write('<html>');
    res.write('<head><title>Node</title></head>');
    res.write('<body><h1><center>Welcome to the first response page!!!</h1></body>');
    res.write('</html');
    res.end()

});
server.listen(3000);