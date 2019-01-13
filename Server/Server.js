const express = require('express'),
app = express(),
multiparty = require('multiparty'),
bodyParser = require('body-parser'),
fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("../"));
app.use(express.static("../static"));

app.listen(process.env.PORT||3001,()=>{
    console.log(`Node listening on port: ${process.env.PORT||3001}`);
});

app.post("/backend/file",(req,res)=>{
    var form = new multiparty.Form();
    form.parse(req,(err,fields,files)=>{
        files.Files.forEach(file=>{
            fs.exists("../uploads",(exists)=>{if(!exists)fs.mkdir("../uploads",()=>{})});
            fs.copyFile(file.path,`../uploads/${file.originalFilename}`,()=>{});
            fs.unlink(file.path,()=>{});
        });
    });
    res.redirect("/file");
});