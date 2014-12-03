/**
 * Created by Noe on 12/3/14.
 */
var http = require('http');
var server = http.createServer(function(req, res){
    // our hello world response will go here
    res.write('Hello World'); //writes a response to the socket that connects to the client
    res.end(); //send response back and closes the http connection
});
server.listen(9000, function(){
    console.log('listening on port 9000');
});