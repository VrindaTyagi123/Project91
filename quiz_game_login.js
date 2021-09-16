player1_score=0;
player2_score=0;

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

function addUser()
{
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location.replace("quiz_game_page.html");
}


function send()
{
    number1 = document.getElementsById("number1").value;
    number2 = document.getElementsById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type= 'text' id='input_check_box'>";
    check_button = "<br> <br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementsById("output").innerHTML = row;

    document.getElementsById("number1").value = "";
    document.getElementsById("number2").value = "";
}

