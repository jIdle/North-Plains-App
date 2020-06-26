import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

type Props = {
  title: string,
  date: string,
  id: string,
  content: string
}

class NewsCard extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.routeLink = "/news/" + this.props.id;
  }
  routeLink: string;

  render() {
    console.log("this.props", this.props)
    return (
      <IonCard onClick={() => console.log("routeLink="+this.routeLink)} 
              title={this.props.title} id={this.props.id} routerLink={this.routeLink}>
        <IonCardHeader>
          <IonCardSubtitle>
            {this.props.date}
          </IonCardSubtitle>
          <IonCardTitle>
            {this.props.title}
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
        </IonCardContent>
      </IonCard>
    );
  }
}

export default NewsCard;