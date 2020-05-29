const library = {
  tracks: { t01: { id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three" },
    t02: { id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"},
    t03: { id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: { id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function(object) {
  for (let item in object) {
    let id = object[item].id;
    let name = object[item].name;
    let tracks = object[item].tracks;
    console.log(`${id}: ${name} - ${tracks.length} tracks`);
  }
}
//printPlaylists(library.playlists);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(object) {
  for (let trackId in object) {
    let item = object[trackId];
    let id = item.id;
    let name = item.name;
    let artist = item.artist;
    let album = item.album;
    console.log(`${id}: ${name} by ${artist} (${album})`);
  }
}

//printTracks(library.tracks);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let playList = library.playlists;
  let playListId = playlistId;
  let playlistName = playList[playlistId].name;
  let playListTrack = playList[playlistId].tracks;
  console.log(`${playListId}: ${playlistName} - ${playListTrack.length} tracks`);
  for (let track in library.playlists[playlistId].tracks) {
    let tracks = library.playlists[playlistId].tracks;
    let trackId = tracks[track];
    let trackName = library.tracks[trackId].name;
    let trackArtist = library.tracks[trackId].artist;
    let trackAlbum = library.tracks[trackId].album;
    console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);
  }
}

// printPlaylist("p02")

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(library.playlists[playlistId].tracks);
}

//addTrackToPlaylist('t03', "p01")

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  library.tracks['t04'] = {id: 't04', name: name, artist: artist, album: album};
  console.log(library.tracks['t04']);

}
addTrack("Welcome to the Jungle","Guns'N Roses","Appetite for Destruction");

// adds a playlist to the library
const addPlaylist = function(name) {
  library.playlists['p03'] = {id: 'p03', name: name, tracks: ['t04'] }
  console.log(library.playlists['p03']);
}

addPlaylist("Rock Music");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}