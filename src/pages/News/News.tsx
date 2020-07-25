import React from 'react';
import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage
} from '@ionic/react';
import NewsCard from './NewsCard';
import { NewsArticleAPI } from '../../hooks/NewsArticleAPI';
import Toolbar from '../../components/Toolbar';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const { articles } = NewsArticleAPI();
  console.log("News.tsx componentDidMount")
  console.log("this.articles", typeof articles)

  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="News" page="news" btn="settings" />
      </IonHeader>
      <IonContent>
        {articles.map((article: any) =>
          <Link key={article.id} style={{ textDecoration: 'none' }}
            to={{
              pathname: `/news/${article.id}`,
              state: article
            }}
          >
            <IonCard button>
              <NewsCard article={article} />
            </IonCard>
          </Link>
        )}
      </IonContent>
    </IonPage>
  );
};

export default News;