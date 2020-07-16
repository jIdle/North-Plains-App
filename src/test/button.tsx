import React from 'react';
import { IonLabel, IonItem, IonInput, IonToggle, IonCheckbox, IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
} from '@ionic/react';
import {
  newspaperOutline,
  calendarOutline,
  leafOutline
} from 'ionicons/icons'
import './button.css';

export const LabelExample: React.FC = () => (
  <IonContent>
    <IonGrid>
      <IonRow className="ion-text-center">
      {/* <IonRow> */}
        <IonCol>
          <IonItem button routerLink="/news">
            <IonIcon icon={newspaperOutline} />
            <IonLabel position="stacked">News</IonLabel>
          </IonItem>
        </IonCol>

        <IonCol>
          <IonItem button>
            <IonIcon icon={calendarOutline} />
            <IonLabel position="stacked">Calendar</IonLabel>
          </IonItem>
        </IonCol>

        <IonCol>
          <IonItem button routerLink="parks">
            <IonIcon icon={leafOutline} />
            <IonLabel position="stacked">Parks</IonLabel>
          </IonItem>
          </IonCol>
      </IonRow>
    </IonGrid>
    {/*-- Default Label --*/}
    <IonLabel>Label</IonLabel><br />

    {/*-- Label Colors --*/}
    <IonLabel color="primary">Primary Label</IonLabel><br />
    <IonLabel color="secondary">Secondary Label</IonLabel><br />
    <IonLabel color="danger">Danger Label</IonLabel><br />
    <IonLabel color="light">Light Label</IonLabel><br />
    <IonLabel color="dark">Dark Label</IonLabel><br />

    {/*-- Item Labels --*/}
    <IonItem>
      <IonLabel>Default Item</IonLabel>
    </IonItem>

    <IonItem>
      <IonLabel className="ion-text-wrap">
        Multi-line text that should wrap when it is too long
        to fit on one line in the item.
      </IonLabel>
    </IonItem>

    {/*-- Input Labels --*/}
    <IonItem>
      <IonLabel>Default Input</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel position="fixed">Fixed</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel position="floating">Floating</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel position="stacked">Stacked</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel>Toggle</IonLabel>
      <IonToggle slot="end" checked></IonToggle>
    </IonItem>

    <IonItem>
      <IonCheckbox slot="start" checked />
      <IonLabel>Checkbox</IonLabel>
    </IonItem>
  </IonContent>
);