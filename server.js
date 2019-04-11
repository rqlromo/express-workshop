var express = require('express');
var app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.post("/create-post", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log('yeeeeha!!');
});











// var express = require('express');
// var app = express();
// var router = express.Router();

// app.get("/", function (req, res) {
//   res.send("Hello World!");
//   // console.log('req',req)
// });

// app.get("/", function(req, res) {
//   return res.redirect("/create-post");
// })

// app.get("/create-post", function (req, res) {
//   res.send("Hello ra!");
// });

// router.get("/", function (req, res, next) {
//   // res.render('index', {nombre: "raq"});
//   res.render('prueba', {title : 'express'});
// });

// app.get("/got", function (req, res) {
//   res.send("Juego de tronos!!");
// });

// app.post("/create-post", function (req, res) {

//   console.log('/create-post');
// });

// app.use(express.static("public"));

// app.listen(3000, function () {
//   console.log('yeeeeha!!');
// });



