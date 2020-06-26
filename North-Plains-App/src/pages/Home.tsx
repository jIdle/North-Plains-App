import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonButton,
  IonIcon,
  IonSlides,
  IonSlide
} from '@ionic/react';
import { heart, ellipse, square,
         triangle, planet, bus,
         notifications, tennisball, gameController,
         batteryFullOutline, musicalNoteOutline, baseballOutline,
         playOutline, pauseOutline, stopOutline,
         fingerPrintOutline, flaskOutline, flameOutline
} from 'ionicons/icons'
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>North Plains</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonFooter>
        <IonSlides>
          <IonSlide>
            <IonGrid class="blue">
              <IonRow class="ion-text-center">
                <IonCol><IonButton><IonIcon icon={batteryFullOutline}/></IonButton></IonCol>
                <IonCol><IonButton><IonIcon icon={musicalNoteOutline}/></IonButton></IonCol>
                <IonCol><IonButton><IonIcon icon={baseballOutline}/></IonButton></IonCol>
              </IonRow>
              <IonRow class="ion-text-center">
                <IonCol><IonButton><IonIcon icon={playOutline}/></IonButton></IonCol>
                <IonCol><IonButton><IonIcon icon={pauseOutline}/></IonButton></IonCol>
                <IonCol><IonButton><IonIcon icon={stopOutline}/></IonButton></IonCol>
              </IonRow>
              <IonRow class="ion-text-center">
                <IonCol><IonButton><IonIcon icon={fingerPrintOutline}/></IonButton></IonCol>
                <IonCol><IonButton><IonIcon icon={flaskOutline}/></IonButton></IonCol>
                <IonCol><IonButton><IonIcon icon={flameOutline}/></IonButton></IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide>
            <IonGrid>
              <IonRow class="ion-text-center">
                <IonCol><IonButton><IonIcon icon={heart}/></IonButton></IonCol>
                <IonCol><IonButton><IonIcon icon={ellipse}/></IonButton></IonCol>
                <IonCol><IonButton><IonIcon icon={square}/></IonButton></IonCol>
              </IonRow>
              <IonRow class="ion-text-center">
                <IonCol><IonButton><IonIcon icon={triangle}/></IonButton></IonCol>
                <IonCol><IonButton><IonIcon icon={planet}/></IonButton></IonCol>
                <IonCol><IonButton><IonIcon icon={bus}/></IonButton></IonCol>
              </IonRow>
              <IonRow class="ion-text-center">
                <IonCol><IonButton><IonIcon icon={notifications}/></IonButton></IonCol>
                <IonCol><IonButton><IonIcon icon={tennisball}/></IonButton></IonCol>
                <IonCol><IonButton><IonIcon icon={gameController}/></IonButton></IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
        </IonSlides>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
