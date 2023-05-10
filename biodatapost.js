const express = require('express');
const app = express();
const port = process.env.PORT || 7000 ;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/biodata', function(req, res){ //get
    const nama = req.body.nama; //body bukan query
    const tempatlahir = req.body.tempatlahir;
    const tanggallahir = req.body.tanggallahir;
    const alamat = req.body.alamat;

    res.send({
        'nama': nama,
        'tempatlahir' : tempatlahir,
        'tanggallahir' : tanggallahir,
        'alamat' : alamat
    });
})

app.listen(7000);
console.log('Server started at http://localhost:' + 7000);