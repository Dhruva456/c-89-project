function login() {
  player1_name = document.getElementById("player1_input").value;
  player2_name = document.getElementById("player2_input").value;
  localStorage.setItem("player1key", player1_name);
  localStorage.setItem("player2key", player2_name);
  window.location = "Gmaepage login.html";
}
