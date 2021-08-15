"use strict";


const artikels = {
    articlesList: [],
    init(){

    },
    async fetchArticle(){
        fetch('https://thecrew.cc/news/read.php')
        .then(response => {
            return response.json();
        })
        .then(data => {
            //console.log(data);
            //for(let i = 0; i <= data.news.lenght; i++){
            //    let article = new Artikels(data.news[i].UUID, data.news[i].title, data.news[i].content, data.news[i].imageURI, data.news[i].likes, data.news[i].publicationDate);
            //    this.articlesList.push(article);
            //}
            for(let i = 0; i < data.news.length; i++){
                let artikel = new Artikels(data.news[i].UUID, data.news[i].title, data.news[i].content, data.news[i].imageURI, data.news[i].likes, data.news[i].publicationDate);
                this.articlesList.push(artikel);
            }
            console.log(this.articlesList);
        })
    }
}

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


artikels.fetchArticle();
