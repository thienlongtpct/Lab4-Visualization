const express = require('express')
const app = express()

app.use(express.static(__dirname + '/src'))

app.listen(3000, () =>
	console.log('Сайт будет размещен по адресу http://127.0.0.1:3000')
);
