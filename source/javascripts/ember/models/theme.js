App.Theme = DS.Model.extend({
  body: DS.attr('string'),
  sentimentScore: DS.attr('number'),
  weight: DS.attr('number'),
  panelClass: function() {
    var sentimentScore = parseInt(this.get('sentimentScore'), 10)

    if (sentimentScore > 0.4) {
        return "panel panel-success";
    } else if (sentimentScore <= - 0.3) {
            return "panel panel-danger";
        } else {
            return "panel panel-info";
        }
    }.property('sentimentScore'),
  texts: DS.hasMany('text', {async: true})
});

App.Theme.reopenClass({
  FIXTURES: [
    {
        "id": "1",
        "body": "great app",
        "sentimentScore": "0.62",
        "weight": "13",
        "texts": [1,21,42,80,229,332,368,381,388,394,424,455,587]
    },
    {
        "id": "51",
        "body": "fantastic service",
        "sentimentScore": "0.6",
        "weight": "9",
        "texts": [41,79,131,238,322,326,374,468,590]
    },
    {
        "id": "123",
        "body": "recent update",
        "sentimentScore": "0.45",
        "weight": "7",
        "texts": [158,210,219,236,263,264,575]
    },
    {
        "id": "38",
        "body": "financial gain",
        "sentimentScore": "1.86",
        "weight": "6",
        "texts": [33,60,305,435,457,599]
    },
    {
        "id": "125",
        "body": "good app",
        "sentimentScore": "0.5",
        "weight": "5",
        "texts": [164,321,386,471,521]
    },
    {
        "id": "134",
        "body": "completely unusable",
        "sentimentScore": "-0.97",
        "weight": "4",
        "texts": [205,267,274,572]
    },
    {
        "id": "171",
        "body": "tranquil apartment building",
        "sentimentScore": "0.3",
        "weight": "4",
        "texts": [305,435,457,599]
    },
    {
        "id": "172",
        "body": "rude airbnb customers",
        "sentimentScore": "-0.64",
        "weight": "4",
        "texts": [305,435,457,599]
    },
    {
        "id": "229",
        "body": "great service",
        "sentimentScore": "0.9",
        "weight": "4",
        "texts": [388,479,556,587]
    },
    {
        "id": "25",
        "body": "great people",
        "sentimentScore": "0.4",
        "weight": "3",
        "texts": [15,100,121]
    },
    {
        "id": "48",
        "body": "great company",
        "sentimentScore": "0.59",
        "weight": "3",
        "texts": [37,419,513]
    },
    {
        "id": "59",
        "body": "last update",
        "sentimentScore": "0.45",
        "weight": "3",
        "texts": [53,66,222]
    },
    {
        "id": "74",
        "body": "great time",
        "sentimentScore": "0.7",
        "weight": "3",
        "texts": [77,84,138]
    },
    {
        "id": "96",
        "body": "great locations",
        "sentimentScore": "0.3",
        "weight": "2",
        "texts": [116,324]
    },
    {
        "id": "11",
        "body": "really nice",
        "sentimentScore": "2.15",
        "weight": "2",
        "texts": [5,493]
    },
    {
        "id": "17",
        "body": "amazing concept",
        "sentimentScore": "0.49",
        "weight": "2",
        "texts": [7,488]
    },
    {
        "id": "23",
        "body": "smart person",
        "sentimentScore": "0.75",
        "weight": "2",
        "texts": [14,304]
    },
    {
        "id": "24",
        "body": "open mind",
        "sentimentScore": "0.69",
        "weight": "2",
        "texts": [14,304]
    },
    {
        "id": "33",
        "body": "amazing app",
        "sentimentScore": "0.49",
        "weight": "2",
        "texts": [29,419]
    },
    {
        "id": "37",
        "body": "good work guys",
        "sentimentScore": "0.6",
        "weight": "2",
        "texts": [32,93]
    },
    {
        "id": "39",
        "body": "airbnb liability policy",
        "sentimentScore": "-2.25",
        "weight": "2",
        "texts": [33,60]
    },
    {
        "id": "40",
        "body": "liability coverage",
        "sentimentScore": "-3",
        "weight": "2",
        "texts": [33,60]
    },
    {
        "id": "41",
        "body": "primary coverage",
        "sentimentScore": "1.21",
        "weight": "2",
        "texts": [33,60]
    },
    {
        "id": "47",
        "body": "app upgrade",
        "sentimentScore": "0.75",
        "weight": "2",
        "texts": [37,281]
    },
    {
        "id": "63",
        "body": "extra cash",
        "sentimentScore": "0.57",
        "weight": "2",
        "texts": [55,390]
    },
    {
        "id": "65",
        "body": "totally unorganized",
        "sentimentScore": "-2.58",
        "weight": "2",
        "texts": [57,96]
    },
    {
        "id": "67",
        "body": "dramatically due",
        "sentimentScore": "0.9",
        "weight": "2",
        "texts": [57,96]
    },
    {
        "id": "68",
        "body": "happy travels",
        "sentimentScore": "0.5",
        "weight": "2",
        "texts": [62,519]
    },
    {
        "id": "78",
        "body": "excellent app",
        "sentimentScore": "0.6",
        "weight": "2",
        "texts": [87,362]
    },
    {
        "id": "124",
        "body": "completely useless",
        "sentimentScore": "-0.9",
        "weight": "2",
        "texts": [164,171]
    },
    {
        "id": "140",
        "body": "update crashes",
        "sentimentScore": "0.56",
        "weight": "2",
        "texts": [223,252]
    },
    {
        "id": "178",
        "body": "extremely annoying",
        "sentimentScore": "-1.04",
        "weight": "2",
        "texts": [312,466]
    },
    {
        "id": "187",
        "body": "beautiful view",
        "sentimentScore": "0.75",
        "weight": "2",
        "texts": [341,505]
    },
    {
        "id": "192",
        "body": "pretty good",
        "sentimentScore": "0.44",
        "weight": "2",
        "texts": [348,473]
    },
    {
        "id": "222",
        "body": "cozy family room",
        "sentimentScore": "0.49",
        "weight": "2",
        "texts": [384,405]
    },
    {
        "id": "223",
        "body": "lovely garden areas",
        "sentimentScore": "0.6",
        "weight": "2",
        "texts": [384,405]
    },
    {
        "id": "224",
        "body": "convenient location",
        "sentimentScore": "0.43",
        "weight": "2",
        "texts": [384,405]
    },
    {
        "id": "225",
        "body": "nice kitchens",
        "sentimentScore": "0.5",
        "weight": "2",
        "texts": [384,405]
    },
    {
        "id": "226",
        "body": "scenic overlooks",
        "sentimentScore": "0.45",
        "weight": "2",
        "texts": [384,405]
    },
    {
        "id": "258",
        "body": "pretty bad",
        "sentimentScore": "-0.4",
        "weight": "2",
        "texts": [427,473]
    },
    {
        "id": "280",
        "body": "great idea",
        "sentimentScore": "0.4",
        "weight": "2",
        "texts": [458,575]
    },
    {
        "id": "341",
        "body": "certain area",
        "sentimentScore": "0.13",
        "weight": "2",
        "texts": [571,576]
    },
    {
        "id": "49",
        "body": "greedy maneuver",
        "sentimentScore": "-3",
        "weight": "1",
        "texts": [38]
    },
    {
        "id": "86",
        "body": "manic attempts",
        "sentimentScore": "-2.86",
        "weight": "1",
        "texts": [97]
    },
    {
        "id": "213",
        "body": "constant worry",
        "sentimentScore": "-2.62",
        "weight": "1",
        "texts": [380]
    },
    {
        "id": "76",
        "body": "surly doormen",
        "sentimentScore": "-2.45",
        "weight": "1",
        "texts": [82]
    },
    {
        "id": "58",
        "body": "annoying ways",
        "sentimentScore": "-2.34",
        "weight": "1",
        "texts": [51]
    },
    {
        "id": "85",
        "body": "annoying dialog",
        "sentimentScore": "-2.34",
        "weight": "1",
        "texts": [97]
    },
    {
        "id": "57",
        "body": "poor design",
        "sentimentScore": "-1.64",
        "weight": "1",
        "texts": [49]
    },
    {
        "id": "241",
        "body": "truly saddened",
        "sentimentScore": "-1.58",
        "weight": "1",
        "texts": [410]
    },
    {
        "id": "82",
        "body": "whole point",
        "sentimentScore": "-1.55",
        "weight": "1",
        "texts": [94]
    },
    {
        "id": "212",
        "body": "odd strangers",
        "sentimentScore": "-1.5",
        "weight": "1",
        "texts": [380]
    },
    {
        "id": "255",
        "body": "stressful city life",
        "sentimentScore": "-1.5",
        "weight": "1",
        "texts": [426]
    },
    {
        "id": "54",
        "body": "frustrating features",
        "sentimentScore": "-1.39",
        "weight": "1",
        "texts": [46]
    },
    {
        "id": "297",
        "body": "totally insane",
        "sentimentScore": "-1.37",
        "weight": "1",
        "texts": [485]
    },
    {
        "id": "353",
        "body": "really nice",
        "sentimentScore": "-1.29",
        "weight": "1",
        "texts": [585]
    },
    {
        "id": "242",
        "body": "civic menace",
        "sentimentScore": "-1.2",
        "weight": "1",
        "texts": [410]
    },
    {
        "id": "265",
        "body": "error message",
        "sentimentScore": "-1.12",
        "weight": "1",
        "texts": [440]
    },
    {
        "id": "126",
        "body": "totally unacceptable",
        "sentimentScore": "-1.1",
        "weight": "1",
        "texts": [168]
    },
    {
        "id": "56",
        "body": "bad app",
        "sentimentScore": "-1.03",
        "weight": "1",
        "texts": [48]
    },
    {
        "id": "287",
        "body": "really bad",
        "sentimentScore": "-1.03",
        "weight": "1",
        "texts": [465]
    },
    {
        "id": "116",
        "body": "wasn't a huge fan",
        "sentimentScore": "-1",
        "weight": "1",
        "texts": [136]
    }
]

});


