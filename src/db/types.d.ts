export interface Artist {
  name: string;
}

interface File {
  preview: string;
  mp3: string;
}

export interface Credit {
  name: string;
  role: string;
}

export interface Song {
  id: string;
  title: string;
  lyrics?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: Artist;
  description: string;
  price: number;
  lyrics: string;
  credits: Credit[];
  songs: Song[];
}
