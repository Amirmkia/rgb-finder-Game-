let globalCurrent = 0;
// document.getElementById("wrong-message").style.display = "block";
function RandomRGBColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var r2 = Math.floor(Math.random() * 256);
  var g2 = Math.floor(Math.random() * 256);
  var b2 = Math.floor(Math.random() * 256);
  var r3 = Math.floor(Math.random() * 256);
  var g3 = Math.floor(Math.random() * 256);
  var b3 = Math.floor(Math.random() * 256);

  document.getElementById("rgb-finder").innerHTML =
    "RGB( " + r + " , " + g + " , " + b + " )";

  var currentLocation = Math.floor(Math.random() * 4);
  switch (currentLocation) {
    case 1:
      console.log("1");
      document.getElementById(
        "one"
      ).style.backgroundColor = `rgb(${r},${g},${b})`;
      document.getElementById(
        "two"
      ).style.backgroundColor = `rgb(${r2},${g2},${b2})`;
      document.getElementById(
        "three"
      ).style.backgroundColor = `rgb(${r3},${g3},${b3})`;
      globalCurrent = 1;
      break;
    case 2:
      console.log("2");
      document.getElementById(
        "two"
      ).style.backgroundColor = `rgb(${r},${g},${b})`;
      document.getElementById(
        "one"
      ).style.backgroundColor = `rgb(${r2},${g2},${b2})`;
      document.getElementById(
        "three"
      ).style.backgroundColor = `rgb(${r3},${g3},${b3})`;
      globalCurrent = 2;
      break;

    case 3:
      console.log("3");
      document.getElementById(
        "three"
      ).style.backgroundColor = `rgb(${r},${g},${b})`;
      document.getElementById(
        "two"
      ).style.backgroundColor = `rgb(${r2},${g2},${b2})`;
      document.getElementById(
        "one"
      ).style.backgroundColor = `rgb(${r3},${g3},${b3})`;
      globalCurrent = 3;
      break;
  }
}

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
  document.getElementById("currect-message").style.display = "block";
}

function myOnClick() {
  let x = 0;
  document.getElementById("one").addEventListener("click", function (event) {
    console.log("div one is clicked");
    if (globalCurrent == 1) {
      console.log("you clicked currect div");
      x = 1;
      // document.getElementById("currect-message").style.display = "block";
      sleep(5000);
      // window.location.reload();
    } else {
      console.log("wrong");
      // sleep(5000);
      // document.getElementById("wrong-message").style.display = "block";
      sleep(5000);
      // window.location.reload();
    }
  });
  document.getElementById("two").addEventListener("click", function (event) {
    console.log("div two is clicked");
    if (globalCurrent == 2) {
      console.log("you clicked currect div");
      sleep(5000);
      document.getElementById("currect-message").style.display = "block";
      sleep(5000);
      window.location.reload();
    } else {
      console.log("wrong");
      sleep(5000);
      document.getElementById("wrong-message").style.display = "block";
      sleep(5000);
      window.location.reload();
    }
  });
  document.getElementById("three").addEventListener("click", function (event) {
    console.log("div three is clicked");
    if (globalCurrent == 3) {
      console.log("you clicked currect div");
      sleep(5000);
      document.getElementById("currect-message").style.display = "block";
      sleep(5000);
      window.location.reload();
    } else {
      console.log("wrong");
      sleep(5000);
      document.getElementById("wrong-message").style.display = "block";
      sleep(5000);
      window.location.reload();
    }
  });
  if (x == 0) {
    sleep(1000);
    document.getElementById("wrong-message").style.display = "block";
    sleep(1000);
    window.location.reload();
  } else if (x == 1) {
    sleep(1000);
    document.getElementById("currect-message").style.display = "block";
    sleep(1000);
    window.location.reload();
  }
  // sleep(5000);
}
