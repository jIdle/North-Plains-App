import { IonIcon, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonThumbnail, IonImg, IonButtons} from '@ionic/react';
import React, { useState } from 'react';
import Content from '../../assets/CityCouncilContent';
import Nav from '../../components/Nav';
import Link from '../../components/Link';
import { IonReactRouter } from '@ionic/react-router';
import { arrowBack } from 'ionicons/icons';

const CityCouncil: React.FC = () => {
  const [member, setMember] = useState(Content[0])
  console.log("member", member)

  return (
    <IonPage>
      <IonReactRouter>
        <Nav detail={() => <Link {...member}/>}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton href="/home">
                  <IonIcon icon={arrowBack}/>
                </IonButton>
              </IonButtons>
              <IonTitle>City Council</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonList>
              {Content.map((member, i) => {
                return (
                  <IonItem button className="ion-react-nav-detail-btn" key={i} onClick={() => setMember(Content[i])}>
                    <IonThumbnail slot="start">
                      <IonImg src={member.thumbnail}/>
                    </IonThumbnail>
                    <IonLabel>
                      <h3>{member.title}</h3>
                    </IonLabel>
                  </IonItem>
                )
              })}
            </IonList>
          </IonContent>
        </Nav>
      </IonReactRouter>
    </IonPage>
  );
};

export default CityCouncil;