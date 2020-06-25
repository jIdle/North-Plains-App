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
         IonNav,
         IonButtons,
         IonBackButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Link, useLocation, withRouter } from 'react-router-dom';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import NewsArticle from './NewsArticle';
// import NewsArticle from '../../components/NewsArticle';
import NewsCard from '../../components/NewsCard';
import { render } from '@testing-library/react';
import { newsArticles } from '../../assets/content/news/content';

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
        {/* <IonRouterOutlet>
          <Route exact path="/news/newsdetail" component={NewsArticle} />
          <Route path="/news/:id" component={NewsArticle} exact={true} />
        </IonRouterOutlet> */}
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>News</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {newsArticles.map((article: any) => 
            <NewsCard title={article.title} date={article.date} id={article.id}
                      content={article.content}></NewsCard>
          )}

        </IonContent>
      </IonPage>
    );
  };
};

export default News;