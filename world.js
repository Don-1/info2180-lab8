// function myFunc()
// {
//     // required functionality when window loads
// }
// window.onload = myFunc;

function onload() {
      var button = document.getElementById("lookup");
      button.addEventListener("onclick", function() { alert("alert");});
}
window.onload = onload;