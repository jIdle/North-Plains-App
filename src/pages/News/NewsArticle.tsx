import React from 'react';
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
  // article?: Article;
  title: string;
  date: string;
  id: string;
  body: string;
};

type State = {
}

// class NewsArticle extends React.Component<Props> {
const NewsArticle: React.FC<ArticleProps> = ({ title, date, id, body }) => {
  // const params = useParams();
  // console.log(params);
  // const { id } = useParams();
  // const { id } = useParams();
  // const { found } = findArticle(id);
  const {articles, findArticle } = NewsArticleAPI();
  // const found = findArticle(id);
  console.log("articleDetail", title, date, id, body);
  // console.log("found", found);
  // console.log("id", id);

  // constructor(props: any) {
    // super(props);
    // console.log("NewsArticle props", this.props)
  // }

  // render() {
  // if (found == null) {
  //   return <p>Not found</p>;
  // }
  return (
    <>
      <IonHeader>
        <Toolbar title="News" page="newsArticle" btn="share" />
      </IonHeader>
      <IonContent>
        <button onClick={() => console.log("this.props")} >Hey</button>
        <p>NEWS ARTICLE</p>
        <p className="date">date: {date ?? ""}</p>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </IonContent>
    </>
  );
  // }
};

export default NewsArticle;