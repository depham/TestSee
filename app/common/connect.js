var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'sql106.epizy.com',
    user: 'epiz_34303550',
    password: '',
    database: 'epiz_34303550_new_testdata'
});

connection.connect(function(err){
    if(err) console.log("Kết nối thất bại!!")
});

module.exports = connection;