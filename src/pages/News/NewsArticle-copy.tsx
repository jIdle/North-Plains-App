import React, { useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonContent,
} from '@ionic/react';
import { useParams } from 'react-router-dom';
// import { findArticle } from '../../hooks/findArticle';
import './NewsArticle.css';
import Toolbar from '../../components/Toolbar';
import { NewsArticleAPI, Article } from '../../hooks/NewsArticleAPI';

type ArticleProps = {
  // article: any;
  title: string;
  date: string;
  id: string;
  body: string;
};

type State = {
  article: any;
}

// class NewsArticle extends React.Component {
// const NewsArticle: React.FC<State> = ( state ) => {
// const NewsArticle: React.FC<ArticleProps> = ( article ) => {
// const NewsArticle: React.FC<ArticleProps> = ({ title, date, id, body }) => {
const NewsArticle: React.FC = () => {
  const params = useParams();
  // console.log(params.id);
  // console.log(props.location)
  const { id } = useParams();
  // console.log("id", id)
  const {articles} = NewsArticleAPI();
  console.log("NewsArticle articles", articles)
  // let found;
  let found = articles.find(e => e[id] == id);
  // let found = articles.find(e => console.log("e", e[id]));
  // console.log("NewsArticle findArticle", findArticle(id));

  // constructor(props: any) {
  //   super(props);
  //   console.log("NewsArticle props", this.props)
  //   this.state = {
  //     data: null
  //   }
  // }
  // componentDidMount() {
  //   console.log("NewsArticle componentDidMount")
  //   this.loadData();
  // }
  // loadData() {
  //   const {articles} = NewsArticleAPI();
  //   const { id } = useParams();
  //   console.log(id)
  //   let found = articles.find(e => console.log("e", e[id]));
  //   this.setState({
  //     data: found
  //   })
  // }

  // const found = findArticle(id);
  // console.log("articleDetail", article.title, article.date, article.id, article.body);
  // console.log()
  // console.log("NewsArticlePage state", state)
  // console.log("NewsArticlePage state", JSON.stringify(state))
  // console.log("NewsArticlePage article", article)
  // useEffect(() => {
  //   console.log("NewsArticlePage rendered");
  //   found = articles.find(e => e["id"] === id);
  console.log("found", found)
  // }, []);
  // console.log("found", found);
  // console.log("id", id);

  // render() {
  // if (found == null) {
  //   return <p>Not found</p>;
  // }
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="News" page="newsArticle" btn="share" />
      </IonHeader>
      <IonContent>
        <button onClick={() => console.log("this.props")} >Hey</button>
        <p>NEWS ARTICLE</p>
        {/* <p className="date">date: {found.date ?? ""}</p> */}
        {/* <div dangerouslySetInnerHTML={{ __html: found.body }} /> */}
      </IonContent>
    </IonPage>
  );
  // }
};

export default NewsArticle;