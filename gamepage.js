player1name = localStorage.getItem("player1key");
player2name = localStorage.getItem("player2key");
player1score = 0;
player2score = 0;
document.getElementById("player1_name").innerHTML = player1name + ":";
document.getElementById("player2_name").innerHTML = player2name + ":";
document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;
document.getElementById("playerquestion").innerHTML =
  "question turn:" + player1name;
document.getElementById("playeranswer").innerHTML =
  "answer turn:" + player2name;

function send() {
  number1 = document.getElementById("number1_input").value;
  number2 = document.getElementById("number2_input").value;
  actual_answer = parseInt(number1) * parseInt(number2);
  question = "<h3>q." + number1 + "X" + number2 + "</h3>";
  input_box = "<br>answer:<input id='input_box'>";
  button =
    "<br><br> <button class='btn btn-info' onclick='check()'> check</button>";
  document.getElementById("output").innerHTML = question + input_box + button;
  document.getElementById("number1_input").value = "";
  document.getElementById("number2_input").value = "";
}
Q_turn = "player1";
A_turn = "player2";
function check() {
  getanswer = document.getElementById("input_box").value;
  answer = getanswer.toLowerCase();
  console.log(answer);
  if (answer == actual_answer) {
    if (A_turn == "player1") {
      player1score = player1score + 1;
      document.getElementById("player1_score").innerHTML = player1score;
    } else {
      player2score = player2score + 1;
      document.getElementById("player2_score").innerHTML = player2score;
    }
  }
  if (Q_turn == "player1") {
    Q_turn = "player2";
    document.getElementById("playerquestion").innerHTML =
      "question turn:" + player2name;
  } else {
    Q_turn = "player1";
    document.getElementById("playerquestion").innerHTML =
      "question turn:" + player1name;
  }
  if (A_turn == "player1") {
    A_turn = "player2";
    document.getElementById("playeranswer").innerHTML =
      "answer turn:" + player2name;
  } else {
    A_turn = "player1";
    document.getElementById("playeranswer").innerHTML =
      "answer turn:" + player1name;
  }
  document.getElementById("output").innerHTML = "";
}
