export default class MarkerSet {
    constructor({ marker, info }) {
        this._marker = marker;
        this._infos = [];
        if (info) this._infos.push(info);
    }
    get marker() {
        return this._marker;
    }
    get infos() {
        return this._infos;
    }
    addInfo(info) {
        this._infos.push(info);
    }
}
