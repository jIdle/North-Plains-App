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
} from '@ionic/react'

const Settings: React.FC = () => {
  const [checked, setChecked] = useState(false);
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
        <IonTitle>ToggleExamples</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>

        <IonItemDivider>Default Toggle</IonItemDivider>
        <IonItem>
          <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
          <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
        </IonItem>

        <IonItemDivider>Disabled Toggle</IonItemDivider>
        <IonItem><IonToggle disabled /></IonItem>

        <IonItemDivider>Checked Toggle</IonItemDivider>
        <IonItem><IonToggle checked /></IonItem>

        <IonItemDivider>Toggle Colors</IonItemDivider>
        <IonItem><IonToggle color="primary" /></IonItem>
        <IonItem><IonToggle color="secondary" /></IonItem>
        <IonItem><IonToggle color="danger" /></IonItem>
        <IonItem><IonToggle color="light" /></IonItem>
        <IonItem><IonToggle color="dark" /></IonItem>

        <IonItemDivider>Toggles in a List</IonItemDivider>
        <IonItem>
          <IonLabel>Pepperoni</IonLabel>
          <IonToggle value="pepperoni" />
        </IonItem>

        <IonItem>
          <IonLabel>Sausage</IonLabel>
          <IonToggle value="sausage" disabled={true} />
        </IonItem>

        <IonItem>
          <IonLabel>Mushrooms</IonLabel>
          <IonToggle value="mushrooms" />
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
  )

};

export default Settings;