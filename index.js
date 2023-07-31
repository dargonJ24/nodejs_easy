const http=require('http')
const requestListener = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('hello words')
  }
const server =http.createServer(requestListener)
const port =3000
server.listen(port,(err)=>{
    if(err){
        console.log('server is err',err)
    }
    else{
        console.log('server  is running in port',port)
    }

 
}
)