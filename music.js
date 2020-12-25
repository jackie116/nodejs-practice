var http=require('http');
var fs=require('fs');

http.createServer((req,res)=>{
    var mp3='./Bird.mp3';
    var stat=fs.statSync(mp3); 

    res.writeHead(200,{
        'Content-Type':'audio/mpeg',
        'Content-Length':stat.size
    });

    var readableStream=fs.createReadStream(mp3);
    readableStream.pipe(res);
}).listen(8080);