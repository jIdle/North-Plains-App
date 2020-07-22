import React, { useEffect, useState } from 'react';
import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem
} from '@ionic/react';
import NewsCard from '../../components/NewsCard';
import { NewsArticleAPI, Article } from '../../hooks/NewsArticleAPI';
import { newsArticles } from '../../assets/content';
import Toolbar from '../../components/Toolbar';
import NewsArticle from './NewsArticle';
import { IonReactRouter } from '@ionic/react-router';

type Props = { props: any };
type State = { articles: Array<any>, segment: string};

const News: React.FC = () => {
  const { articles, findArticle } = NewsArticleAPI();
  // const { articles, loadArticles, findArticle } = NewsArticleAPI();
  const [current, next] = useState(articles[0]);
  const [count, setCount ] = useState(0);
  console.log("current", current);
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
      {/* <IonReactRouter> */}
        {/* <Nav detail={() => <NewsArticle {...current} />}> */}
          <IonHeader>
            <Toolbar title="News" page="news" btn="settings" />
          </IonHeader>
          <IonContent>
            {articles.map((article: any) =>
              <IonCard button key={article.id} onClick={() => next(article)} routerLink={`/news/${article.id}`}>
                <NewsCard article={article} />
              </IonCard>
            )};

            {/*<IonItem>
              <IonCard onClick={() => console.log("NewsCard props", "\n\nclick!\n\n")}> {/*routerLink={`/news/${article.id}`}>
                <IonCardHeader>
                  <IonCardSubtitle>
                    date: id:
                  </IonCardSubtitle>
                  <IonCardTitle>
                    title:
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonItem>*/}
          </IonContent>
        {/* </Nav> */}
      {/* </IonReactRouter> */}
    </IonPage>
  );
};

                    // date:{this.props.article.date} id:{this.props.article.id}}
                    // title:{this.props.article.title}
export default News;