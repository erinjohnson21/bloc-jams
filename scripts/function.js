var getLastSongNumber = function () {
  if (index == 0) {
  return currentAlbum.songs.length
} else if {
  return index;
} else if (index == (currentAlbum.songs.length - 1)) {
  return 1;//(?)
} else {
  return index + 1;
}

//From orignal function
var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);

setSong(currentSongIndex + 1);
currentSongFromAlbum = currentAlbum.songs[currentSongIndex];

// Update the Player Bar information
updatePlayerBarSong();

var lastSongNumber = getLastSongNumber(currentSongIndex);
var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
var $lastSongNumberCell = getSongNumberCell(lastSongNumber);

$nextSongNumberCell.html(pauseButtonTemplate);
$lastSongNumberCell.html(lastSongNumber);
