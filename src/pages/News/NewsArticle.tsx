import React from 'react';
import { IonPage,
         IonHeader,
         IonToolbar,
         IonTitle,
         IonButtons,
         IonBackButton,
         IonContent,
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { findArticle } from '../../hooks/findArticle';
import './NewsArticle.css';

type Props = {
  title: string,
  date: string,
  id: string,
  content: string
}

const NewsArticle: React.FC<Props> = () => {
    const { id } = useParams();
    const { found } = findArticle(id);
    if (found == null) {
      return <p>Not found</p>;
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>News</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p className="date">{found.date ?? ""}</p>
          <div dangerouslySetInnerHTML={{ __html: found.content }} />
        </IonContent>
      </IonPage>
    )
};

export default NewsArticle;