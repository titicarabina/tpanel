var https = require('https');
var fs = require('fs');

const next = require('next')
const port = "3000"
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname })
const handle = app.getRequestHandler()


var options = {
    key: fs.readFileSync('./cert/localhost.key'),
    cert: fs.readFileSync('./cert/localhost.crt'),
};

app.prepare().then(() => {
    https.createServer(options, (req, res) => {
        // handle ....
    }).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on localhost:${port}`)
    })
})