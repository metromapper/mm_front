var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:  35.685175, lng: 139.7528},
    zoom: 12,
    disableDefaultUI: true
  });
  var styles = [
      {
          stylers: [
              { hue: "#00ffe6" },
              { saturation: -20 }
          ]
      },{
          featureType: "road",
          elementType: "geometry",
          stylers: [
              { lightness: 100 },
              { visibility: "off" }
          ]
      },{
          featureType: "road",
          elementType: "labels",
          stylers: [
              { visibility: "off" }
          ]
      },{
          featureType: 'all',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
      },{
          featureType: 'transit.station.rail',
          elementType: 'labels',
          stylers: [{ visibility: 'on' }]
      },{
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{ visibility: 'off' }]
      }
    ];

    map.setOptions({styles: styles});

    var subwayMapType = new google.maps.ImageMapType({
        tileSize: new google.maps.Size(256,256),
        isPng: true,
        maxZoom: 22,
        minZoom: 8,
        getTileUrl: function(coord, zoom) {
            var mt = ((coord.y & 0x1 == 0)? 0 : 2) | (coord.x & 0x1);
            var url = "http://mt%m.google.com/mapslt?lyrs=transit&x=%x&y=%y&z=%z&w=256&h=256&style=1"
              .replace("%m", mt)
              .replace("%x", coord.x).replace("%y", coord.y)
              .replace("%z", zoom);
            return url;
        }
    });
    map.overlayMapTypes.insertAt(0, subwayMapType); // オーバーレイ表示するときの例
}
