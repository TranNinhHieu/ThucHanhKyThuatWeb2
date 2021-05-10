// JavaScript Document
var mysql = require('mysql2/promise');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'banhoa',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
module.exports.DocBang= async function (CauTruyVan)
{
	 var DSBang = await pool.query(CauTruyVan);
	 Bang=DSBang[0];
	 return Bang;
}