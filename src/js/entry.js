import 'whatwg-fetch';
import 'normalize.css';
import '../css/style.css';
import Constants from './constants';

window.initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), Constants.MAP_OPTS);
    const dataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEETS_ID}/values/data!A:E?key=${process.env.API_KEY}`;
    fetch(dataUrl)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((json) => {
            json.values.forEach((element) => {
                const marker = new google.maps.Marker({
                    title: element[0],
                    position: { lat: Number(element[3]), lng: Number(element[4]) },
                    animation: google.maps.Animation.DROP
                });
                const infowindow = new google.maps.InfoWindow({
                    content: `<p class="infowindow__title">${element[0]}</p><p class="infowindow__text">${element[2]}</p>`
                });
                marker.setMap(map);
                marker.addListener('click', () => {
                    infowindow.open(map, marker);
                });
            });
        });
};
