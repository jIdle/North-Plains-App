import React from 'react';
import { useParams } from 'react-router-dom';
import {
  IonPage,
  IonHeader,
  IonContent,
  IonItem,
  IonIcon
} from '@ionic/react';
import { locationOutline } from 'ionicons/icons';
import { findPark } from '../../hooks/findPark';
import Toolbar from '../../components/Toolbar';
import './ParkDetail.css';

// type Props = {
//   park: any;
// };

const ParkDetail: React.FC = () => {
  const { id } = useParams();
  const { found } = findPark(id);
  console.log("ParkDetail")
  if (found == null) {
    return <p>Not found</p>;
  }
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Parks" page="parkDetail" btn="share" />
      </IonHeader>
      <IonContent>
        <div className="map-embed" dangerouslySetInnerHTML={{ __html: found.embed }} ></div>
        <IonItem color="medium">{found.name}</IonItem>
        <IonItem detail={false} href={found.link}><IonIcon icon={locationOutline} /><p>{found.address}</p></IonItem>
        <IonItem lines="none"><p>{found.desc}</p></IonItem>
      </IonContent>
    </IonPage>
  );
};

export default ParkDetail;