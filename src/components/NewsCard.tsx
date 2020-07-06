import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';

type Props = {
  article: any
  // title: string,
  // date: string,
  // id: string,
  // content: string
}

class NewsCard extends React.Component<Props> {

  // constructor(props: Props) {
  //   super(props);
  //   this.routeLink = "/news/" + this.props.article.id;
  // }
  routeLink: string = "/news/" + this.props.article.id;

  render() {
    console.log("this.props.article", this.props.article)
    return (
      // <IonCard onClick={() => console.log("routeLink="+this.routeLink)} 
      //         title={this.props.article.title} id={this.props.article.id} routerLink={this.routeLink}>
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
  }
}

export default NewsCard;