var library = {
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
  printTracks: function() {
       for (var tracks in this.tracks) {
              var tId = this.tracks[tracks].id;
              var tName = this.tracks[tracks].name;
              var tArtist = this.tracks[tracks].artist;
              var tAlbum = this.tracks[tracks].album;
              console.log(tId + ': ' + tName + ' by ' + tArtist + ' (' + tAlbum + ')')
              }  
       },
  printPlaylists: function () {
         for (var list in this.playlists) {
                var pId = this.playlists[list].id;
                var pName = this.playlists[list].name;
                var nTracks = this.playlists[list].tracks.length;
                console.log(pId + ': ' + pName + ' - ' + nTracks + ' tracks')
         }
       },
  printPlaylist: function (playlistId) {
         var plName = this.playlists[playlistId].name;
         var plTracks = this.playlists[playlistId].tracks.length;
         console.log(playlistId + ': ' + plName + ' - ' + plTracks + ' tracks')
         for (var tDetails in this.playlists[playlistId].tracks) {
              var trId = this.playlists[playlistId].tracks[tDetails];
              console.log(trId + ': ' + this.tracks[trId].name + ' by ' + this.tracks[trId].artist + ' (' + this.tracks[trId].album + ')');
              }
       },
  addTrackToPlaylist: function (trackId, playlistId) {
         this.playlists[playlistId].tracks.push(trackId);
       },
  uid: function () {
         return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },
  addTrack: function (name, artist, album) {
         newId = uid();
         this.tracks[newId] = {
              id: newId,
              name: name,
              artist: artist,
              album: album
         }
       },
  addPlaylist: function (name) {
         newPlId = uid();
         this.playlists[newPlid] = {
                id: newPlId,
                name: name,
                tracks: []
         }
       }

}

console.log(library);


// var addPlaylist = function (name) {
//        newPlId = uid();
//        library.playlists[newPlId] = {
//               id: newPlId,
//               name: name,
//               tracks: []
//        }
//        // console.log(library.playlists);
// }

// adds a track to the library

// var addTrack = function (name, artist, album) {
//        newId = uid();
//        library.tracks[newId] = {
//               id: newId,
//               name: name,
//               artist: artist,
//               album: album
//        } 
//        // console.log(library.tracks);
// }

// addTrack('scallywag', 'pirates', 'yoho');


// adds a playlist to the library




// var uid = function() {
//        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//      }

// adds an existing track to an existing playlist

// var addTrackToPlaylist = function (trackId, playlistId) {
//        library.playlists[playlistId].tracks.push(trackId);
//        // console.log(library.playlists[playlistId].tracks)
// }

// addTrackToPlaylist("321", "p01");

// generates a unique id
// (use this for addTrack and addPlaylist)







// var printPlaylist = function (playlistId) {
//        // find proper playlist ID
//        // playlist name
//        var plName = library.playlists[playlistId].name;
//        var plTracks = library.playlists[playlistId].tracks.length;
//        console.log(playlistId + ': ' + plName + ' - ' + plTracks + ' tracks')
//        // console.log(plName);
//        // console.log(plTracks);
//        // find playlist track details
//        for (var tDetails in library.playlists[playlistId].tracks) {
//               var trId = library.playlists[playlistId].tracks[tDetails];
//               console.log(trId + ': ' + library.tracks[trId].name + ' by ' + library.tracks[trId].artist + ' (' + library.tracks[trId].album + ')');
//        }
// }

// printPlaylist('p01')



// var printPlaylists = function () {
//        for (var list in library.playlists) {
//               var pId = library.playlists[list].id;
//               var pName = library.playlists[list].name;
//               var nTracks = library.playlists[list].tracks.length;
//               console.log(pId + ': ' + pName + ' - ' + nTracks + ' tracks')
//        }
// }



// FUNCTIONS TO IMPLEMENT:

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// var printTracks = function () {
//        for (var tracks in library.tracks) {
//               var tId = library.tracks[tracks].id;
//               var tName = library.tracks[tracks].name;
//               var tArtist = library.tracks[tracks].artist;
//               var tAlbum = library.tracks[tracks].album;
//               console.log(tId + ': ' + tName + ' by ' + tArtist + ' (' + tAlbum + ')')
//        }
// }


// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)





// addPlaylist("yuck");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
