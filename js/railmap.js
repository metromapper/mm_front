

var averageUserAmountArray = {
    '2号線日比谷線': 113,
    '3号線銀座線': 107,
    '4号線丸ノ内線': 110,
    '4号線丸ノ内線分岐線': 110,
    '5号線東西線': 132,
    '7号線南北線': 43,
    '9号線千代田線': 111,
    '8号線有楽町線': 87,
    '11号線半蔵門線': 85,
    '13号線副都心線': 23
}

console.log(averageUserAmountArray);

var width = 1200, height = 800;

var svg = d3.select("body").append("svg")
              .attr("width", width)
              .attr("height", height)
              .append("g")
              .call(d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoom))
              .append("g");

d3.json("./lib/topojson/tokyo.topojson", function(data){

    var tokyo23 = topojson.feature(data, data.objects.tokyo23);
    var scale = 150000;

    // Mercator projection
    var projection = d3.geo.mercator()
                        .center([139.7528,35.685175]) // lat and long
                        .translate([width / 2, height / 2])
                        .scale(scale);
    var path = d3.geo.path().projection(projection);


    svg.selectAll("path")
        .data(tokyo23.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#B3C4CC")
        .attr("stroke", "#eeeeee")
        .attr("stroke-width", 0.5);

    d3.json("tokyo_metro.topojson", function(data) {
        var path = d3.geo.path().projection(projection);
        var rail = topojson.feature(data, data.objects.tokyo_metro);
        svg.selectAll("metroRailPath")
            .data(rail.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill-opacity', 0)
            .attr('stroke', function(d,i){
                //console.log(d.properties.name);
                var line = d.properties.name
                console.log(d.properties);
                //console.log(averageUserAmountArray['line']);
                if(d.properties.name == "11号線半蔵門線"){
                    return "#9b7cb6"
                }
                if(d.properties.name == "13号線副都心線"){
                    return "#bb641d"
                }
                if(d.properties.name == "4号線丸ノ内線" | d.properties.name == "4号線丸ノ内線分岐線"){
                    return "#e60012"
                }
                if(d.properties.name == "2号線日比谷線"){
                    return "#9caeb7"
                }
                if(d.properties.name == "3号線銀座線"){
                    return "#f39700"
                }
                if(d.properties.name == "5号線東西線"){
                    return "#00a7db"
                }
                if(d.properties.name == "7号線南北線"){
                    return "#00ada9"
                }
                if(d.properties.name == "8号線有楽町線"){
                    return "#d7c447"
                }
                if(d.properties.name == "9号線千代田線"){
                    return "#009944"
                }
                return "#fff"
            })
            .attr('stroke-opacity', 1)
            .attr('stroke-width', function(d){
                if(d.properties.name == "11号線半蔵門線"){
                    var num = averageUserAmountArray['11号線半蔵門線'];
                }
                if(d.properties.name == "13号線副都心線"){
                    var num = averageUserAmountArray['13号線副都心線'];
                }
                if(d.properties.name == "4号線丸ノ内線" | d.properties.name == "4号線丸ノ内線分岐線"){
                    var num = averageUserAmountArray['4号線丸ノ内線'];
                }
                if(d.properties.name == "2号線日比谷線"){
                    var num = averageUserAmountArray['2号線日比谷線'];
                }
                if(d.properties.name == "3号線銀座線"){
                    var num = averageUserAmountArray['3号線銀座線"'];
                }
                if(d.properties.name == "5号線東西線"){
                    var num = averageUserAmountArray['5号線東西線'];
                }
                if(d.properties.name == "7号線南北線"){
                    var num = averageUserAmountArray['7号線南北線'];
                }
                if(d.properties.name == "8号線有楽町線"){
                    var num = averageUserAmountArray['8号線有楽町線'];
                }
                if(d.properties.name == "9号線千代田線"){
                    var num = averageUserAmountArray['9号線千代田線'];
                }
                return (num / 132.0) * 5.0;
            })
    });
/*
    d3.json("lib/tokyo_metro_station.topojson", function(data) {
        var count = 1;
        var path = d3.geo.path().projection(projection);
        var rail = topojson.feature(data, data.objects.tokyo_metro_station);
        svg.selectAll("metroStation")
            .data(rail.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill-opacity', 0)
            .attr('stroke', function(d,i){
                return "#fff"
            })
            .attr('stroke-opacity', 1)
            .attr('stroke-width', '3px')
    });
*/

});

function zoom() {
  svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}
