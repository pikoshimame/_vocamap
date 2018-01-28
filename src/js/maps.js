import 'whatwg-fetch';
import anchorify from 'anchorify';
import Constants from './constants';
import MarkerSet from './marker-set';

export default class Maps {
    constructor(maps, element) {
        this.maps = maps;
        this.map = new this.maps.Map(element, Constants.MAP_OPTS);
        this.markerSets = [];
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
                    markerSet.marker.setMap(this.map);
                    markerSet.marker.addListener('click', () => {
                        markerSet.infoWindow.open(this.map, markerSet.marker);
                    });
                    if (!this.markerSets.some((set) => { return set === markerSet; })) {
                        this.markerSets.push(markerSet);
                    }
                });
            });
    }
    getMarkerSet(position) {
        let markerSet;
        if (!this.markerSets.some((set) => {
            if (set.marker.getPosition().equals(position)) {
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
