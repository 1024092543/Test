var http = require('http');
var url = require('url');

http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<h1>Node.js</h1>");
	res.write("<p>Hello World</p>");
	res.end("<p>By HuangYuanJian</p>");
}).listen(8080);

console.log('server start');

// function resIndex(res){
	// 封装包头
	   res.writeHead(200,{"Content-Type": 'text/html'})
	// 1.加载xxx.html到内存(搞到xxx.html的绝对路径，readFile读取文件)
	   var readpath = _dirname + '/' + url.parse('index.html').pathname;
	   var indexpage = fs.readFileSync(readpath,'utf-8')
    // 2.把加载的数据打包成包体
// }
