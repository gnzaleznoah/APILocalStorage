const btn = document.getElementById("button1");
btn.addEventListener("click", clickCounter);

function clickCounter(e) {
    // check property and set value accordingly
    if (typeof Storage !== "undefined") {
      let count = localStorage.getItem("clickcount");
      if (count) {
        localStorage.setItem("clickcount", Number(count) + 1);
      } else {
        localStorage.setItem("clickcount", 1);
      }
  
      // render results
      document.getElementById(
        "result"
      ).innerHTML = `You clicked the button ${localStorage.getItem(
        "clickcount"
      )} time(s).`;
    } else {
      document.getElementById("result").innerHTML =
        "Sorry, your browser does not support web storage";
    }// close outer if statement
  }