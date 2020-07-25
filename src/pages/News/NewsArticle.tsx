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
  article: any;
  // title: string;
  // date: string;
  // id: string;
  // body: string;
};

type State = {
  article: any;
}

// class NewsArticle extends React.Component {
// const NewsArticle: React.FC<State> = ( state ) => {
// const NewsArticle: React.FC<ArticleProps> = ( article ) => {
// const NewsArticle: React.FC<ArticleProps> = ({ title, date, id, body }) => {
const NewsArticle: React.FC<ArticleProps> = ({ article }) => {
  console.log(article)
  return (
      <IonContent>
        <button onClick={() => console.log("this.props")} >Hey</button>
        <p>NEWS ARTICLE</p>
        {/* <p className="date">date: {found.date ?? ""}</p> */}
        {/* <div dangerouslySetInnerHTML={{ __html: found.body }} /> */}
      </IonContent>
  );
  // }
};

export default NewsArticle;