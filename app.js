const http = require("http");
const server = http.createServer(
    ((req,res)=>
    {
        if(req.url==='/home') 
            {
                res.write('<html><body>Welcome home</body></html>')   
               
            }  
            
            if(req.url==='/about') 
                {
                    res.write('<html><body> Welcome to About Us page</body></html>')   
                   
                }  
                if(req.url==='/node') 
                    {
             res.write('<html><body>  Welcome to my Node Js project</body></html>')   
                       
                    }                
    })

)

server.listen(3000);