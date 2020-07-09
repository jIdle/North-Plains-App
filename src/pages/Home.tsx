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

// Images for the slideshow
const images: Image[] = [
  {
    src: 'https://www.northplains.org/sites/all/themes/aha_compass/images/background/bg1.jpg',
    text: ''
  },
  {
    src: 'https://www.northplains.org/sites/all/themes/aha_compass/images/background/bg2.jpg',
    text: ''
  },
  {
    src: 'https://www.northplains.org/sites/all/themes/aha_compass/images/background/bg3.jpg',
    text: ''
  },
  {
    src: 'https://www.northplains.org/sites/all/themes/aha_compass/images/background/bg4.jpg',
    text: ''
  }
  // {
  //   src: 'https://www.northplains.org/sites/all/themes/aha_compass/images/background/inner-body-bg.jpg',
  //   text: ''
  // }
];

const slideOpts = {
  initialSlide: 1,
  speed: 400,
  autoHeight: true
};

const Home: React.FC = () => {
  const slidesRef = useRef(document.createElement('ion-slides'))
  const AutoPlay = () => {
    slidesRef.current.lockSwipes(true)
    setTimeout(() => {
      slidesRef.current.lockSwipes(false)
      slidesRef.current.isEnd().then((value) => {
        if(value) {
          slidesRef.current.slideTo(0)
        } else {
          slidesRef.current.slideNext()
        }
      })
    }, 5000)
  }
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="North Plains" page="home" btn="settings" />
      </IonHeader>
      <IonContent>
        {/* <IonImg className="home-image" src={images[0].src} /> */}
        <IonSlides className="image-slides" onIonSlidesDidLoad={() => AutoPlay()} onIonSlideTransitionEnd={() => AutoPlay()} ref={slidesRef}>
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
      {/* </IonContent> */}
      </IonFooter>
    </IonPage>
  );
};

export default Home;