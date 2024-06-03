const http = require("http")
const fs = require('fs');
const server = http.createServer(
    (req,res)=>
        {
            if(req.url==="/")
               {
                if (fs.existsSync('message.txt')) {
                    messages = fs.readFileSync('message.txt', 'utf-8');
                  }
            
                
                 
                    messageHtml = `<p>${messages}</p>`;
                 
                  res.write(`<html>
                    <body>
                    ${messageHtml}<form action="/message" method="post">
                           <input type="text" name="message"></input>
                           <button type="submit">send</button>
                          
                        </form>
                    </body>
                  </html>`);
                  return res.end();
               }


             if (req.url === '/message' && req.method === 'POST')
             {
                const body = [];
                req.on('data', (chunk) => {
                  console.log(chunk);
                  body.push(chunk);
                
                })
                req.on('end', () => {
                    const parsedBody = Buffer.concat(body).toString();
                    const message = parsedBody.split('=')[1];
                    fs.writeFileSync('message.txt', message);
                  });
                  res.statusCode = 302;
                  res.setHeader('Location', '/');
                  return res.end();
             }
                
                  
           
        }
);
server.listen(4000);

