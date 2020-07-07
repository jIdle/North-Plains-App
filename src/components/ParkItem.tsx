import React from 'react';
import {
  IonLabel,
  IonItem,
} from '@ionic/react';

type Props = {
  park: any;
};

class ParkItem extends React.Component<Props> {
  routeLink: string = "/parks/" + this.props.park.id;
  render() {
    return (
      <IonItem onClick={() => console.log("ParkItem", this.routeLink)} button routerLink={this.routeLink}>
        <IonLabel>
          {this.props.park.name}
        </IonLabel>
      </IonItem>
    );
  };
};

export default ParkItem;