function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = {};

  this.addPlaylist = (playlist) => {
    this.playlists[playlist.name] = playlist;
  };
}

function Playlist (name) {
  this.name = name;
  this.tracks = {};

  this.duration = () => {
    let total = 0;
    for (let track in this.tracks) {
    total += track.length;
    }
    return total;
  };

  this.addTrack = (track) => {
    this.tracks[track.title] = track;
  }
}

function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

// adding removePlaylist to Library
Library.prototype.removePlaylist = function (playlistName) {
  delete this.playlists[playlistName];
}

// adding removeTrack to Playlist
Playlist.prototype.removeTrack = function (trackTitle) {
  delete this.tracks[trackTitle];
}


