// 서버에서 다른 웹 사이트의 데이터를 가져와 응답하기


var http = require('http') // http module load

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/'
}

var req = http.get(options, function(res) { // GET 방식으로 다른 사이트에 데이터를 요청한다
    // 응답 처리
    var resData = ''
    res.on('data', function(chunk) {// 콜백함수
        resData += chunk
    })

    res.on('end', function() {
        console.log(resData)
    })
})

req.on('error', function(err) {
    console.log('오류 발생 : ' + err.message)
})