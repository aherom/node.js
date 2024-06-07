const fs = require('fs');

const func = (req,res)=>
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
            let body ="";
            req.on('data', (chunk) => {

                body += chunk.toString('utf-8');

            })
            req.on('end', () => {
                //const parsedBody = body.toString();
                const message = body;
                fs.writeFileSync('message.txt', message);
              });
              res.statusCode = 302;
              res.setHeader('Location', '/');
              return res.end();
         }



    }
    module.exports=func;