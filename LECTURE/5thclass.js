const http=require('http');
const fs=require("fs");
const server=http.createServer((req,res)=>{

    const url=req.url;
    const method=req.method;   // because in rediraction we are using  get ond post method only 
    if(url==="/"){    // "/" root url

        res.setHeader('Content-type','text/html');
        res.write("<html>")
        res.write("<head> <title>Shagun Sharma</title></head>");
        res.write('<body><form action="/message" method="POST"> <input type="text"> </form></body>');
        res.write("</html>");
        return res.end();
    }
    if(url=='/message' && method=='POST'){
        fs.writeFileSync('hello.txt','Samples');
        res.setHeader('Location','/');
        res.statusCode=302;
        res.end();

    }
    res.setHeader('Content-type','text/html');
    res.write('<html>')
    res.write("<head><title>Shagun</title></head>");
    res.write("<body><h1>Welcome to my website!</h1></body>");
    res.write('</html>')
    res.end();
    });
    server.listen(3000);


    