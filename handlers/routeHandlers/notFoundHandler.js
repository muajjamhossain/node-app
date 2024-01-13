const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(404, { message: '404 Not Found page' });
};

module.exports = handler;
