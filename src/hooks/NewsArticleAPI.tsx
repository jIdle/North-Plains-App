import { useEffect, useState } from "react";

export interface Article {
  title: string;
  date: string;
  id: string;
  body: string;
}

export function NewsArticleAPI() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      fetch('https://my-json-server.typicode.com/carsayao/json-server/articles/')
        .then(res => res.json())
        .then((newArticles) => {
          console.log("newArticles", newArticles.slice(0, 2));
          setArticles(newArticles.slice(0, 2));
        });
    };
    loadArticles();
  }, []);

  function findArticle (id: string) {
    let found = articles.find(e => e === id);
    // let found = id;
    // console.log("id", id);
    console.log("articles", articles)
    console.log("findArticleFound", found);
    return { found };
  }

  return {
    articles,
    // loadArticles,
    findArticle
  };
}