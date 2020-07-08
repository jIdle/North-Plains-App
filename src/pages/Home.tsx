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
  IonSlide,
  IonImg
} from '@ionic/react';
import { heart, ellipse, square,
         triangle, planet, bus,
         notifications, tennisball, gameController,
         batteryFullOutline, musicalNoteOutline, baseballOutline,
         playOutline, pauseOutline, stopOutline,
         fingerPrintOutline, flaskOutline, flameOutline
} from 'ionicons/icons'
import React, { useRef } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const slidesRef = useRef(document.createElement('ion-slides'))
  var checkSlideStuck = -1
  const AutoPlay = () => {
    slidesRef.current.getActiveIndex().then((value) => {
      if(checkSlideStuck == value) {
        window.location.reload(true)
      } else {
        checkSlideStuck = value
      }
    })
    slidesRef.current.lockSwipes(true)
    setTimeout(() => {
      slidesRef.current.lockSwipes(false)
      slidesRef.current.isEnd().then((value) => {
        if(value) {
          slidesRef.current.slideTo(0)
          slidesRef.current.lockSwipes(true)
        } else {
          slidesRef.current.slideNext()
          slidesRef.current.lockSwipes(true)
        }
      })
    }, 5000)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>North Plains</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides onIonSlidesDidLoad={() => AutoPlay()} onIonSlideTransitionEnd={() => AutoPlay()} ref={slidesRef}>
          <IonSlide>
            <IonImg src={'https://icatcare.org/app/uploads/2018/09/Scottish-fold.png'}/>
          </IonSlide>
          <IonSlide>
            <IonImg src={'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg'}/>
          </IonSlide>
          <IonSlide>
            <IonImg src={'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/06/cat-217679.jpg'}/>
          </IonSlide>
          <IonSlide>
            <IonImg src={'https://cdn.britannica.com/67/197567-050-DA8E36D5/Scottish-fold-cat-feline.jpg'}/>
          </IonSlide>
        </IonSlides>
      </IonContent>
      <IonFooter>
        <IonSlides>
          <IonSlide>
            <IonGrid>
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
