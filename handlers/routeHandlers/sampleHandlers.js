const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, { message: 'This is a sample handlers url' });
};

module.exports = handler;
