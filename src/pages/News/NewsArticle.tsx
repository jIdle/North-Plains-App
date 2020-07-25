import React from 'react';
import { IonPage, IonHeader, IonContent } from '@ionic/react';
import './NewsArticle.css';
import Toolbar from '../../components/Toolbar';

type ArticleProps = {
  article: any;
};

const NewsArticle: React.FC<ArticleProps> = ({ article }) => {
  const { state } = article.location
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="News" page="news" btn="settings" />
      </IonHeader>
      <IonContent>
        <h1 className="title">title: {state.title}</h1>
        <p className="date">date: {state.date ?? ""}</p>
        {/* <div dangerouslySetInnerHTML={{ __html: state.body }} /> */}
        <p>body: {state.body}</p>
      </IonContent>
    </IonPage>
  );
};

export default NewsArticle;