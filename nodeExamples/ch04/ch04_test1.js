var url = require('url')

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty')

var curStr = url.format(curURL)

console.log('주소 문자열 : %s', curStr)
console.log(curURL)

var querystring = require('querystring')
const { on } = require('events')
var param = querystring.parse(curURL.query)

console.log('요청 파라미터 중 query의 값 : %s', param.query)
console.log('원본 요청 파라미터 : %s', querystring.stringify(param))


// EventEmitter : 한쪽에서 다른 쪽으로알림 메시지를 보내는 이러한 이벤트를 보내고 받을 수 있도로 하는 것

