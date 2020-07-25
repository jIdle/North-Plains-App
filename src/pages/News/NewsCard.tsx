import React from 'react';
import { IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

type Props = {
  article: any;
};

const NewsCard: React.FC<Props> = ({ article }) => {
  return (
    <>
      <IonCardHeader>
        <IonCardSubtitle>
          date:{article.date} id:{article.id}
        </IonCardSubtitle>
        <IonCardTitle>
          title:{article.title}
        </IonCardTitle>
      </IonCardHeader>
    </>
  );
};

export default NewsCard;