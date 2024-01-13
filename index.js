// title
//

const http = require('http');

const { handleReqRes } = require('./helpers/handleReqRes');

// app obj

const app = {};

// configeration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// handel request response
app.handleReqRes = handleReqRes;
// stert serve
app.createServer();
