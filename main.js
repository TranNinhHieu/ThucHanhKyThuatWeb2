var express = require('express');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
//Khai Báo Thư Viện Public
var publicDir = require('path').join(__dirname,'/public'); 
app.use(express.static(publicDir));
var loaihoa=require('./controllers/loaihoa');
var hoa=require('./controllers/hoa');
async function HienThi(req, res,maloai)
{
	var dslhoa=await loaihoa.select();
	var chitiethoa=await hoa.select(maloai);
var tenkh=""
res.render('trang_1',{dslh:dslhoa,dshoa:chitiethoa,tendn:tenkh});
}
app.get('/', function(req, res) {
    HienThi(req,res,'1'); 
});
app.get('/:maloai', function(req, res) {
   var maloai=req.params.maloai;
   if(isNaN(maloai)==false)
    HienThi(req,res,maloai);
});
app.listen(3000);
console.log('3000 is the magic port');