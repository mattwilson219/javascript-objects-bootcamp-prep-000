var playlist = {
  artistName: "songTitle"
}
  
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle
}
 function removeFromPlaylist() {
   delete playlist.artistName;
 }