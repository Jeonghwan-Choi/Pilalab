// const express = require('express');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 8001;

// console.log('__dirname', __dirname);

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'Pilalab_React/public/index.html'));
// });

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });


var express = require('express')
var app = express()

app.use(express.static(__dirname + '/pilalab_front_project/build'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running : port 3000')
})
