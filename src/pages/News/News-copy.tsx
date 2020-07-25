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
import NewsCard from './NewsCard';
import { NewsArticleAPI, Article } from '../../hooks/NewsArticleAPI';
import { newsArticles } from '../../assets/content';
import Toolbar from '../../components/Toolbar';
import NewsArticle from './NewsArticle';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

type Props = { props: any };
// type State = { articles: Array<any>, segment: string};
type State = { articles: Array<Article> };

// const News: React.FC = () => {
class News extends React.Component {
// class News extends React.Component<{}, { count: number }> {
  // const { articles, findArticle } = NewsArticleAPI();
  // const { articles, loadArticles, findArticle } = NewsArticleAPI();
  // const { articles } = NewsArticleAPI();
  // console.log("News.tsx", articles)
  // const [current, next] = useState(articles[0]);
  // console.log("current", current);
  // const [articles, setArticles] = useState({});
  // console.log("articles", articles);
  // console.log(findArticle("something"));
  articles: any;
  // findArticle: any;
  // count: number;
  article: any; // placeholder article
  constructor(props: any) {
    super(props);
    this.articles = []
    // let article = {  // placeholder article
    this.article = {
      title: "title",
      date: "date",
      id: "id",
      body: "body"
    }
   };

  componentWillMount() {
    console.log("News.tsx componentDidMount")
    this.loadData();
  //   console.log("this.state", this.state)
  //   this.count += 1
  //   this.setState({ count: this.state.count + 1 })
  //   // this.articles, this.findArticle = NewsArticleAPI();
  }
  loadData() {
    const loadArticles = async () => {
      fetch('https://my-json-server.typicode.com/carsayao/json-server/articles/')
        .then(res => res.json())
        .then((newArticles) => {
          console.log("newArticles", newArticles.slice(0, 2));
          this.articles = newArticles.slice(0, 2);
        });
    };
    loadArticles();
    console.log("this.articles", typeof this.articles)
  //   const {articles} = NewsArticleAPI();
  //   const { id } = useParams();
  //   console.log(id)
  //   let found = articles.find(e => console.log("e", e[id]));
    // this.setState({
      // data: found
  // })
  }
  // useEffect(() => {
  //   console.log("News.tsx render")
  // }, []);

  // handleClick(id: string) {
  //   console.log("id", id);
  //   this.routeLink = "/news/" + id;
  //   console.log("this.routeLink", this.routeLink);
  // };
  render() {
    // const { articles, findArticle } = NewsArticleAPI();

  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="News" page="news" btn="settings" />
      </IonHeader>
      <IonContent>
        {/* placeholder */}
        {/* {this.state.count} */}
        {this.articles.map((article: any) =>
          // <IonCard button key={article.id} onClick={() => next(article)} routerLink={`/news/${article.id}`}>
          // https://stackoverflow.com/questions/52238637/react-router-how-to-pass-data-between-pages-in-react
          // <Link
          //   to={{
          //     pathname: `/news/${article.id}`,
          //     state: article
          //   }}
          // >
            <IonCard button key={article.id} >
              {console.log(article)}
              <NewsCard article={article} />
            </IonCard>
          // </Link>
        )}
        {/* <Link
          to={{
            pathname: `/news/1`,
            state: [{ title: "title", date: "date", id: "id", body: "body" }]
          }}
        > */}
          {/* <IonCard button routerLink="/news/1">
            <NewsCard article={article} />
          </IonCard> */}
        {/* </Link> */}

      </IonContent>
    </IonPage>
  );
          }
};

// date:{this.props.article.date} id:{this.props.article.id}}
// title:{this.props.article.title}
export default News;