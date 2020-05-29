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
  },
  printPlaylists: function(object) {
    for (let item in object) {
      let id = object[item].id;
      let name = object[item].name;
      let tracks = object[item].tracks;
      console.log(`${id}: ${name} - ${tracks.length} tracks`);
    }
  },
  printTracks: function(object) {
    for (let trackId in object) {
      let item = object[trackId];
      let id = item.id;
      let name = item.name;
      let artist = item.artist;
      let album = item.album;
      console.log(`${id}: ${name} by ${artist} (${album})`);
    }
  },
  printPlaylist: function(playlistId) {
    let playList = this.playlists;
    let playListId = playlistId;
    let playlistName = playList[playlistId].name;
    let playListTrack = playList[playlistId].tracks;
    console.log(`${playListId}: ${playlistName} - ${playListTrack.length} tracks`);
    for (let track in this.playlists[playlistId].tracks) {
      let tracks = this.playlists[playlistId].tracks;
      let trackId = tracks[track];
      let trackName = this.tracks[trackId].name;
      let trackArtist = this.tracks[trackId].artist;
      let trackAlbum = this.tracks[trackId].album;
      console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
    console.log(this.playlists[playlistId].tracks);
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
    library.tracks['t04'] = {id: 't04', name: name, artist: artist, album: album};
    console.log(library.tracks['t04']);
  },
  addPlaylist: function(name) {
    library.playlists['p03'] = {id: 'p03', name: name, tracks: ['t04'] }
    console.log(library.playlists['p03']);
  },
  printSearchResults: function(query) {
    for (let track in library.tracks){
      let search = library.tracks[track].name.search(query)
      if (search === -1){
      } else {
        console.log(library.tracks[track].name);
      }
    }
  }
}

library.printPlaylists(library.playlists);
library.printTracks(library.tracks);
library.printPlaylist("p02");
library.addTrackToPlaylist('t03', "p01");
library.addTrack("Welcome to the Jungle","Guns'N Roses","Appetite for Destruction");
library.addPlaylist("Rock Music");
library.printSearchResults('trol');
