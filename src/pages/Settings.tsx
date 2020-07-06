// Toggle usage:  https://ionicframework.com/docs/api/toggle#usage
// Need to find out how to set initial settings

import React, { useState } from 'react';

import { get, set } from '../services/storage';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonList,
  IonItemDivider,
  IonLabel,
  IonItem,
  IonToggle,
  withIonLifeCycle
} from '@ionic/react'

type Props = { props: any };
type State = { notifications: Array<any> };

// const Settings: React.FC = () => {
class Settings extends React.Component<Props, State> {
  testValue: any;

  // ionViewDidEnter() {
  //   console.log("ionViewDidEnter()");
  // }
  async ionViewDidEnter() {
    if (get("NotificationNews") == null) {
      console.log("NULL")
    }
    set("NotificationNews", true);
    this.testValue = await get("NotificationNews");
    console.log("ionViewDidEnter()", this.testValue);
  }

  render() {
    return (
      // <IonPage>
      //   <IonHeader>
      //     <IonToolbar>
      //       <IonButtons slot="start">
      //         <IonBackButton />
      //       </IonButtons>
      //       <IonTitle className="title">Settings</IonTitle>
      //     </IonToolbar>
      //   </IonHeader>
      //   <IonContent>

      //   </IonContent>


      // </IonPage>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>

            <IonItemDivider>Notifications</IonItemDivider>
            <IonItem>
              <IonLabel>News: {this.testValue}</IonLabel>
              <IonToggle checked={this.testValue} onIonChange={e => set("myValue", e.detail.checked)} />
            </IonItem>

          </IonList>
        </IonContent>
      </IonPage>
    )
  }
};

export default withIonLifeCycle(Settings);