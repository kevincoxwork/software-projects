//const SERVER = "http://localhost:2500"; // development
const SERVER = "http://192.168.43.14:2500"; // pi dev
// const SERVER = "/sprint";
//urls.js
//url constants

module.exports = {
  SERVER: `${SERVER}`,
  LOGIN: `${SERVER}/login`,
  TOKEN: `${SERVER}/token`,
  SPOTDEVINFO: `${SERVER}/spotifyDeviceInfo`,
  SPOTSELECTSONG: `${SERVER}/selectSong`,
  SPOTGETPLAYLISTS: `${SERVER}/getPlayLists`,
  SPOTGETPLAYLISTCONTENTS: `${SERVER}/getPlayListsContents`,
  SPOTSKIPTRACK: `${SERVER}/skipTrack`,
  SPOTPAUSETRACK: `${SERVER}/pauseTrack`,
  SPOTRESUMETRACK: `${SERVER}/resumeTrack`,
  SPOTDEVSTATUS: `${SERVER}/deviceStatus`,
  SPOTSEEK: `${SERVER}/seekTrack`,
  SPOTFOLLOWTRACK: `${SERVER}/followTrack`
};
