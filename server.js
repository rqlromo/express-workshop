//Ejemplo con ejs de render recogiendo datos de formulario
var express = require('express');
var app = express();
var body_parser = require('body-parser');

app.use(body_parser.urlencoded({extended:true}));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// form page 
app.get("/", function (req, res) {
  res.render('main')
});

// directions page 
app.post("/directions", function (req, res) {
  var users = ['tyrion', 'daenerys', 'jon nieve'];
  var directions = {
    tyrion:['andar 100m adelante', 'girar a la derecha', 'tomar la primera la calle', 'andar 200m', 'Casa'], 
    daenerys: ['girar a la izquierda', 'andar 300m', 'tomar el tercer cruce', 'andar 500m', 'girar a la derecha', 'casa'],
    'jon nieve': ['girar a la derecha', 'andar 50m', 'casa']
  }
  var response;

  var result = users.filter( user => user===req.body.name)

  if (result.length === 0) {
    response = 'el usuario no exixte';
    direction = '';
  } else {
    response = 'Bienvenido ' + result[0];
    direction = 'Debes ' + directions[result[0]][0];
  }

  res.render('otro',{
    response: response, 
    direction: direction,
  })
});

app.listen(3000, function () {
  console.log('El servidor esta levantado en el puerto 3000');
});









//Ejemplo con ejs de render
// var express = require('express');
// var app = express();

// // set the view engine to ejs
// app.set('view engine', 'ejs');

// // use res.render to load up an ejs view file

// // index page 
// app.get("/", function (req, res) {
//   res.render('main')
// });

// // otro page 
// app.get('/otro', function(req, res) {
//   res.render('otro', {name: 'raquel'});
// });

// app.listen(3000, function () {
//   console.log('El servidor esta levantado en el puerto 3000');
// });










//Ejemplo de como podemos visualizar un mensaje u otro en función de la url
// var express = require('express');
// var app = express();

// app.get("/", function (req, res) {
//   res.send('This is the homepage')
// });

// app.get("/detail", function (req, res) {
//   res.send('This is the detail page')
// });

// app.listen(3000, function () {
//   console.log('yeeeeha!!');
// });










// Ejemplo de como mostrar un fichero de html en una url y al pulsar el boton del formulario hacer un post y mostrar un mensaje
// var express = require('express');
// var app = express();

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + '/public/index.html');
// });

// app.post("/create-post", function (req, res) {
//   res.send("Hello World!");
// });

// app.listen(3000, function () {
//   console.log('yeeeeha!!');
// });










// Recuperando datos de un formulario, para ello hay que instalar body_parser, los datos del formulario los encontraremos en el body con la clave name que hayamos indicado
// var express = require('express');
// var app = express();
// var body_parser = require('body-parser');

// app.use(body_parser.urlencoded({extended:true}));

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + '/public/index.html');
// });

// app.post("/create-post", function (req, res) {
//   res.send("Hello World!");
//   console.log('$$$$$$$$$$$$$$$$$$$');
//   console.log(req.body);
//   console.log('$$$$$$$$$$$$$$$$$$$');
// });

// app.listen(3000, function () {
//   console.log('yeeeeha!!');
// });