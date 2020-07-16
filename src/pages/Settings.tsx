// Toggle usage:  https://ionicframework.com/docs/api/toggle#usage
// Need to find out how to set initial settings

import React from 'react';

import { get, set } from '../services/storage';

import {
  IonPage,
  IonHeader,
  IonContent,
  IonList,
  IonItemDivider,
  IonLabel,
  IonItem,
  IonToggle,
  withIonLifeCycle
} from '@ionic/react'

import Toolbar from '../components/Toolbar';

type Props = { props: any };
type State = { notifications: Array<any> };

class Settings extends React.Component<Props, State> {
  testValue: any;

  // TODO: Need to fetch settings
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
      <IonPage>
        <IonHeader>
          <Toolbar title="Settings" page="settings" btn="none" />
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