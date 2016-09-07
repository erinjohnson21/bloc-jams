var forEach = function (array, callback) {
  for(var i = 0; i < array.length; i++) {
    callback(array[i]);
  };
}

var filterTimeCode = function(timeInSeconds) {
    var totalSeconds = parseFloat(timeInSeconds);
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = Math.floor(totalSeconds % 60);

    if (seconds.toString().length === 1) {
      seconds = "0" + seconds;
    }

    return minutes + ':' + seconds;
};
