import 'normalize.css';
import '../css/style.css';
import Maps from './maps';

(() => {
    const maps = new Maps(google.maps, document.getElementById('map'));
    try {
        maps.setMarkerSets();
    } catch (e) {
        console.error('Marker setting failed.');
    }
})();
