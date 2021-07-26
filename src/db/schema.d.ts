export interface Artist {
  name: string;
}

type SourceType = "store" | "web";
type Category = "preview" | "song" | "ringtone" | "zip";
type MimeType = "application/zip" | "audio/mpeg" | "audio/mp4" | "audio/wav";

interface File {
  id: string;
  name: string;
  source: SourceType;
  type: MimeType;
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
