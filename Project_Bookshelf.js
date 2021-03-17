var book = [
    {
        title: "The Book About Everything",
        author: "John Doe",
        stars: 1
    },
    
    {
        title: "Nothing But This Book",
        author: "Brad Pitt",
        stars: 2
    },
    
    {
        title: "The Booky Book",
        author: "Leonardo Di Caprio",
        stars: 3    
    }
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

// draw many books
var drawBooks = function(bookIndex) {
    fill(214, 255, 219);
    rect(15 + bookIndex * 130, 20, 90, 100);
    fill(0, 0, 0);
    text(book[bookIndex].author, 15 + bookIndex * 130, 25, 70, 100);
    text(book[bookIndex].title, 15 + bookIndex * 130, 56, 70, 100);
    for (var starIndex = 0; starIndex < book[bookIndex].stars; starIndex++) {
        image(getImage("cute/Star"), 15 + starIndex * 20 + bookIndex * 130, 90, 20, 30);
    }
};

for (var i = 0; i < book.length; i++) {
    drawBooks(i);
}
