"use strict";

/**fetch('https://thecrew.cc/news/read.php')
.then(response => response.json())
.then(data => console.log(data));*/

let artikelsList = [];

fetch(`https://thecrew.cc/news/read.php`)
.then(response => {
    return response.json();
})
 .then(data => {
    
    for(let i = 0; i < data.news.length; i++){
        artikelsList[i] = new Artikels(data.news[i].UUID, data.news[i].title, data.news[i].content, data.news[i].imageURI, data.news[i].likes, data.news[i].publicationDate);
    }
    console.log(artikelsList);
});


class Artikels {
    constructor(uuid, title, content, imageURI, likes, publicationDate){

        this.uuid = uuid;
        this.title = title;
        this.content = content;
        this.imageURI = imageURI;
        this.likes = likes;
        this.datum = publicationDate;
        

    }
}


