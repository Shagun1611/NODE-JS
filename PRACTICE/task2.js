const http=require('http');
const server=http.createServer((req,res)=>{

    const url=req.url;
    if(url==='/'){
        res.setHeader('content-type', 'text/html');
        res.write('<html><title> Shagun Sharma</title><style> body{background-color: #AEE1E1;display: flex;font-family: Arial, Helvetica, sans-serif;justify-content: center;align-items: left;height: 100vh;border-radius: 100px;}div.my{max-width: 400px;border: #70a4a4;background-color: rgba(85, 87, 103, 0.5);box-shadow: 10px 10px 10px 4px rgba(0, 9, 15, 0.27);padding: 10px;margin:0;position: absolute;top: 50%;right: 40%; transform: translate(0,-60%); border-radius: 8px;}hr{background-color: black;color: black;height: 2px;}</style></html>');
        res.write('<body> <div class="my" ><form action="/Thanks" method="POST"><h2>Registration Form</h2><hr><br><label for="name">Name: </label><input type="text"id="name" placeholder="Your Name"><br><br><label for="Email">Email: </label><input type="email" id="Email" placeholder="Your Email"><br><br><label for="pass">Password: </label><input type="password" id="pass" placeholder="Set Your Password"><br><br><label for="confirm">Confirm Password: </label><input type="password" id="confirm" placeholder="Confirm Your Password"><br><br><label for="gender">Gender: </label><label for="male">Male</label > <input type="radio" name="h" id="male"><label for="female">Female</label>   <input type="radio" name="h" id="female"><label for="other">Other</label><input type="radio" id="other"><br><br><label for="country">Country: &nbsp;</label><select name="country" id="country"> <option value="india">India</option><option value="usa">USA</option> <option value="canada">Canada</option> <option value="mexico">Mexico</option></select><br><br><label for="date">Your Birthday: </label><input type="date" id="date"><br><br><label for="phone">Phone Number: </label><input type="tel" maxlength="10" id="phone"> <br> <h4>Terms and conditions</h4><pre></pre><input type="checkbox">Your herby agree to all our terms and conditions </pre><br><br><input type="submit"><input type="reset"><br><br><a href="http://127.0.0.1:5500/Lecture-2/contact.html">Contact Me</a> </form></div><body>')
        res.write('</html')
        res.end();
    }
    else if(url==='/Thanks')
    {
        res.setHeader('context-type','text/html');
        res.write('<html> <body><h1>Thank you for visiting our website! </h1> <p>We hope that you had a great time exploring around.</p></body> </html>');
        res.end();
    }
    else
    {
        res.setHeader('context-type','text/html');
        res.write('<html> <body> <h1>Some Error has occured</h1> </body></html>');
        res.statusCode=404;
        res.end();

    }
});
server.listen(4000);