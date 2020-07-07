import { newsArticles } from '../assets/content';

// export interface Article {
//   title: string,
//   date: string,
//   id: string,
//   content: string
// };

export function findArticle(id: string) {

  let found = newsArticles.find(e => e.id === id);

  return {
    found
  };
};