const http = require("http");
const server = http.createServer(
    ((req,res)=>{
             console.log("om Aher");
    })
)

server.listen(4000);