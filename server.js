const express = require('express')
const Sentiment = require('sentiment');
var sentiment = new Sentiment();
const app = express()
const PORT= 3000;


app.use(express.static(__dirname + '/public'));

// construct a basic
/*app.get('/', function (req,res){
    console.log ('I have been hit');
    res.send('Hello World')
})*/

app.get('/test', function (req,res){
    console.log('Test has been hit')
    res.send('Test Page')
})

// this function takes two numbers, adds them together and returns the result 
// Addition operation is working, tested and complete
let addition = function(num1,num2){
    result = num1+num2
    return result
}

let sentimentAnalysis = function(text){
    var result = sentiment.analyze(text);
    return result;
}

app.get('/adder', function(req,res){
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    console.log(num1) 
    console.log(num2)
    let sum = addition (num1,num2);
    res.send ('The sum is' +sum); 
})

app.get('/sentiment',function(req,res){
    let text=req.query.text;
    let analysis=sentimentAnalysis(text)
    console.log(analysis)
    res.json(analysis)
})

// start the server and listen om port 3000
app.listen(PORT)

