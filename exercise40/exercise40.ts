interface Album {
    artist: string
    title: string
    tracks?: number
}


function make_album(artist, title, tracks) {
  let album: Album = {
    artist: artist,
    title: title,
  };

  if (tracks) {
    album.tracks = tracks;
  }

  return album;
}

// Calling the function to create different album objects
let album1 = make_album('Artist 1', 'Album 1');
let album2 = make_album('Artist 2', 'Album 2', 10);
let album3 = make_album('Artist 3', 'Album 3', 15);

// Printing each album object
console.log(album1);
console.log(album2);
console.log(album3);
