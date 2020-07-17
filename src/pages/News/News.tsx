import React, { useEffect, useState } from 'react';
import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/react';
import NewsCard from '../../components/NewsCard';
import { NewsArticleAPI, Article } from '../../hooks/NewsArticleAPI';
import { newsArticles } from '../../assets/content';
import Toolbar from '../../components/Toolbar';

type Props = { props: any };
type State = { articles: Array<any>, segment: string};

const News: React.FC = () => {
  // items: any;
  const { articles, findArticle } = NewsArticleAPI();
  // const { articles, loadArticles, findArticle } = NewsArticleAPI();
  const [current, next] = useState({});
  const [count, setCount ] = useState(0);
  // const [articles, setArticles] = useState({});
  // loadArticles();
  // console.log("articles", articles);
  // console.log(findArticle("something"));
  // articles: any;
  // findArticle: any;
  // routeLink: string;
  // constructor(props: any) {
  //   super(props);
  //   // ({articles: this.articles, findArticle: this.findArticle} = NewsArticleAPI());
  //   this.routeLink = "";
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     items: []
  //   };
  // };

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //   // fetch("https://api.github.com/users/carsayao")
  //     .then(res => res.json())
  //     .then((json) => console.log(json))
  // }
  useEffect(() => {
    console.log("News.tsx render")
  }, []);

  // handleClick(id: string) {
  //   console.log("id", id);
  //   this.routeLink = "/news/" + id;
  //   console.log("this.routeLink", this.routeLink);
  // };

  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="News" page="news" btn="settings" />
      </IonHeader>
      <IonContent>
        {/* {newsArticles.map((article: any) => 
          <NewsCard key={article.id} article={article}></NewsCard>
        )}; */}
      <button onClick={() => setCount(count + 1)}>{count}</button>
        {articles.map((article: any) =>
          <NewsCard key={article.id} article={article} />
          // <IonCard onClick={() => console.log("NewsCard props", article,  "\n\nclick!\n\n")} routerLink={`/news/${article.id}`}>
          //   <IonCardHeader>
          //     <IonCardSubtitle>
          //       {/* date:{this.props.article.date} id:{this.props.article.id}} */}
          //       date:{article.date} id:{article.id}
          //     </IonCardSubtitle>
          //     <IonCardTitle>
          //       {/* title:{this.props.article.title} */}
          //       title:{article.title}
          //     </IonCardTitle>
          //   </IonCardHeader>
          // </IonCard>
        )};
      </IonContent>
    </IonPage>
  );
};

export default News;