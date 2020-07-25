import React, { useEffect, useState } from 'react';
import axios from "axios";
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
type State = { articles: Array<Article> };

const News: React.FC = () => {
  const { articles } = NewsArticleAPI();
  console.log("News.tsx componentDidMount")
  console.log("this.articles", typeof articles)
  const handleClick = (article: Article) => {
    console.log("News.tsx article", article)
    return <NewsArticle article={article} />
  }

  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="News" page="news" btn="settings" />
      </IonHeader>
      <IonContent>
        {articles.map((article: any) =>
          <IonCard button key={article.id} onClick={() => handleClick(article)}>
            <NewsCard article={article} />
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

// date:{this.props.article.date} id:{this.props.article.id}}
// title:{this.props.article.title}
export default News;