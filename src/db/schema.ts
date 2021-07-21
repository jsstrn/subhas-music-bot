export interface Artist {
  name: string;
}

interface File {
  id: string;
  source: "telegram" | "s3";
  type: "preview" | "track" | "cover";
}

export interface Credit {
  name: string;
  role: string;
}

export interface Track {
  id: string;
  albumId: string;
  title: string;
  files: File[];
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
  tracks: Track[];
}
