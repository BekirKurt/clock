function clock(argument) {
  var saat = document.getElementById("hour");
  var dakika = document.getElementById("minute");
  var saniye = document.getElementById("second");

  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  if (h < 10) {
    saat.innerHTML = "0" + h;
  } else {
    saat.innerHTML = h;
  }

  if (m < 10) {
    dakika.innerHTML = "0" + m;
  } else {
    dakika.innerHTML = m;
  }

  if (s < 10) {
    saniye.innerHTML = "0" + s;
  } else {
    saniye.innerHTML = s;
  }

  document.getElementById("day").innerHTML = date.getDate();

  var ay = date.getMonth();
  switch (ay) {
    case 0:
      document.getElementById("month").innerHTML = "January";
      break;
    case 1:
      document.getElementById("month").innerHTML = "February";
      break;
    case 2:
      document.getElementById("month").innerHTML = "March";
      break;
    case 3:
      document.getElementById("month").innerHTML = "April";
      break;
    case 4:
      document.getElementById("month").innerHTML = "May";
      break;
    case 5:
      document.getElementById("month").innerHTML = "June";
      break;
    case 6:
      document.getElementById("month").innerHTML = "July";
      break;
    case 7:
      document.getElementById("month").innerHTML = "August";
      break;
    case 8:
      document.getElementById("month").innerHTML = "September";
      break;
    case 9:
      document.getElementById("month").innerHTML = "October";
      break;
    case 10:
      document.getElementById("month").innerHTML = "November";
      break;
    case 11:
      document.getElementById("month").innerHTML = "December";
      break;
    default:
      document.write(".");
  }
  document.getElementById("year").innerHTML = date.getFullYear();
}

var interval = setInterval(clock, 100);
