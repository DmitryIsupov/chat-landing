/* global d3:true*/ /* global _:true */

App.WordCloudComponent = Ember.Component.extend({

    /**
     * Generate a word cloud when render the component
     * @method didInsertElement
     */
    didInsertElement: function() {
      this.generateWordCloud();
    },

    /**
     * Generate a word cloud. Get themes passed to component and use the D3 library to generate the word cloud with these themes.
     * @method generateWordCloud
     */
    generateWordCloud: function() {
        var that = this,
            themes = this.get('data'),
            maxWeight,
            wordScale;
        
        var w = 650,
            h = 500;

        if (!themes || _.isEmpty(themes)) {
            return;
        }

        //Get the theme with maximum sentiment score
        maxWeight = _.max(themes, function(theme) { return theme.weight; }).weight;

        //Create one scale linear for calculate words size based on its sentiment score
        wordScale = d3.scale.linear().domain([1, maxWeight]).range([10, 60]);

        //Map themes in order to get only some attributes
        themes = themes.map(function(theme) {
            return { text: theme.body,
                     size: wordScale(theme.weight),
                     sentimentScore: theme.sentimentScore,
                     id: theme.id
                  };
        });

        
        //Config word cloud
        d3.layout.cloud()
            .size([w, h])
            .padding(4)
            .rotate(function() { return 0; })
            .font("Lato")
            .fontSize(function(d) { return d.size; })
            .words(themes)
            .on("end", draw)
            .start();

        //Render word cloud
        function draw(words, bounds) {
            d3.select(".word-cloud-container")
                .append("svg")  
                .attr("id", "word-cloud-themes")
                .attr("width", w)
                .attr("height", h)
                .append("g")
                    .attr("transform", "translate(" + 325 + "," + 250 + ")")
                .selectAll("text")
                    .data(words)
                .enter().append("text")
                    .style("font-size", function(d) { return d.size + "px"; })
                    .style("fill", function(d) { return that.getColorBySentiment(d.sentimentScore); })
                    .attr("text-anchor", "middle")
                    .attr("class", "theme")
                    .attr("transform", function(d) {
                        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                    })
                    .text(function(d) { return d.text; })
               .on("click", function(d) {
                    that.get('themesController').send('setSelectedTheme', d);
                });
            }

    }.observes('data'),

    getColorBySentiment: function(sentimentScore) {
        if (sentimentScore > 0.4) {
            return "#8CC63F";
        } else if (sentimentScore <= - 0.3) {
            return "#CD4F39";
        } else {
            return "#9F9F9F";
        }
    }
});
