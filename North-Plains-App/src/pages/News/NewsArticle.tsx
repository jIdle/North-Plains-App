import React from 'react';
import { IonPage,
         IonHeader,
         IonToolbar,
         IonTitle,
         IonButtons,
         IonBackButton,
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { findArticle } from '../../hooks/findArticle';

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
        <h3>{found.date ?? ""}</h3>
        <div dangerouslySetInnerHTML={{ __html: found.content}} />
      </IonPage>
    )
};

export default NewsArticle;