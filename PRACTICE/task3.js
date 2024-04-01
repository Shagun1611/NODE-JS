const http=require('http');
const fs=require("fs");
const {log}=require("console");

const server=http.createServer((req,res)=>{

    const url=req.url;
    const method=req.method;
    if(url==="/")
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Shagun</title></head>');
        res.write('<body><form action="/message" method="POST" ><input type="text" > </form></body>');
        res.write('</html>');
        return res.end();

    }
    if(url==='/message' && method==='POST'){

        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);
        });
        
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
            const message=parsedBody.split('=');
            fs.writeFileSync('case.txt',message[0]);
        })

        fs.writeFileSync('response.txt','Message received!');
        res.setHeader('Location','/');
        res.statusCode=302;
        return res.end();

    }

});
server.listen(2001);