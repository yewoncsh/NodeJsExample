var http = require('http')

// 웹서버 객체를 만든다.
var server = http.createServer()

// 웹 서버를 시작하고 3000번 포트에서 대기한다.
// var port = 3000
// server.listen(port, function() {
// 	console.log('웹 서버가 시작되었습니다.\n포트 번호 : %d', port)

// 	server.close()
// 	console.log('서버 종료 ㅎ')	
// })

// 웹 서버를 시작하고 192.168.0.5 IP와 3000번 포트에서 대기한다.
var port = 3000
var host = '192.168.0.214'

server.listen(port, host, '50000', function() {
	console.log('웹 서버가 시작되었습니다.\n포트 번호 : %d\n호스트 번호 : %s', port, host)
})