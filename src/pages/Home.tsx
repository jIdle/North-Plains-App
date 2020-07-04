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
  IonImg,
  IonThumbnail
} from '@ionic/react';
import {
  bus,
  notifications,
  newspaperOutline,
  calendarOutline,
  bookOutline,
  cardOutline,
  leafOutline,
  clipboardOutline,
  peopleOutline,
  paperPlaneOutline,
  helpOutline,
  linkOutline,
  documentTextOutline,
  trailSignOutline,
  peopleCircleOutline,
  chatbubblesOutline,
  desktopOutline,
  play,
  settingsOutline,
} from 'ionicons/icons'
import React from 'react';
// import './Home.css';
import { render } from '@testing-library/react';

type Image = {
  src: string;
  text: string;
};

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
    src: 'https://www.northplains.org/sites/all/themes/aha_compass/images/background/inner-body-bg.jpg',
    text: ''
  }
]

const slideOpts = {
  initialSlide: 1,
  speed: 400,
  autoHeight: true
}

const Home: React.FC = () => {
// class Home extends React.Component {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton className="settings" slot="primary" fill="clear"><IonIcon icon={settingsOutline}></IonIcon></IonButton>
          <IonThumbnail slot="start">
            <IonImg className="titleicon" src="https://www.northplains.org/sites/all/themes/aha_compass/logo.png" />
          </IonThumbnail>
          <IonTitle className="title">North Plains</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides className="image-slides">
        {/* <IonSlides options={slideOpts}> */}
          {images.map((image) => (
            <IonSlide>
              <IonImg src={image.src} />
            </IonSlide>
          ))}
        </IonSlides>
        <div className="slides-buttons-container">
          <IonSlides pager>
            <IonSlide>
              <IonGrid>
                <IonRow class="ion-text-center">
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={play} /></IonButton><br/>Welcome</IonCol>
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={notifications} /></IonButton><br/>Notifications</IonCol>
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={cardOutline} /></IonButton><br/>Pay Utilities</IonCol>
                </IonRow>
                <IonRow class="ion-text-center">
                  <IonCol><IonButton className="menu-button" routerLink="/news" fill="clear"><IonIcon icon={newspaperOutline} /></IonButton><br/>News</IonCol>
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={calendarOutline} /></IonButton><br/>Calendar</IonCol>
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={leafOutline} /></IonButton><br/>Parks</IonCol>
                </IonRow>
                <IonRow class="ion-text-center">
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={bookOutline} /></IonButton><br/>City Library</IonCol>
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={peopleOutline} /></IonButton><br/>City Council</IonCol>
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={clipboardOutline} /></IonButton><br/>Agendas & Minutes</IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
            <IonSlide>
              <IonGrid>
                <IonRow class="ion-text-center">
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={documentTextOutline} /></IonButton><br/>Municipal Code</IonCol>
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={trailSignOutline} /></IonButton><br/>Report a Code Violation</IonCol>
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={bus} /></IonButton><br/>Bus Schedules</IonCol>
                </IonRow>
                <IonRow class="ion-text-center">
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={paperPlaneOutline} /></IonButton><br/>Who do I Contact?</IonCol>
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={helpOutline} /></IonButton><br/>FAQ's</IonCol>
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={linkOutline} /></IonButton><br/>Useful Links</IonCol>
                </IonRow>
                <IonRow class="ion-text-center">
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={peopleCircleOutline} /></IonButton><br/>Our Staff</IonCol>
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={chatbubblesOutline} /></IonButton><br/>Contact Us</IonCol>
                  <IonCol><IonButton className="menu-button" fill="clear"><IonIcon icon={desktopOutline} /></IonButton><br/>Our Website</IonCol>
                </IonRow>
              </IonGrid>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
