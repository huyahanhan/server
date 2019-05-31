var http = require('http')//加载一个模块

// var server = http.createServer(function(req,res){
//     console.log('hello')
//     res.setHeader("Content-Type","text/html; charset=utf-8")//响应头告诉浏览器我后面发的数据是什么怎么解析，同时charset权限高
//     // res.write('hello world')//响应体  在页面展示
//     res.write('<h1>饥人谷</h1>')//html 样式
//     res.end()

// })

// server.listen(9000)


var server = http.createServer(function(request, response){
  setTimeout(function(){
    
    
    response.setHeader('Content-Type','text/html; charset=utf-8')//浏览器级别的级别高
    response.writeHead(200, 'haha')//status Code 约定200-300或者304成功，404失败显示红色实际上数据来了所以不要乱写
    response.write('<html><head><meta charset="gbk" /></head>')
    response.write('<body>')
    response.write('<h1>你好</h1>')
    response.write('</body>')
    response.write('</html>')  //end 之前是连续的
    
    response.end()
  },2000);
})

console.log('open http://localhost:8080')
server.listen(8099)
