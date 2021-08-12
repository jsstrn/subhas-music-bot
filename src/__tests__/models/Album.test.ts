import { Category, Mime } from "../../db/schema";
import { Album } from "../../models/Album";

jest.mock("../../db/albums");

describe("Album", () => {
  it("returns correct title by its id", () => {
    const albumId = "123";
    const album = Album.getById(albumId);

    expect(album.title).toBe("My First Album");
  });

  it("throws when id is invalid", () => {
    const albumId = "invalid-id";

    expect(() => Album.getById(albumId)).toThrow("That album does not exist");
  });

  it("returns all track files for song category and mime type", () => {
    const albumId = "123";
    const group = {
      category: "song" as Category,
      mime: "audio/mpeg" as Mime,
    };

    const files = Album.getAllTrackFiles(albumId, group);

    expect(files).toEqual([
      {
        id: "002",
        source: "web",
        category: "song",
        mime: "audio/mpeg",
        name: "my-first-song.mp3",
      },
    ]);
  });

  it("throws when id is invalid", () => {
    const albumId = "invalid-id";

    expect(() => Album.getAllTrackFiles(albumId, {})).toThrow(
      "That album does not exist"
    );
  });
});
