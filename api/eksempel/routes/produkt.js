const db = require('../config/sql').connect();

module.exports = function (app) {

    // POST
    app.post('/url/adresse', function (req, res) {
        let postData = req.body.postName;
        // kode
    });

    // GET
    app.get('/url', function (req, res) {
        // kode
    });

}
