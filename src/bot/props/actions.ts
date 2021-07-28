const getActionRegExp = (action: string): RegExp => {
  return new RegExp(action + "#" + ".+");
};

export const viewAlbumListAction = "view-album-list";

export const viewAlbumInfoAction = "view-album-info";
export const viewAlbumInfoRegExp = getActionRegExp(viewAlbumInfoAction);

export const viewTrackListAction = "view-track-list";
export const viewTrackListRegExp = getActionRegExp(viewTrackListAction);

export const viewTrackInfoAction = "view-track-info";
export const viewTrackInfoRegExp = getActionRegExp(viewTrackInfoAction);

export const requestInvoiceAction = "request-invoice";
export const requestInvoiceRegExp = getActionRegExp(requestInvoiceAction);
