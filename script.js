document.getElementById("book").onclick = function () {
  document.getElementById("book").innerHTML =
    "✅ Purchase successful! Check your email for confirmation";
  document.getElementById("book").style.width = "400px";
  document.getElementById("book").style.height = "100px";
  document.getElementById("book").style.background = "blue";
  document.getElementById("book").style.color = "white";
  document.getElementById("booking-text").style.display = "none";
  document.getElementById("email").style.display = "none";
  document.getElementById("number-of-guests").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("date").style.display = "none";
  document.getElementById("time").style.display = "none";

  function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
  }
  window.onload = timedRefresh(4000);
};
