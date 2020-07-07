import React from 'react';
import { useParams } from 'react-router-dom';
import {
  IonPage,
  IonHeader,
  IonContent
} from '@ionic/react';
import { findPark } from '../../hooks/findPark';
import Toolbar from '../../components/Toolbar';

// type Props = {
//   park: any;
// };

const ParkDetail: React.FC = () => {
  const { id } = useParams();
  const { found } = findPark(id);
  if (found == null) {
    return <p>Not found</p>;
  }
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Parks" page="parkDetail" btn="share" />
      </IonHeader>
      <IonContent>
        <h1>{found.name}</h1>
        <p>{found.address}</p>
        <p>{found.desc}</p>
      </IonContent>
    </IonPage>
  );
};

export default ParkDetail;