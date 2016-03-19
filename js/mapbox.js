L.mapbox.accessToken = 'pk.eyJ1Ijoia3Q4MyIsImEiOiJjaWxzdmprMncwMDdqdmRrc29mOGI2b29xIn0.CHqv97x5mK7FU5IlOwbxCA';

var map = L.mapbox.map('map', 'mapbox.light')
.setView([35.685175, 139.7528], 12)
.addControl(L.mapbox.shareControl());



var chiyodaLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/chiyoda.geojson')
    .addTo(map);

var tozaiLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/tozai.geojson')
    .addTo(map);

var nanbokuLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/nanboku.geojson')
    .addTo(map);

var yurakuchoLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/yurakucho.geojson')
    .addTo(map);

var ginzaLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/ginza.geojson')
    .addTo(map);

var hibiyaLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/'+'hibiya.geojson')
    .addTo(map);

var fukutoshinLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/'+'fukutoshin.geojson')
    .addTo(map);

var marunouchiLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/marunouchi.geojson')
    .addTo(map);

var hanzoumonLayer = L.mapbox.featureLayer()
    .loadURL('lib/geojson/hanzoumon.geojson')
    .addTo(map);

var features = map.featureLayer.getGeoJSON();

console.log(d3.selectAll("path"));
