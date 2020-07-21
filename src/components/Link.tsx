import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonThumbnail, IonImg } from '@ionic/react';

interface LinkItem {
  title: string;
  description: string;
  thumbnail: string;
}

const Link: React.FC<LinkItem> = ({ title, description, thumbnail }) => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonThumbnail>
          <IonImg src={thumbnail}/>
        </IonThumbnail>
        <p>{description}</p>
      </IonContent>
    </React.Fragment>
  );
};

export default Link