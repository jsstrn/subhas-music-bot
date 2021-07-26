import { Composer } from "telegraf";
import { viewAlbumList } from "./viewAlbumList";
import { viewAlbumInfo } from "./viewAlbumInfo";
import { viewTrackList } from "./viewTrackList";
import { viewTackInfo } from "./viewTrackInfo";

export default Composer.compose([
  Composer.command("music", viewAlbumList),
  Composer.action("view-album-list", viewAlbumList),
  Composer.action(/view-album-info#.+/, viewAlbumInfo),
  Composer.action(/view-track-list#.+/, viewTrackList),
  Composer.action(/view-track-info#.+/, viewTackInfo),
]);
