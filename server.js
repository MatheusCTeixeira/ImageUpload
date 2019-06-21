"use strict";
exports.__esModule = true;
var express = require("express");
var multer = require("multer");
// Multer instance
var upload = multer({ dest: "uploads/" });
// App instance
var app = express();
// Distribui arquivos estáticos
app.use(express.static(__dirname + "/"));
// Lê os arquivos
app.route("/").post(upload.single("avatar"), function (req, res, next) {
    console.log("user: " + req.body.name);
    console.log("filename: " + req.file.filename);
    res.sendStatus(200);
});
// Inicializa o servidor
app.listen("3000", function () {
    console.log("Server running");
});
