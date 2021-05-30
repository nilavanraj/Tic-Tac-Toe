import React from 'react';
import { useHistory } from 'react-router-dom';



function Human() {
    const history = useHistory();
    const navigationlink = () => history.push('/');
    const [recent, setrecent] = React.useState("");
    const [dataText1, setdataText1] = React.useState("");
    const [dataText2, setdataText2] = React.useState("");
    const [dataText3, setdataText3] = React.useState("");
    const [dataText4, setdataText4] = React.useState("");
    const [dataText5, setdataText5] = React.useState("");
    const [dataText6, setdataText6] = React.useState("");
    const [dataText7, setdataText7] = React.useState("");
    const [dataText8, setdataText8] = React.useState("");
    const [dataText9, setdataText9] = React.useState("");
    var player = "X";
    var player2 = "O";
    const handleDateChange1 = () => {
        if (!dataText1) {
            if (recent == player || !recent) {
                setdataText1(player2);
                setrecent(player2);
                var data = { "m1": player2, "m2": dataText2, "m3": dataText3, "m4": dataText4, "m5": dataText5, "m6": dataText6, "m7": dataText7, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }
            else if (recent == player2) {
                setdataText1(player);
                setrecent(player);
                var data = { "m1": player, "m2": dataText2, "m3": dataText3, "m4": dataText4, "m5": dataText5, "m6": dataText6, "m7": dataText7, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }
            
        }
    };
    const handleDateChange2 = () => {
        if (!dataText2) {
            if (recent == player || !recent) {
                setdataText2(player2);
                setrecent(player2);
                var data = { "m1": dataText1, "m2": player2, "m3": dataText3, "m4": dataText4, "m5": dataText5, "m6": dataText6, "m7": dataText7, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }
            else if (recent == player2) {
                setdataText2(player);
                setrecent(player);
                var data = { "m1": dataText1, "m2": player, "m3": dataText3, "m4": dataText4, "m5": dataText5, "m6": dataText6, "m7": dataText7, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }
        }
    };
    const handleDateChange3 = () => {
        if (!dataText3) {
            if (recent == player || !recent) {
                setdataText3(player2);
                setrecent(player2);
                var data = { "m1": dataText1, "m2": dataText2, "m3": player2, "m4": dataText4, "m5": dataText5, "m6": dataText6, "m7": dataText7, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }
            else if (recent == player2) {
                setdataText3(player);
                setrecent(player);
                var data = { "m1": dataText1, "m2": dataText2, "m3": player, "m4": dataText4, "m5": dataText5, "m6": dataText6, "m7": dataText7, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }           
        }
    };
    const handleDateChange4 = () => {
        if (!dataText4) {
            if (recent == player || !recent) {
                setdataText4(player2);
                setrecent(player2);
                var data = { "m1": dataText1, "m2": dataText2, "m3": dataText3, "m4": player2, "m5": dataText5, "m6": dataText6, "m7": dataText7, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }
            else if (recent == player2) {
                setdataText4(player);
                setrecent(player);
                var data = { "m1": dataText1, "m2": dataText2, "m3": dataText3, "m4": player, "m5": dataText5, "m6": dataText6, "m7": dataText7, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }          
        }
    };
    const handleDateChange5 = () => {
        if (!dataText5) {
            if (recent == player || !recent) {
                setdataText5(player2);
                setrecent(player2);
                var data = { "m1": dataText1, "m2": dataText2, "m3": dataText3, "m4": dataText4, "m5": player2, "m6": dataText6, "m7": dataText7, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }
            else if (recent == player2) {
                setdataText5(player);
                setrecent(player);
                var data = { "m1": dataText1, "m2": dataText2, "m3": dataText3, "m4": dataText4, "m5": player, "m6": dataText6, "m7": dataText7, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }       
        }
    };
    const handleDateChange6 = () => {
        if (!dataText6) {
            if (recent == player || !recent) {
                setdataText6(player2);
                setrecent(player2);
                var data = { "m1": dataText1, "m2": dataText2, "m3": dataText3, "m4": dataText4, "m5": dataText5, "m6": player2, "m7": dataText7, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }
            else if (recent == player2) {
                setdataText6(player);
                setrecent(player);
                var data = { "m1": dataText1, "m2": dataText2, "m3": dataText3, "m4": dataText4, "m5": dataText5, "m6": player, "m7": dataText7, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }         
        }
    };
    const handleDateChange7 = (date) => {
        if (!dataText7) {
            if (recent == player || !recent) {
                setdataText7(player2);
                setrecent(player2);
                var data = { "m1": dataText1, "m2": dataText2, "m3": dataText3, "m4": dataText4, "m5": dataText5, "m6": dataText6, "m7": player2, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }
            else if (recent == player2) {
                setdataText7(player);
                setrecent(player);
                var data = { "m1": dataText1, "m2": dataText2, "m3": dataText3, "m4": dataText4, "m5": dataText5, "m6": dataText6, "m7": player, "m8": dataText8, "m9": dataText9 };
                Send_message(data);
            }           
        }
    };
    const handleDateChange8 = (date) => {
        if (!dataText8) {
            if (recent == player || !recent) {
                setdataText8(player2);
                setrecent(player2);
                var data = { "m1": dataText1, "m2": dataText2, "m3": dataText3, "m4": dataText4, "m5": dataText5, "m6": dataText6, "m7": dataText7, "m8": player2, "m9": dataText9 };
                Send_message(data);
            }
            else if (recent == player2) {
                setdataText8(player);
                setrecent(player);
                var data = { "m1": dataText1, "m2": dataText2, "m3": dataText3, "m4": dataText4, "m5": dataText5, "m6": dataText6, "m7": dataText7, "m8": player, "m9": dataText9 };
                Send_message(data);
            }            
        }
    };
    const handleDateChange9 = (date) => {
        if (!dataText9) {
            if (recent == player || !recent) {
                setdataText9(player2);
                setrecent(player2);
                var data = { "m1": dataText1, "m2": dataText2, "m3": dataText3, "m4": dataText4, "m5": dataText5, "m6": dataText6, "m7": dataText7, "m8": dataText8, "m9": player2 };
                Send_message(data);
            }
            else if (recent == player2) {
                setdataText9(player);
                setrecent(player);
                var data = { "m1": dataText1, "m2": dataText2, "m3": dataText3, "m4": dataText4, "m5": dataText5, "m6": dataText6, "m7": dataText7, "m8": dataText8, "m9": player };
                Send_message(data);
            }         
        }
    };
    const liststyle = {
        position: "relative",
        verticalAlign: "top",
        marginTop: 10,
        marginLeft: 10,
        width: "60px",

        height: "60px",

        fontFamily: "Arial"
    };
  
    function Send_message(data) {

        console.log(data);


        const url = 'https://nilavan-tic.herokuapp.com/human';
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");


        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                //var json = JSON.parse(this.responseText);
                let temp = this.responseText
                if (temp) { alert(temp + " WON"); reset();}
            }
        };


        xhr.send(JSON.stringify(data));

    }
     React.useEffect(() => {
        if (dataText1 && dataText2 && dataText3 && dataText4 && dataText5 && dataText6 && dataText7 && dataText8 && dataText9) {
            alert("Match DRAW");
            reset();
        }
    });
    function reset() {
        setdataText1();
        setdataText2();
        setdataText3();
        setdataText4();
        setdataText5();
        setdataText6();
        setdataText7();
        setdataText8();
        setdataText9();
    }
    return (  
        <div className="App">
        
            <h1>Tic Tac Toe </h1><br></br>
            <h3>Human vs Human</h3><br></br>
            <button type="button" onClick={navigationlink}>
                Computer Vs Human </button><br></br>
          <button onClick={handleDateChange1} style={liststyle}>{dataText1}</button>
            <button onClick={handleDateChange2} style={liststyle}>{dataText2}</button>
            <button onClick={handleDateChange3} style={liststyle}>{dataText3}</button><br></br>
            <button onClick={handleDateChange4} style={liststyle}>{dataText4}</button>
            <button onClick={handleDateChange5} style={liststyle}>{dataText5}</button>
            <button onClick={handleDateChange6} style={liststyle}>{dataText6}</button><br></br>
            <button onClick={handleDateChange7} style={liststyle}>{dataText7}</button>
            <button onClick={handleDateChange8} style={liststyle}>{dataText8}</button>
            <button onClick={handleDateChange9} style={liststyle}>{dataText9}</button><br></br>

            </div>
    )
}
export default Human;