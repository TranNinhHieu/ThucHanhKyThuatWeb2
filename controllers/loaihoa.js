// JavaScript Document
var csdl=require('./database');
module.exports.select= async function ()
{
var dsloaihoa = await csdl.DocBang('SELECT * from loaihoa ');
	var kq="";
	for(i=0;i<dsloaihoa.length;i++)
 		{
			kq=kq+"<a href='/"+ dsloaihoa[i].Maloai+"'>"+			dsloaihoa[i].Tenloai +"</a><br>";}
	
return kq;
}
	