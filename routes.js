const fs = require('fs');
const { url } = require('inspector');

function routes(req, res) {
	if (req.url === '/') {
		res.write('<html>');
		res.write('<head><title>Assignment 1</title></head>');
		res.write(
			'<body> <form action=/create-user method="POST"> <input type="text" name="username"> <button type="submit">Submit</button> </form> </body>'
		);
		res.write('</html>');
		return res.end();
	}

	if (req.url === '/users') {
		res.write('<html>');
		res.write('<head><title>Assignment 1</title></head>');
		res.write('<body> <ul> <li>User 1</li> </ul> </body>');
		res.write('</html>');
		return res.end();
	}

	if (req.url === '/create-user' && req.method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			body.push(chunk);
		});
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const userName = parsedBody.split('=')[1];
            console.log(userName)
		});
        res.statusCode = '302';
        res.setHeader('Location', '/');
        return res.end()
	}
}

module.exports = { routes };
