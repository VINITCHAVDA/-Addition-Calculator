function sum() {
  var first = document.getElementById("first").value;
  var second = document.getElementById("second").value;
  var btn = document.getElementById("ban");
  var btn = Number(first) + Number(second);
  document.getElementById("p1").innerHTML =
    "the sum of" + first + "+" + second + "=" + btn;
}
