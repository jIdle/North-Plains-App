import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
} from '@ionic/react';
import NewsCard from '../../components/NewsCard';
import { newsArticles } from '../../assets/content';
import Toolbar from '../../components/Toolbar';

type Props = { props: any };
type State = { articles: Array<any>, segment: string};

class News extends React.Component<Props, State> {
  routeLink: string;
  constructor(props: any) {
    super(props);
    this.routeLink = "";
  };
  handleClick(id: string) {
    console.log("id", id);
    this.routeLink = "/news/" + id;
    console.log("this.routeLink", this.routeLink);
  };
  render() {
    return (
      <IonPage>
        <IonHeader>
          <Toolbar title="News" page="news" btn="settings" />
        </IonHeader>
        <IonContent>
          {newsArticles.map((article: any) => 
            <NewsCard article={article}></NewsCard>
          )};
        </IonContent>
      </IonPage>
    );
  };
};

export default News;