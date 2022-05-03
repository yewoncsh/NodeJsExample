var os = require('os')

console.log('시스템의 hostname : %s', os.hostname())
console.log('시스템의 메모리 : %d / %d', os.freemem(), os.totalmem())
console.log('시스템의 cpu정보\n')
console.log(os.cpus())
console.log('시스템의 네트워크 인터페이스 정보\n')
console.dir(os.networkInterfaces())