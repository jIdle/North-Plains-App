import React from 'react';
import { IonPage,
         IonHeader,
         IonToolbar,
         IonTitle,
         IonContent,
         IonList,
         IonItem,
         IonThumbnail,
         IonImg,
         IonLabel
} from '@ionic/react';
import { render } from '@testing-library/react';
import { RouteComponentProps } from 'react-router';

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }];

interface NewsArticleProps extends RouteComponentProps<{
  id: string;
}> {}

const NewsArticle: React.FC<NewsArticleProps> = ({match}) => {
  console.log("newsarticle");
  return (
      <IonContent>
      <IonList>
        {items.map((image, i) => (
          <IonItem key={i}>
            <IonThumbnail slot="start">
              <IonImg src={image.src} />
            </IonThumbnail>
            <IonLabel>{image.text}</IonLabel>
          </IonItem>
        ))}
      </IonList>
        Hello
        {match.params.id}
      </IonContent>
  )
};

export default NewsArticle;