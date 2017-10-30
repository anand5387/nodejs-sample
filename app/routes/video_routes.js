var fs = require("fs");
var contents = fs.readFileSync("videos.json");
var jsonContent = JSON.parse(contents);
/* 
    For Experimental version - data extracted from videos.json
    For PROD version - MongoDb or MySQL DB can be used.
    To support Cross Origin as of now - all ip address will be allowed
    It can be restricted to specific address end points to restrict 
    anonymous address or hackers.
*/
module.exports = function(app, db) {
    app.get('/api/videos', (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(jsonContent.entries);
    });
};