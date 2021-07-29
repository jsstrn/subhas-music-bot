import { albums } from "../db/albums";
import { Album as AlbumSchema } from "../db/schema";

class AlbumModel {
  getById(albumId: string): AlbumSchema {
    const album = albums.find((album) => album.id === albumId);

    if (!album) {
      throw new Error("That album is not available");
    }

    return album;
  }
}

export const Album = new AlbumModel()