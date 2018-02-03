<template>
    <gmap-map class="map"
              :zoom="zoom"
              :center="center"
              :options="options">
        <gmap-marker :key="index"
                     v-for="(set, index) in markerSets"
                     :position="set.position"
                     :animation="set.animation"
                     :clickable="true"
                     @click="open(set)">
            <gmap-info-window :opened="set.opened"
                              @closeclick="close(set)">
                <vmap-info :infos="set.infos" />
            </gmap-info-window>
        </gmap-marker>
    </gmap-map>
</template>

<script>
import 'whatwg-fetch';
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import VmapInfo from './Info';
import Constants from '../js/constants';
import MarkerSet from '../js/marker-set';

Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.API_KEY,
        libraries: 'geometry'
    }
});

export default {
    name: 'VmapMap',
    components: { VmapInfo },
    data() {
        return Object.assign({
            markerSets: [],
            openedSet: null
        }, Constants.MAP_OPTS);
    },
    methods: {
        open(set) {
            if (this.openedSet) { this.openedSet.opened = false; }
            set.opened = true;
            this.openedSet = set;
        },
        close(set) {
            set.opened = false;
            this.opened = null;
        },
        getMarkers() {
            fetch(Constants.DATA_URL)
                .then(response => {
                    if (!response.ok) { throw Error(response.statusText); }
                    return response.json();
                })
                .then(json => {
                    json.values.forEach(element => {
                        const markerSet = this.getMarkerSet(new google.maps.LatLng(
                            { lat: Number(element[2]), lng: Number(element[3]) },
                        ));
                        markerSet.addInfo({ title: element[0], text: element[1]});
                        if (!this.markerSets.some(set => {
                            return set === markerSet;
                        })) {
                            this.markerSets.push(markerSet);
                            // this.markerClusterer.addMarker(markerSet.marker);
                        }
                    });
                });
        },
        getMarkerSet(position) {
            let markerSet;
            if (!this.markerSets.some(set => {
                const distance = google.maps.geometry.spherical.computeDistanceBetween(
                    set.position,
                    position
                );
                if (distance < 10) {
                    markerSet = set;
                    return true;
                }
                return false;
            })) {
                markerSet = new MarkerSet({ position });
            }
            return markerSet;
        }
    },
    mounted () {
        this.getMarkers();
    }
};
</script>

<style scoped>
.map {
    width: 100%;
    height: 600px;
}
</style>
