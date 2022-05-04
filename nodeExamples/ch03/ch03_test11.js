//js 복습 마지막 파일
//콜백 함수 이해하기

function add(a, b, callback) {
	var result = a + b
	callback(result)
}

add(10, 10, function(result) {
	console.log('파라미터로 전달된 콜백 함수 호출됨.')
	console.log('더하기 (10, 10)의 결과 : %d', result)
})

//왜 써? setTimeout 같은 거에 사용