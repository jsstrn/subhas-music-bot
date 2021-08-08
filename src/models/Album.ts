import { albums } from "../db/albums";
import { Album as AlbumSchema, File } from "../db/schema";
import { filter, flattenDeep } from "lodash";

class AlbumModel {
  private album: AlbumSchema | null;

  constructor() {
    this.album = null;
  }

  getById(albumId: string): AlbumSchema {
    const album = albums.find((album) => album.id === albumId);

    if (!album) {
      throw new Error("That album does not exist");
    }

    this.album = album;
    return album;
  }

  getAllTrackFiles(albumId: string, group: Partial<File>): File[] {
    if (!this.album) {
      this.getById(albumId);
    }

    const filesArray = this.album?.tracks.map((track) =>
      filter(track.files, group)
    );

    return flattenDeep(filesArray);
  }
}

export const Album = new AlbumModel();
