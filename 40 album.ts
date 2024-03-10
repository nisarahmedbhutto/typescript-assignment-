//  make album

interface Album{
    artist: string,
    album:string,
    tracks?:number,
}

function make_album(artist_name:string,album_title:string,num_tracks?:number): Album {
    let album: Album = {
        artist: artist_name, album: album_title
    };
    if (num_tracks) {
        album.tracks = num_tracks;
    }
    return album;
}

//creat three albums withaout number tracks

const album1: Album = make_album('rahat fateh ali khan', 'dillagi');
const album2: Album = make_album('kumar sanu', 'ashqui');
const album3: Album = make_album('mumtaz molai', 'sindh me rehne wale');

//print albums

console.log(album1);
console.log(album2);
console.log(album3);

//creat  album with number tracks

const album4: Album = make_album('gulam ali khan', 'tere shahar me', 8);

console.log(album4);