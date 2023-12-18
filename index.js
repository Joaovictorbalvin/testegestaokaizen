const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { createServer } = require('http');
const cors = require('cors');
const httpServer = createServer(app);
const port = 3000;

// Router
const randomRouter = require('./src/router/randomNumberRouter');

app.use(cors());
app.use(bodyParser.json());
app.use('/random', randomRouter);

httpServer.listen(port, () => {
    console.log("Server está sendo executado na porta " + port);
});

module.exports = app;