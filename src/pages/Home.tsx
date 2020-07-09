import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonSlides,
  IonSlide,
  IonImg,
  IonThumbnail,
  IonFooter
} from '@ionic/react';
import {
  settingsOutline,
  play,
  notifications,
  cardOutline,
  newspaperOutline,
  calendarOutline,
  leafOutline,
  walkOutline,
  bookOutline,
  peopleOutline,
  clipboardOutline,
  documentsOutline,
  trailSignOutline,
  bus,
  paperPlaneOutline,
  helpOutline,
  linkOutline,
  peopleCircleOutline,
  chatbubblesOutline,
  desktopOutline,
} from 'ionicons/icons'
import React, { useRef } from 'react';

import '../theme/Home.css';
import Toolbar from '../components/Toolbar';

type Image = {
  src: string;
  text: string;
};

const slideOpts = {
  initialSlide: 1,
  speed: 400,
  autoHeight: true
};

const Home: React.FC = () => {

  let state = 0
  const slidesRef = useRef(document.createElement('ion-slides'))
  let checkSlideStuck = -1

  const AutoPlay = (num: number) => {
    console.log("num", num)
    if (num == 1) {
      state = 1
    }
    if (num == 2 && state == 0) { return }
    slidesRef.current.getActiveIndex().then((value) => {
      if(checkSlideStuck == value) {
        console.log("checkSlideStuck\n****************\n*************")
        window.location.reload(true)
      } else {
        console.log("autoplay value", value)
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
        <Toolbar title="North Plains" page="home" btn="settings" />
      </IonHeader>
      <IonContent>
        {/* <IonImg className="home-image" src={images[0].src} /> */}
        <IonSlides className="image-slides" onIonSlidesDidLoad={() => AutoPlay(1)} onIonSlideTransitionEnd={() => AutoPlay(2)} ref={slidesRef}>
          <IonSlide>
            <IonImg className="image-slides" src={require('../assets/img/bg/bg1.jpg')}/>
          </IonSlide>
          <IonSlide>
            <IonImg className="image-slides" src={require('../assets/img/bg/bg2.jpg')}/>
          </IonSlide>
          <IonSlide>
            <IonImg className="image-slides" src={require('../assets/img/bg/bg3.jpg')}/>
          </IonSlide>
          <IonSlide>
            <IonImg className="image-slides" src={require('../assets/img/bg/bg4.jpg')}/>
          </IonSlide>
        </IonSlides>
        <IonSlides pager={true} className="slides-buttons-container">
          <IonSlide>
            <IonGrid>
              <IonRow className="ion-text-center">
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={play} /></IonButton><br />Welcome</IonCol>
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={notifications} /></IonButton><br />Notifications</IonCol>
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={cardOutline} /></IonButton><br />Pay Utilities</IonCol>
              </IonRow>
              <IonRow className="ion-text-center">
                <IonCol><IonButton className="menu-button" routerLink="/news" fill="clear"><IonIcon icon={newspaperOutline} /></IonButton><br />News</IonCol>
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={calendarOutline} /></IonButton><br />Calendar</IonCol>
                <IonCol><IonButton className="menu-button" routerLink="/parks" fill="clear"><IonIcon icon={leafOutline} /></IonButton><br />Parks</IonCol>
              </IonRow>
              <IonRow className="ion-text-center">
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={walkOutline} /></IonButton><br />Community Events</IonCol>
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={bookOutline} /></IonButton><br />City Library</IonCol>
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={peopleOutline} /></IonButton><br />City Council</IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide>
            <IonGrid>
              <IonRow className="ion-text-center">
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={clipboardOutline} /></IonButton><br />Agendas & Minutes</IonCol>
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={documentsOutline} /></IonButton><br />Municipal Code</IonCol>
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={trailSignOutline} /></IonButton><br />Report a Code Violation</IonCol>
              </IonRow>
              <IonRow className="ion-text-center">
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={bus} /></IonButton><br />Bus Schedules</IonCol>
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={paperPlaneOutline} /></IonButton><br />Who do I Contact?</IonCol>
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={helpOutline} /></IonButton><br />FAQ's</IonCol>
              </IonRow>
              <IonRow className="ion-text-center">
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={linkOutline} /></IonButton><br />Useful Links</IonCol>
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={peopleCircleOutline} /></IonButton><br />Our Staff</IonCol>
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={chatbubblesOutline} /></IonButton><br />Contact Us</IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide>
            <IonGrid>
              <IonRow className="ion-text-center">
                <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={desktopOutline} /></IonButton><br />Our Website</IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Home;