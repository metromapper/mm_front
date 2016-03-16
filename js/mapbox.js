L.mapbox.accessToken = 'pk.eyJ1Ijoia3Q4MyIsImEiOiJjaWxzdmprMncwMDdqdmRrc29mOGI2b29xIn0.CHqv97x5mK7FU5IlOwbxCA';

var map = L.mapbox.map('map', 'mapbox.light')
.setView([35.685175, 139.7528], 12);

var featureLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/chiyoda.geojson')
    .addTo(map);

featureLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/tozai.geojson')
    .addTo(map);

featureLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/nanboku.geojson')
    .addTo(map);

featureLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/yurakucho.geojson')
    .addTo(map);

featureLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/ginza.geojson')
    .addTo(map);

featureLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/hibiya.geojson')
    .addTo(map);

featureLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/fukutoshin.geojson')
    .addTo(map);

featureLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/marunouchi.geojson')
    .addTo(map);

featureLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/hanzoumon.geojson')
    .addTo(map);


console.log(featureLayer);
