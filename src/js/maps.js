import 'whatwg-fetch';
import twitter from 'twitter-text';
import MarkerClusterer from 'node-js-marker-clusterer';
import Constants from './constants';
import MarkerSet from './marker-set';

export default class Maps {
    constructor(maps, element) {
        this.maps = maps;
        this.map = new this.maps.Map(element, Constants.MAP_OPTS);
        this.markerSets = [];
        this.openInfoWindow = new this.maps.InfoWindow();
        this.markerClusterer = new MarkerClusterer(this.map);
        this.markerClusterer.setStyles([
            {
                width: 50,
                height: 50,
                url: Constants.getGoogleClusterInlineSvg('#FC5651'),
                textColor: '#5E1312',
                textSize: 14
            }
        ]);
        this.markerClusterer.setGridSize(10);
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
                        + `<section class="infoWindow__contents"><h2 class="infoWindow__title">${twitter.htmlEscape(element[0])}</h2>`
                        + `<p class="infoWindow__text">${twitter.autoLink(twitter.htmlEscape(element[1]).replace(/\r?\n/g, '<br>'), { targetBlank: true })}</p></section>`);
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
