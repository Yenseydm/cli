// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
var TV = require("./shows");

var tv = new TV();


var command = process.argv[2];

switch (command){

    case "show":
        tvShow();
     break;
 
     case "actors":
        actors();
     break;

}

function tvShow(){
    if (command === show){
        console.log("TV show")
    }
}

function actors(){
    if (command === show){
        console.log("Actors")
    }
}
