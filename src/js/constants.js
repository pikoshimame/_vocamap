const MAP_OPTS = {
    zoom: 5,
    center: { lat: 38.2586, lng: 137.6850 },
    options: {
        styles: [
            {
                featureType: 'administrative',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#444444' }]
            },
            {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [{ color: '#f2f2f2' }]
            },
            {
                featureType: 'poi',
                elementType: 'all',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'road',
                elementType: 'all',
                stylers: [{ saturation: -100 }, { lightness: 45 }]
            },
            {
                featureType: 'road.highway',
                elementType: 'all',
                stylers: [{ visibility: 'simplified' }]
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit',
                elementType: 'all',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'water',
                elementType: 'all',
                stylers: [{ color: '#46bcec' }, { visibility: 'on' }]
            }
        ]
    }
};
const DATA_URL = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEETS_ID}/values/data!A:D?key=${process.env.API_KEY}`;

export default class Constants {
    static get MAP_OPTS() {
        return MAP_OPTS;
    }
    static get DATA_URL() {
        return DATA_URL;
    }
    static getGoogleClusterInlineSvg(color) {
        const encoded = window.btoa(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-100 -100 200 200"><defs><g id="a" transform="rotate(45)"><path d="M0 47A47 47 0 0 0 47 0L62 0A62 62 0 0 1 0 62Z" fill-opacity="0.5"/></g></defs><g fill="${color}"><circle r="42"/><use xlink:href="#a"/><g transform="rotate(120)"><use xlink:href="#a"/></g><g transform="rotate(240)"><use xlink:href="#a"/></g></g></svg>`);
        return (`data:image/svg+xml;base64,${encoded}`);
    }
}
