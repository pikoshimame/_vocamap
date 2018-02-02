export default class Info {
    constructor(title, text) {
        this._title = title;
        this._text = text;
    }
    get title() {
        return this._title;
    }
    get text() {
        return this._text;
    }
}
