var express = require('express');
var app = express();

var fortune = require('./lib/fortune.js');

//设置handlebars视图引擎  为默认引擎
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));



app.get('/',function(req,res){
  // res.type('text/plain');
  // res.send('meadowlark Travel');
  res.render('home');
})

app.get('/about',function(req,res){
  // res.type('text/plain');
  // res.send('About Meadowlark Travel');

	res.render('about', { fortune: fortune.getFortune() });
})

//404 catch-all 处理器(中间件)
app.use(function(req,res,next){
  // res.type('text/plain');
  // res.status(404);
  // res.send('404 - Not Found');
  res.status(404) ;
  res.render('404');
})

//500 错误处理器（中间件)
app.use(function(err,req,res,next){
  res.status(500);
  res.render('500');
})

app.listen(app.get('port'),function(){
  console.log('Express started on https://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
})
