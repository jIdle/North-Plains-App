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
  // body: string
};

// class NewsCard extends React.Component<Props> {
const NewsCard: React.FC<Props> = ({ article }) => {
  // routeLink: string = "/news/" + this.props.article.id;

  // render() {
  return (
    // <IonCard routerLink={this.routeLink}>
    // <IonCard onClick={() => console.log("NewsCard props", article,  "\n\nclick!\n\n")} routerLink={`/news/${article.id}`}>
    // <IonCard >
    <>
      <IonCardHeader>
        <IonCardSubtitle>
          {/* date:{this.props.article.date} id:{this.props.article.id}} */}
          date:{article.date} id:{article.id}
        </IonCardSubtitle>
        <IonCardTitle>
          {/* title:{this.props.article.title} */}
          title:{article.title}
        </IonCardTitle>
      </IonCardHeader>
    </>
    // </IonCard>
  );
  // };
};

export default NewsCard;