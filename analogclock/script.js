setInterval(myFunction, 1000);

function myFunction() {
  var date = new Date();

  var saat = date.getHours();
  var sn = date.getSeconds();
  var dk = date.getMinutes();

  var yelkovan = document.getElementById("saniye");
  var akrep = document.getElementById("akrep");
  var dakika = document.getElementById("yelkovan");

  yelkovan.style.transform = "rotate(" + (sn*6) + "deg)";
  dakika.style.transform = "rotate(" + dk * 6 + "deg)";
  akrep.style.transform = "rotate("+ (saat +(dk/60))*30  +"deg)";
}

myFunction();
