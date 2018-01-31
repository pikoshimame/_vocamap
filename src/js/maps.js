import 'whatwg-fetch';
import anchorify from 'anchorify';
import MarkerClusterer from 'node-js-marker-clusterer';
import Constants from './constants';
import MarkerSet from './marker-set';

const getGoogleClusterInlineSvg = (color) => {
    const encoded = window.btoa(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-100 -100 200 200"><defs><g id="a" transform="rotate(45)"><path d="M0 47A47 47 0 0 0 47 0L62 0A62 62 0 0 1 0 62Z" fill-opacity="0.7"/><path d="M0 67A67 67 0 0 0 67 0L81 0A81 81 0 0 1 0 81Z" fill-opacity="0.5"/><path d="M0 86A86 86 0 0 0 86 0L100 0A100 100 0 0 1 0 100Z" fill-opacity="0.3"/></g></defs><g fill="${color}"><circle r="42"/><use xlink:href="#a"/><g transform="rotate(120)"><use xlink:href="#a"/></g><g transform="rotate(240)"><use xlink:href="#a"/></g></g></svg>`);
    return (`data:image/svg+xml;base64,${encoded}`);
};

export default class Maps {
    constructor(maps, element) {
        this.maps = maps;
        this.map = new this.maps.Map(element, Constants.MAP_OPTS);
        this.markerSets = [];
        this.openInfoWindow = new this.maps.InfoWindow();
        this.markerClusterer = new MarkerClusterer(this.map);
        this.markerClusterer.setStyles([
            { width: 50, height: 50, url: getGoogleClusterInlineSvg('#EB3223') },
        ]);
    }
    setMarkerSets() {
        fetch(Constants.DATA_URL)
            .then((response) => {
                if (!response.ok) { throw Error(response.statusText); }
                return response.json();
            })
            .then((json) => {
                json.values.forEach((element) => {
                    const markerSet = this.getMarkerSet(new this.maps.LatLng({
                        lat: Number(element[2]),
                        lng: Number(element[3])
                    }));
                    let content = markerSet.infoWindow.getContent();
                    if (!content) { content = ''; }
                    markerSet.infoWindow.setContent(`${content}`
                        + `<section class="infoWindow__contents"><h2 class="infoWindow__title">${element[0]}</h2>`
                        + `<p class="infoWindow__text">${anchorify(String(element[1]).replace(/\r?\n/g, '<br>'), { target: '_blank' })}</p></section>`);
                    markerSet.marker.addListener('click', () => {
                        this.openInfoWindow.setContent(markerSet.infoWindow.getContent());
                        this.openInfoWindow.open(this.map, markerSet.marker);
                    });
                    if (!this.markerSets.some((set) => { return set === markerSet; })) {
                        this.markerSets.push(markerSet);
                        this.markerClusterer.addMarker(markerSet.marker);
                    }
                });
            });
    }
    getMarkerSet(position) {
        let markerSet;
        if (!this.markerSets.some((set) => {
            const distance = google.maps.geometry.spherical.computeDistanceBetween(
                set.marker.getPosition(),
                position
            );
            if (distance < 10) {
                markerSet = set;
                return true;
            }
            return false;
        })) {
            markerSet = new MarkerSet({
                marker: new this.maps.Marker({ position, animation: this.maps.Animation.DROP }),
                infoWindow: new this.maps.InfoWindow()
            });
        }
        return markerSet;
    }
}
