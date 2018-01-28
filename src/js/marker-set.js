export default class MarkerSet {
    constructor({ marker, infoWindow }) {
        this._marker = marker;
        this._infoWindow = infoWindow;
    }
    get marker() {
        return this._marker;
    }
    get infoWindow() {
        return this._infoWindow;
    }
}
