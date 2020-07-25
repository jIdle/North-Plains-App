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
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://my-json-server.typicode.com/carsayao/json-server/articles/'
      );
      setArticles(result.data);
    };
    fetchData();
  }, []);

  return { articles };
}