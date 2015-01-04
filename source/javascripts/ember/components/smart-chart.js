/* global d3:true*/ /* global _:true */

App.SmartChartComponent = Ember.Component.extend({

    /**
     * Generate a word cloud when render the component
     * @method didInsertElement
     */
    didInsertElement: function() {
      this.generatechart();
    },

    /**
     * Generate a word cloud. Get themes passed to component and use the D3 library to generate the word cloud with these themes.
     * @method generateWordCloud
     */
    generatechart: function() {

        var data = this.get('data')

        var values  = data.map(function(theme) {
            return { x: parseInt(theme.sentimentScore),
                     y: parseInt(theme.weight),
                     size: 1,
                     text: theme.body
                  };
        });

        var newData = [{
            key: 'points',
            values: values
        }];


        debugger

        // var rand = function(groups, points) {
        //   var data = [],
        //       random = d3.random.normal();

        //   for (i = 0; i < groups; i++) {
        //     data.push({
        //       key: 'Group ' + i,
        //       values: []
        //     });

        //     for (j = 0; j < points; j++) {
        //       data[i].values.push({
        //         x: random()
        //       , y: random()
        //       , size: 5,
        //       text: "bla bla" + random()

        //       });
        //     }
        //   }

        //   return data;
        // }

        nv.addGraph(function() {
        var chart = nv.models.scatterChart()
                    .color(d3.scale.category10().range());
        
        chart.showYAxis(false);
        chart.showXAxis(false);

        chart.xAxis
            .tickFormat(d3.format('.02f'))
            .axisLabel('Theme Sentiment Score')
            .axisLabelDistance(40)
        chart.yAxis
            .tickFormat(d3.format('.02f'))
            .axisLabel('Theme Frequency')
            .axisLabelDistance(20);



        chart.tooltipContent(function(key, y, e, graph) { 
          return '<h3>' + graph.point.text + '</h3>'
        })
        
        d3.select('#chart svg')
          .datum(newData)
        .transition().duration(500)
          .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
    });

       
    }
});
