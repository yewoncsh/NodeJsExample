const { copyFileSync, fstat } = require('fs')
var http = require('http')
var fs = require('fs')

// 웹 서버 객체를 만듭니다.
var server = http.createServer()

// 웹 서버를 시작하여 3000번 포트에서 대기하도록 합니다.
var port = 3000
server.listen(port, function() {
	console.log('**웹 서버가 시작됐습니다.\n포트 번호 : %d', port)
})

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket) {
	var addr = socket.address()
	console.log('**클라이언트가 접속했습니다.\naddr.address : %s\naddr.port : %d', addr.address, addr.port)
})

//클라이언트 요청 이벤트 처리
server.on('request', function(req, res){
    console.log("클라이언트 요청이 들어왔습니다.");
    // console.dir(req);
  
    var filename = 'house.png'
    fs.readFile(filename, function(err, data) {
      res.writeHead(200, {"Content-Type": "image/png"})
      res.write(data)
      res.end()
    })
  });
  
  
  //서버종료 이벤트 처리
  server.on('close', function(){
    console.log('서버가 종료됩니다.');
  });