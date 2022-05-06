// 서버에서 다른 웹 사이트의 데이터를 가져와 응답하기 POST 방식으로 요청!!!


var http = require('http') // http module load

var opts = {
    host: 'www.google.com',
    port: 80,
    method: 'POST',
    path: '/',
    headers: {}
}

var resData = ''
var req = http.request(opts, function(res) { // request 메소드를 사용해 POST 방식으로 다른 사이트에 데이터를 요청한다.
    // 응답 처리
    res.on('data', function(chunk) {// 콜백함수
        resData += chunk
    })

    res.on('end', function() {
        console.log(resData)
    })
})

opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
req.data = 'q=actor'
opts.headers['Content-Length'] = req.data.length

req.on('error', function(err) {
    console.log('오류 발생 ㅠㅠ : ' + err.message)
})

// 요청 전송
req.write(req.data)
req.end()