import 'whatwg-fetch';
import MarkerClusterer from 'node-js-marker-clusterer';
import Vue from 'vue';
import InfoWindow from '../components/info-window.vue';
import Constants from './constants';
import MarkerSet from './marker-set';
import Info from './info';

export default class Maps {
    constructor(maps, element) {
        this.maps = maps;
        this.map = new this.maps.Map(element, Constants.MAP_OPTS);
        this.markerSets = [];
        this.infoWindow = new this.maps.InfoWindow();
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
                    markerSet.addInfo(new Info(element[0], element[1]));
                    markerSet.marker.addListener('click', () => {
                        this.infoWindow.setContent('<div id="infoWindow">');
                        this.infoWindow.open(this.map, markerSet.marker);
                        new Vue({
                            el: '#infoWindow',
                            components: { InfoWindow },
                            template: '<info-window :infos="infos" />',
                            data: { infos: markerSet.infos }
                        });
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
                marker: new this.maps.Marker({ position, animation: this.maps.Animation.DROP })
            });
        }
        return markerSet;
    }
}
