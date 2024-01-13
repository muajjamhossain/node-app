// title
//

const http = require('http');

const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');

// app obj

const app = {};

// configeration
// app.config = {
//     port: 3000,
// };

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handel request response
app.handleReqRes = handleReqRes;
// stert serve
app.createServer();
