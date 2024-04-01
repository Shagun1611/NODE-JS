// Stream and Buffer
// data sending and reading the input data -- stream
// lager videos and images cannot by read by node js so larger problem that can be divided into small small data --buffer
// a  portion (data stored)-chunk


//it is the hand
const http=require('http');
const fs=require('fs');

const requestHandler=(req,res)=>{
// const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;         //for reason of redirection we use this line. without this method we cannot redirect
    
    if(url==='/'){          //--> / means root url      root url means that it will be home page localhost/portnumber
        res.setHeader('contetn-type','text/html');
        res.write('<html>');
        res.write('<head><title>Name</title></head>');
        res.write('<body><form action="/message" method="POST"><input type name="message"><input type="submit"value="send"></form></body>');
        //res.write('<body> <form action="/message" method="POST" enctype="multipart/form-data"> <input type="file"> <input type="submit" value="send"></form></body>')
        res.write('</html');
        return res.end();  //if the url is not homerequest and if it is failed it will return some othetr content.
    }
    if(url==='/message' && method==='POST'){  
        const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk);   //chunk
        console.log(chunk);     //callback function
    })
    req.on('end',()=>{               //because it is taking more time  to get the data so ending point is taking more time than starting point so it is printing after the ending point
        console.log('Starting Point');
        const parsedBody=Buffer.concat(body).toString();
        console.log(parsedBody);

        const message=parsedBody.split('=');
        fs.writeFileSync('cse.txt',message[2]);
    
    })
        fs.writeFileSync('cse.txt','SAMPLES');
        console.log('Ending point')
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

};
// module.exports=requestHandler;

// module.exports={
//     handler: requestHandler,
//     someText:"Today is my day"

// };

// exports.hand=requestHandler;
// exports.someText="i am happy";

module.exports.hand=requestHandler;
module.exports.someText='Be happy';