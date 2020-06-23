import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

// Test data
// import newsItems from '../../test/newsItems.js';
export const newsItems = [
  {
    title: "COVID-19 Emergency Declaration extended through September 30, 2020",
    date: "Monday, June 15"
  },
  {
    title: "Limited Business Hours for City Hall",
    date: "Sunday, June 14"
  }
]

const News: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        {newsItems.map((item) => (
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>
                {item.date}
              </IonCardSubtitle>
              <IonCardTitle>
                {item.title}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            </IonCardContent>
          </IonCard>
        ))}

      </IonContent>
    </IonPage>
  );
};

export default News;