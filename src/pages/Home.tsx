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
    }, 7000)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>North Plains</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="no-scroll">
        <IonSlides onIonSlidesDidLoad={() => AutoPlay()} onIonSlideTransitionEnd={() => AutoPlay()} ref={slidesRef}>
          <IonSlide>
            <IonImg src={require('./../assets/img/slideshow/Cat1.png')}/>
          </IonSlide>
          <IonSlide>
            <IonImg src={require('./../assets/img/slideshow/Cat2.png')}/>
          </IonSlide>
          <IonSlide>
            <IonImg src={require('./../assets/img/slideshow/Cat3.png')}/>
          </IonSlide>
          <IonSlide>
            <IonImg src={require('./../assets/img/slideshow/Cat4.png')}/>
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
