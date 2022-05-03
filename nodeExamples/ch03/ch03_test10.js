var Users = [{name: '소녀시대', age: 20}, {name: '걸스데이', age: 22}]

console.log('\nforEach 구문사용하기')

Users.forEach(function(item, index) {
	console.log('배열 요소 #' + index + ' : %s', item.name)
})