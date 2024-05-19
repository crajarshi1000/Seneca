/*********************************************************************************
 * 
* WEB700 – Assignment 1

* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Rajarshi Chakraborty Student ID: 127985232  Date: 19/05/2024
*
********************************************************************************/


servVerbs = ["GET","GET","GET","POST","GET","POST"];
servPaths = ["/","/about","/contact","/login","/panel","/logout"];
servResponse = ["Welcome to WEB700 Assignment 1","This assignment was prepared by Rajarshi","Rajarshi Chakraborty: rchakraborty1@myseneca.ca","User Logged In","Main Panel","Logout Complete"];


function httpRequest(httpVerb,path){
    var counter = servPaths.length;
    var code = 200;
    var ErrorCode =404;
    for(var i=0; i < counter; i++){
        if (servVerbs[i] == httpVerb && servPaths[i] == path) {
            var response = `${code}: ${servResponse[i]}`
            return response
        } else {
            
        }
    }
    return (`${ErrorCode} : Unable to process ${httpVerb} request for ${path}` )
}
console.log(httpRequest("GET", "/about"))

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function automateTests(){
    testVerbs = ["GET","POST"]
    testPaths = ["/","/about","/contact","/login","/panel","/logout","/randomPath1","/randomPath2"]

    function randomRequest(){
        var randVerb = testVerbs[getRandomInt(2)];
        var randPath = testPaths[getRandomInt(8)];
        var output = httpRequest(randVerb,randPath)
        console.log(output)

    }
    setInterval(randomRequest,1000);
} 
    
automateTests()
