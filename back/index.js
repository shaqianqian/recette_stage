var express = require('express');
var app = express();
var mysql = require('mysql'); //调用MySQL模块\
const connection = require('./mysql');//导入mysq配置文件

connection.connect(function(err) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('[connection connect]  succeed!'); //如果连接成功 控制台输出 success 了
});


var bodyParser = require('body-parser');
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/', function(req, res) {
    var res = res;
    var req = req;
    console.info(req.body);
    var sql = "INSERT INTO recette (type,titre,num_portions,etape,temp,ingredients) VALUES (\""+ req.body.
            recette.type +"\",\""+req.body.
        recette.titre +"\",\""+req.body.recette.num_portions+"\",\""+
        req.body.recette.etape+"\",\""+ req.body.recette.temps  +"\",\""+ req.body.
            recette.incredients+"\");";
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        console.log(rows)
        res.send(rows)  //这里在页面上输出数据
        console.log('The solution is: ', rows);
    });

});
app.listen(8080);
