var width = 1200, height = 800;

var svg = d3.select("body").append("svg")
              .attr("width", width)
              .attr("height", height)
              .append("g")
              .call(d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoom))
              .append("g");


d3.json("./lib/topojson/tokyo.topojson", function(data){

    var tokyo23 = topojson.feature(data, data.objects.tokyo23);
    var scale = 100000;

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
        .attr("fill", "#002b36")
        .attr("stroke", "#333333")
        .attr("stroke_width", 0.2);

    d3.json("lib/metro2.topojson", function(data2) {
        console.log(data2);
        var path = d3.geo.path().projection(projection);
        var rail = topojson.feature(data2, data2.objects.metro2);

        svg.selectAll("path")
            .data(rail.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill-opacity', 0)
            .attr('stroke', function(d){
                if(d.properties.name == "11号線半蔵門線"){
                    return "#9b7cb6"
                }
                return "#9b7cb6"
            })
            .attr('stroke-opacity', 1)
            .attr('stroke-width', '0.5px')
            .on("mouseover", function(d){
                var name = d.properties.name;
                console.log(d3.select(this));
                svg.selectAll("path").attr('stroke-width', function(d){
                    if(d.properties.name == name){
                        return "2px";
                    }
                });
            });

    });

});

function zoom() {
  svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}
