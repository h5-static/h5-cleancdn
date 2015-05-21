var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");
var Request = require("request");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.all("/", function(req, res){
	
	var url = (req.query&&req.query.url) || "";
	console.log("清楚cdn缓存地址"+url);

	Request("http://workflow.dp/api/v0.1/cdn/refresh/h5?url="+url, function (error, response, body) {
		console.log(body);	
	})
	res.end();
});

app.listen(9567);

console.log("端口:9567已启动");

