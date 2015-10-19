var wpm = 230;
var text = document.getElementsByTagName("p")[0].innerHTML;
var myArray = text.split(" ")


var readTime = function(array) {
  var result = array.length/wpm;
  return result;
}

var timeToRead = Math.round(readTime(myArray))

document.getElementById('readTime').innerHTML = timeToRead;
