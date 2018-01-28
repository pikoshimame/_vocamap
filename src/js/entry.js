import 'whatwg-fetch';
import anchorify from 'anchorify';
import 'normalize.css';
import '../css/style.css';
import Constants from './constants';

const markerArray = [];

window.initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), Constants.MAP_OPTS);
    fetch(Constants.DATA_URL)
        .then((response) => {
            if (!response.ok) { throw Error(response.statusText); }
            return response.json();
        })
        .then((json) => {
            json.values.forEach((element) => {
                const marker = new google.maps.Marker({
                    title: element[0],
                    position: { lat: Number(element[2]), lng: Number(element[3]) },
                    animation: google.maps.Animation.DROP
                });
                const infowindow = new google.maps.InfoWindow({
                    content: `<p class="infowindow__title">${element[0]}</p><p class="infowindow__text">${anchorify(String(element[1]).replace(/\r?\n/g, '<br>'), { target: '_blank' })}</p>`
                });
                marker.setMap(map);
                marker.addListener('click', () => {
                    infowindow.open(map, marker);
                });
                markerArray.push(marker);
            });
        });
};
