// JavaScript Document
var csdl=require('./database');
module.exports.dangnhap= async function (tendn,matkhau)
{
	var chuoi="SELECT * from khachhang where TenDN='"+tendn+"' and MatKhau='"+matkhau+"'";
	 var dskh = await csdl.DocBang(chuoi);
	if(dskh.length>0)
		return dskh[0];
    return "";
}