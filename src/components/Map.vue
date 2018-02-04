<template>
    <gmap-map class="map"
              :zoom="map.zoom"
              :center="map.center"
              :options="map.options"
              @zoom_changed="zoomChanged()">
        <gmap-cluster :gridSize="cluster.gridSize"
                      :styles="cluster.styles">
            <gmap-marker :key="index"
                         v-for="(set, index) in marker.sets"
                         :position="set.position"
                         :animation="set.animation"
                         :clickable="true"
                         @click="open(set)">
                <gmap-info-window :opened="set.opened"
                                  @closeclick="close(set)">
                    <vmap-info :infos="set.infos" />
                </gmap-info-window>
            </gmap-marker>
        </gmap-cluster>
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
        return {
            map: Constants.MAP_OPTS,
            cluster: {
                gridSize: 10,
                styles: [
                    {
                        width: 50,
                        height: 50,
                        url: Constants.getGoogleClusterInlineSvg('#FC5651'),
                        textColor: '#5E1312',
                        textSize: 14
                    }
                ]
            },
            marker: {
                sets: [],
                openedSet: null
            }
        }
    },
    methods: {
        open(set) {
            if (this.marker.openedSet) { this.marker.openedSet.opened = false; }
            set.opened = true;
            this.marker.openedSet = set;
        },
        close(set) {
            set.opened = false;
            this.marker.openedSet = null;
        },
        zoomChanged() {
            if (this.marker.openedSet) { this.marker.openedSet.opened = false; }
            this.marker.openedSet = null;
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
                        if (!this.marker.sets.some(set => {
                            return set === markerSet;
                        })) {
                            this.marker.sets.push(markerSet);
                        }
                    });
                });
        },
        getMarkerSet(position) {
            let markerSet;
            if (!this.marker.sets.some(set => {
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
