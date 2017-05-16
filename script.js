function jouer()
{
  var randomNumber = Math.floor(Math.random() * 4 + 1);
  console.log(randomNumber);
  var imgId = "img" + randomNumber;
  console.log(imgId);
  var imgName = document.getElementById(imgId);
  console.log(imgName);
  document.getElementById("buttonDiv").html = "Trouver" + imgName;
}

