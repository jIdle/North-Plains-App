import React from 'react';
import {
  IonPage,
  IonHeader,
  IonContent,
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { findArticle } from './findArticle';
import './NewsArticle.css';
import Toolbar from '../../components/Toolbar';

// type Props = {
//   title: string,
//   date: string,
//   id: string,
//   content: string
// };

const NewsArticle: React.FC = () => {
  const { id } = useParams();
  const { found } = findArticle(id);
  if (found == null) {
    return <p>Not found</p>;
  }
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="News" page="newsArticle" btn="share" />
      </IonHeader>
      <IonContent>
        <p className="date">{found.date ?? ""}</p>
        <div dangerouslySetInnerHTML={{ __html: found.content }} />
      </IonContent>
    </IonPage>
  );
};

export default NewsArticle;