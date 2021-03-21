var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    
    {
        title: "Avatar",
        review: "Great movie!!"
    }
];

var positions = [
    {x:200, y:50},
    {x:207, y:86},
    {x:200, y:144},
    {x:207,y:176}
];

var showMovieInfo = function(textPosition) {
    var textX = positions.x;
    var textY = positions.y;
    
    fill(84, 140, 209);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(movies[0].title, textX, textY);
    text(movies[0].review, textX, textY);
    text(movies[1].title, textX, textY);
    text(movies[1].review, textX, textY);
};

for(var i=0; i<positions.length; i++) {
    showMovieInfo(positions[i]);
}
