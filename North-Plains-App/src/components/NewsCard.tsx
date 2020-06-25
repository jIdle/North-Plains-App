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
  // img: string
}

class NewsCard extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    console.log("newscard", props);
    this.routeLink = "/news/" + this.props.id;
  }
  routeLink: string;

  render() {
    console.log("this.props", this.props)
    return (
      <IonCard onClick={() => console.log("routeLink="+this.routeLink)} 
              title={this.props.title} id={this.props.id}
                              routerLink={this.routeLink}>

                              {/* //  props={this.props} routerLink={this.routeLink}> */}


      {/* <IonCard> */}
      {/* <IonCard>*/}

      {/* <IonCard onClick={(e) => {
        e.preventDefault();
        history.pushState('/news')
      }} button={true} key={item.id}> */}

        {/* <IonItem routerLink="/news/newsdetail">
          <IonLabel>Item 1</IonLabel>
        </IonItem> */}

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