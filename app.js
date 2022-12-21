const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyparser.json())

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html");
})

function fac(n){
	return(n<2)?1:fac(n-1)*n;
}

function calculateY(x) {
	if(!x) {
		return 0;
	}
	const xij =  parseFloat(x);
	return (1 + xij + ((Math.pow(xij, 2))/fac(2)) + ((Math.pow(xij, 3))/fac(3)));
}

app.post('/calculate_y', (req, res) => {
	console.log(`Отримано змінну x ${req.body.var_x}`);
	const result = calculateY(req.body.var_x);
	console.log(`Пораховано Y ${result}`);
	res.send({result: result});
})

app.listen(port, () => {
	console.log(`Сервер працює на порті ${port}`);
})