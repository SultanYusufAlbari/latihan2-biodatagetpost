const express = require('express');
const app = express();
const port = process.env.PORT || 8000 ;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/biodata', function(req, res){
    const nama = req.query.nama;
    const tempatlahir = req.query.tempatlahir;
    const tanggallahir = req.query.tanggallahir;
    const alamat = req.query.alamat;

    res.send({
        'nama': nama,
        'tempatlahir' : tempatlahir,
        'tanggallahir' : tanggallahir,
        'alamat' : alamat
    });
})

app.listen(8000);
console.log('Server started at http://localhost:' + 8000);

//infolink http://localhost:8000/biodata?nama=sultan%20yusuf%20albari&tempatlahir=kota%20bogor&tanggallahir=09%20september%202002&alamat=kp.%20babakan%20indah%20no.%2058