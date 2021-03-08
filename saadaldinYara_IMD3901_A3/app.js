const express   = require('express');
const app       = express();
const http      = require('http');
const server    = require('http').createServer(app);  
const io        = require('socket.io')(server);
const LISTEN_PORT   = 8080; 


//Starts server
    server.listen(LISTEN_PORT); 
//Sets the root path of the server
    app.use(express.static(__dirname + '/public')); 
//Prints our the listening port in the console
    console.log("Listening on port: " + LISTEN_PORT );


//The paths
    //Index.html
        app.get( '/', function( req, res ){ 
            res.sendFile( __dirname + '/public/index.html' );
        });
    //Game.html
        app.get( '/Game', function( req, res ){ 
            res.sendFile( __dirname + '/public/Game.html' );
        });



//Socket.io
    //Creates a connection
        io.on('connection', (socket) => { 
            //When a player is connected, the console will print out their ID and tells us that they are connected
                 console.log( socket.id + "connected"); 
            //When a player disconnects, the console will print out their ID and tells us that they disconnected
                socket.on('disconnect', () => {
                    console.log( socket.id + "disconnected" );
                });

            //Custom events
                //When one of the players finds pikachu
                    socket.on("Pikachu_Found", (data) => { 
                        //Console prints out that the pikachu event has been recieved
                            console.log("Pikachu event received");       ///(Doesn't work :(((((!)
                        //Then all other clients will recieve a message that they lost
                             io.sockets.emit("LOSER" , 'You Lost');     ///(Doesn't work :(((((!)            
                    }); 
        });