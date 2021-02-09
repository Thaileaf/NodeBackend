var url = 'http://mylogger.com/log/'


function log(message) {
    // Send an HTTP request
    console.log(message)
}

// Adds key log bind to log function
// module.exports.log = log;
module.exports = log
module.exports.endPointurl = url;