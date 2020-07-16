import React from 'react';
import {
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonThumbnail,
  IonImg,
} from '@ionic/react';
import ToolbarBtn from './ToolbarBtn';

type Props = {
  title: string;
  page: string;
  btn: string;
}

// Only display the city banner if we are on the homepage
const Banner = (page: string) => {
  if (page === "home") {
    return (
      <IonThumbnail slot="start">
        <IonImg className="title-icon" src="https://www.northplains.org/sites/all/themes/aha_compass/logo.png" />
      </IonThumbnail>
    )
  }
}

/**
 * Props:
 * @param title (string) title of your page ("North Plains", "News", ...)
 * @param page (string) type of page ("home", "news", ...)
 * @param btn (string) type of button ("settings", "share", ...)
 */
const Toolbar = (props: Props) => {
  return (
      <IonToolbar className="toolbar-container">
        <ToolbarBtn btn={props.btn} />
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        {Banner(props.page)}
        <IonTitle className="header-title">{props.title}</IonTitle>
      </IonToolbar>
  )
}

export default Toolbar;