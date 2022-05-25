// Disabling the "submit" action to avoid submitting the form //

document.getElementById("book").addEventListener("click", function (event) {
  event.preventDefault();
});

// Creating and styling a "purchase confirmation" message //

document.getElementById("book").onclick = function () {
  document.getElementById("book").innerHTML =
    "Lines reserved successfully! Check your email for confirmation ✅";
  document.getElementById("book").style.width = "410px";
  document.getElementById("book").style.height = "110px";
  document.getElementById("book").style.background = "#006BBB";
  document.getElementById("book").style.borderColor = "white";
  document.getElementById("book").style.color = "white";
  document.getElementById("book").style.fontSize = "25px";
  document.getElementById("booking-text").style.display = "none";
  document.getElementById("email").style.display = "none";
  document.getElementById("number-of-guests").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("date").style.display = "none";
  document.getElementById("time").style.display = "none";
  document.getElementById("return").style.display = "initial";

  // Return button will refresh the website //

  document.getElementById("return").onclick = function timedRefresh(
    timeoutPeriod
  ) {
    setTimeout("location.reload(true);", timeoutPeriod);
  };
  window.onload = timedRefresh(1000);
};
