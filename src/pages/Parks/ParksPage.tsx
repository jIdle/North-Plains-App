import React from 'react';
import {
  IonPage,
  IonHeader,
  IonContent,
} from '@ionic/react';
import { parks } from '../../assets/content';
import Toolbar from '../../components/Toolbar';
import ParkItem from '../../components/ParkItem';

const ParksPage: React.FC = () => {
  console.log("ParksPage")
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Parks" page="parks" btn="settings" />
      </IonHeader>
      <IonContent>
        {parks.map((park: any) =>
          <ParkItem key={park.id} park={park} />
        )};
      </IonContent>
    </IonPage>
  );
};

export default ParksPage;