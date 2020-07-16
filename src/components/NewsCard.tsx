import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';

type Props = {
  article: any;
  // title: string,
  // date: string,
  // id: string,
  // content: string
};

class NewsCard extends React.Component<Props> {
  routeLink: string = "/news/" + this.props.article.id;

  render() {
    return (
      <IonCard title={this.props.article.title} id={this.props.article.id} routerLink={this.routeLink}>
        <IonCardHeader>
          <IonCardSubtitle>
            {this.props.article.date}
          </IonCardSubtitle>
          <IonCardTitle>
            {this.props.article.title}
          </IonCardTitle>
        </IonCardHeader>
      </IonCard>
    );
  };
};

export default NewsCard;