interface Action {
  act: string;
  re: RegExp | null;
}

interface Actions {
  [key: string]: Action;
}

export const actions: Actions = {
  viewAlbumList: { act: "view-album-list", re: null },
  viewAlbumInfo: { act: "view-album-info", re: /view-album-info#.+/ },
  viewTrackList: { act: "view-track-list", re: /view-track-list#.+/ },
  viewTrackInfo: { act: "view-track-info", re: /view-track-info#.+/ },
};
