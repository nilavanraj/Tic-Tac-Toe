var express = require('express');
const PORT = process.env.PORT || 5000;
var app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());

app.post('/', function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*'); 
    let myJson =request.body;

    const ArrayTotal = [[myJson.m1, myJson.m2, myJson.m3], [myJson.m4, myJson.m5, myJson.m6], [myJson.m7, myJson.m8, myJson.m9]];
    console.log(ArrayTotal);
const hard = 1;

check(ArrayTotal,"O","X");
function check(Total,me,player) {
    var Winsearch = Win(Total);
    if (!Winsearch) {
       
        var temp = Checkwin(ArrayTotal, Total, me);   
        console.log(temp+"win");
        var temp1 = Checkwin(ArrayTotal, Total, player);    
        console.log(temp1+"draw");
        if (temp) { var winaddon = [1]; winaddon.push(temp); response.send(winaddon); console.log("win"+temp)}
        else if (temp1 && hard == 1) { var drawaddon = [2]; drawaddon.push(temp1); response.send(drawaddon);  console.log("draw" + temp1)}
        else {
            let temp = random(Total);
           
            var ranaddon = [3];
            ranaddon.push(temp); 
            response.send(ranaddon);
          
        }
           
    } else {
        var wonaddon = [4];
        wonaddon.push(Winsearch); 
        response.send(wonaddon);
    }
   
}
function Win(ArrayTotal) {
    if (ArrayTotal[0][0] == ArrayTotal[0][1] && ArrayTotal[0][1] == ArrayTotal[0][2] ) return ArrayTotal[0][0];
    else if (ArrayTotal[1][0] == ArrayTotal[1][1] && ArrayTotal[1][1] == ArrayTotal[1][2]) return ArrayTotal[1][0];
    else if (ArrayTotal[2][0] == ArrayTotal[2][1] && ArrayTotal[2][1] == ArrayTotal[2][2] ) return ArrayTotal[2][0];

    else if (ArrayTotal[0][0] == ArrayTotal[1][0] && ArrayTotal[1][0] == ArrayTotal[2][0] ) return ArrayTotal[0][0];
    else if (ArrayTotal[0][1] == ArrayTotal[1][1] && ArrayTotal[1][1] == ArrayTotal[2][1] ) return ArrayTotal[0][1];
    else if (ArrayTotal[0][2] == ArrayTotal[1][2] && ArrayTotal[1][2] == ArrayTotal[2][2] ) return ArrayTotal[0][2];

    else if (ArrayTotal[0][0] == ArrayTotal[1][1] && ArrayTotal[1][1] == ArrayTotal[2][2]) return ArrayTotal[0][0];
    else if (ArrayTotal[0][2] == ArrayTotal[1][1] && ArrayTotal[1][1] == ArrayTotal[2][0]) return ArrayTotal[0][2];
    else return false


}
var WinArrr = [];
function check1(ArrayTotal,Total, j, i, x) {
    let ColArrayTotal = [...ArrayTotal];
    const temp = [...Total]; 
    temp[j] = x;
    ColArrayTotal.splice(i, 1, temp);
 
    if (Win(ColArrayTotal)) {
         WinArrr = [i, j];       
        return 1;
    } else {
        return 0;
    }
    
    

}

function Checkwin(ArrayTotal,Total, x) { 
    Total.map((Total, i) => {        
        if (!Total[0]) result = (check1(ArrayTotal,Total, 0, i, x));
        if (!Total[1]) result = (check1(ArrayTotal,Total, 1, i, x));
        if (!Total[2]) result = (check1(ArrayTotal, Total, 2, i, x));
    });
    return(WinArrr);
}

function random(Total) {
    var ranArray = [];
    Total.map((Total, i) => {
        if (!Total[0]) { var temp = [i, 0]; ranArray.push(temp); }
        if (!Total[1]) { var temp = [i, 1]; ranArray.push(temp); }
        if (!Total[2]) { var temp = [i, 2]; ranArray.push(temp); }
    });
    
    var randomplace = Math.floor(Math.random() * ((ranArray.length - 1) - 0)) + 0;
    var result = ranArray[randomplace];
    
    if (randomplace > -1 && result != "undefined") {
        console.log(result + " te");
        return result;
    }
    else
        return(4);
    }
});
app.post('/human', function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    let myJson = request.body;
    
    const ArrayTotal = [[myJson.m1, myJson.m2, myJson.m3], [myJson.m4, myJson.m5, myJson.m6], [myJson.m7, myJson.m8, myJson.m9]];
    console.log(ArrayTotal);
    function Win(ArrayTotal) {
        if (ArrayTotal[0][0] == ArrayTotal[0][1] && ArrayTotal[0][1] == ArrayTotal[0][2] && ArrayTotal[0][0] && ArrayTotal[0][1] && ArrayTotal[0][2]) return ArrayTotal[0][0];
        else if (ArrayTotal[1][0] == ArrayTotal[1][1] && ArrayTotal[1][1] == ArrayTotal[1][2] && ArrayTotal[1][0] && ArrayTotal[1][1] && ArrayTotal[1][2]) return ArrayTotal[1][0];
        else if (ArrayTotal[2][0] == ArrayTotal[2][1] && ArrayTotal[2][1] == ArrayTotal[2][2] && ArrayTotal[2][0] && ArrayTotal[2][1] && ArrayTotal[2][2]) return ArrayTotal[2][0];

        else if (ArrayTotal[0][0] == ArrayTotal[1][0] && ArrayTotal[1][0] == ArrayTotal[2][0] && ArrayTotal[0][0] && ArrayTotal[1][0] && ArrayTotal[2][0]) return ArrayTotal[0][0];
        else if (ArrayTotal[0][1] == ArrayTotal[1][1] && ArrayTotal[1][1] == ArrayTotal[2][1] && ArrayTotal[0][1] && ArrayTotal[1][1] && ArrayTotal[2][1]) return ArrayTotal[0][1];
        else if (ArrayTotal[0][2] == ArrayTotal[1][2] && ArrayTotal[1][2] == ArrayTotal[2][2] && ArrayTotal[0][2] && ArrayTotal[1][2] && ArrayTotal[2][2]) return ArrayTotal[0][2];

        else if (ArrayTotal[0][0] == ArrayTotal[1][1] && ArrayTotal[1][1] == ArrayTotal[2][2] && ArrayTotal[0][0] && ArrayTotal[1][1] && ArrayTotal[2][2]) return ArrayTotal[0][0];
        else if (ArrayTotal[0][2] == ArrayTotal[1][1] && ArrayTotal[1][1] == ArrayTotal[2][0] && ArrayTotal[0][2] && ArrayTotal[1][1] && ArrayTotal[2][0]) return ArrayTotal[0][2];
        else return 


    }
    var result = Win(ArrayTotal);
    console.log(ArrayTotal[1][0] == ArrayTotal[1][1] && ArrayTotal[1][1] == ArrayTotal[1][2]);
    response.send(result);
});
app.listen(PORT);