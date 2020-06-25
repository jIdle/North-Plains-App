import React from 'react';
import { IonContent,
         IonHeader,
         IonPage,
         IonTitle,
         IonToolbar,
         IonCard,
         IonCardHeader,
         IonCardSubtitle,
         IonCardTitle,
         IonCardContent,
         IonItem,
         IonIcon, 
         IonLabel,
         IonButton,
         IonRouterOutlet,
         IonNav
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Link } from 'react-router-dom';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import NewsArticle from './NewsArticle';
// import NewsArticle from '../../components/NewsArticle';
import { render } from '@testing-library/react';

// Test data
// import newsItems from '../../test/newsItems.js';
export const newsItems = [
  {
    title: "COVID-19 Emergency Declaration extended through September 30, 2020",
    date: "Monday, June 15",
    id: "2"
  },
  {
    title: "Limited Business Hours for City Hall",
    date: "Sunday, June 14",
    id: "1"
  }
]

type Props = { props: any };
type State = { articles: Array<any>, segment: string};


// const News: React.FC = () => {
class News extends React.Component<Props, State> {
  routeLink: string;
  constructor(props: any) {
    super(props);
    this.routeLink = "";
  }
  handleClick(id: string) {
    console.log(id);
    this.routeLink = "/news/" + id;
    console.log(this.routeLink);
  }
  render() {
    return (
      <IonPage>
        <IonRouterOutlet>
          {/* <Route exact path="/news/newsdetail" component={NewsArticle} /> */}
          <Route path="/news/:id" component={NewsArticle} exact={true} />
        </IonRouterOutlet>
        <IonHeader>
          <IonToolbar>
            <IonTitle>News</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>

          {newsItems.map((item) => (
            // <IonCard routerLink="/news/newsdetail">
            <IonCard onClick={() => this.handleClick(item.id)} >
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
                  {item.date}
                </IonCardSubtitle>
                <IonCardTitle>
                  {item.title}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              </IonCardContent>
            </IonCard>
          ))}

        </IonContent>
      </IonPage>
    );
          };
};

export default News;