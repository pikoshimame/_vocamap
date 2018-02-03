export default class MarkerSet {
    constructor({ position, info }) {
        this._position = position;
        this._infos = [];
        this._animation = google.maps.Animation.DROP;
        this._opened = false;
        if (info) this._infos.push(info);
    }
    get position() {
        return this._position;
    }
    get infos() {
        return this._infos;
    }
    get animation() {
        return this._animation;
    }
    get opened() {
        return this._opened;
    }
    set opened(boolean) {
        this._opened = boolean;
    }
    addInfo(info) {
        this._infos.push(info);
    }
}
