const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyparser.json())

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html");
})

function secondsToHours(seconds) {
	if(!seconds) {
		return 0;
	}
	const res =  parseInt(seconds, 10);
	return Math.floor(res % (3600*24) / 3600);
}

app.post('/seconds', (req, res) => {
	console.log(`Отримано секунди ${req.body.seconds}`);
	const result = secondsToHours(req.body.seconds);
	console.log(`Пораховано години ${result}`);
	res.send({result: result});
})

app.listen(port, () => {
	console.log(`Сервер працює на порті ${port}`);
})