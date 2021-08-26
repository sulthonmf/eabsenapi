var mysql = require('mysql');

//Koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'eabsendb'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Database Terkoneksi');
});

module.exports = conn;