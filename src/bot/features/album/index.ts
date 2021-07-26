import { Composer } from "telegraf";
import { viewAlbumList } from "./viewAlbumList";
import { viewAlbumInfo } from "./viewAlbumInfo";
import { viewTrackList } from "./viewTrackList";
import { viewTackInfo } from "./viewTrackInfo";
import {
  viewAlbumListAction,
  viewAlbumInfoRegExp,
  viewTrackInfoRegExp,
  viewTrackListRegExp,
} from "../props/actions";

export default Composer.compose([
  Composer.command("music", viewAlbumList),
  Composer.action(viewAlbumListAction, viewAlbumList),
  Composer.action(viewAlbumInfoRegExp, viewAlbumInfo),
  Composer.action(viewTrackListRegExp, viewTrackList),
  Composer.action(viewTrackInfoRegExp, viewTackInfo),
]);
