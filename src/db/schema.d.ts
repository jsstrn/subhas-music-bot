export interface Artist {
  name: string;
}

export type Source = "store" | "web";
export type Category = "preview" | "song" | "ringtone" | "archive";
export type Mime = "application/zip" | "audio/mpeg" | "audio/mp4" | "audio/wav";

export interface File {
  id: string;
  name: string;
  source: Source;
  mime: Mime;
  category: Category;
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
  cover: string;
  price: number;
  lyrics?: string;
  credits: Credit[];
  tracks: Track[];
  files?: File[];
}
