// Redirection:- 

const http=require('http');  //core module
const server=http.createServer((req,res)=>{

    const url=req.url;
    if(url==="/shagun"){    // "/" root url   //status code 302 is redirection code

        res.setHeader('Content-type','text/html');
        res.write("<html>")
        res.write('<head> <title>Shagun Sharma</title></head>')
        res.write('<body><h1> My name is Shagun Sharma</h1></body>')
        res.write("</html>");
        return res.end();
    }
    else if(url==="/father"){
        res.setHeader('Content-type','text/html');
        res.write("<html>")
        res.write('<head> <title>Father Name</title></head>')
        res.write('<body><h1> My Father name is Santosh Kumar Sharma</h1> <form action="/shagun" method="POST"> <label for="age">Father Age : </label> <input type="text" name="age" placeholder="Father Age"> <button>Submit</button> </form></body>')
        res.write("</html>");
        return res.end();
    }
    
    else{

    res.setHeader('Content-type','text/html');
    res.write('<html>')
    res.write('<head><title>Shagun</title></head>')
    res.write('<body><h1>Welcome to my website!</h1></body>');
    res.write('</html>')
    return res.end();
    }
    });
    server.listen(8000);