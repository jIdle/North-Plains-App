import axios from "axios";
import { useEffect, useState } from "react";

export interface Article {
  title: string;
  date: string;
  id: string;
  body: string;
}

export function NewsArticleAPI() {

  const [articles, setArticles] = useState([]);
  console.log(articles)
  useEffect(() => {
    const loadArticles = () => {
    // const loadArticles = async () => {
      fetch('https://my-json-server.typicode.com/carsayao/json-server/articles/')
        .then(res => res.json())
        .then((newArticles) => {
          console.log("newArticles", newArticles.slice(0, 2));
          setArticles(newArticles.slice(0, 2));
        });
    };
    loadArticles();
  }, []);
  // useEffect(async () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //   // const fetchData = () => {
  //     const result = await axios(
  //     // const result = axios(
  //       'https://my-json-server.typicode.com/carsayao/json-server/articles/'
  //     );
  //     setArticles(result.data.slice(0, 3));
  //   };
  //   fetchData();
  // }, []);

  function findArticle (id: string) {
    let found = articles.find(e => e["id"] === id);
    // let found = id;
    console.log("API id", id);
    console.log("articles", articles)
    console.log("findArticleFound", found);
    return { found };
  }

  return {
    articles
    // loadArticles
    // findArticle
  };
}