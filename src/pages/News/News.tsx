import React from 'react';
import { IonContent,
         IonHeader,
         IonPage,
         IonTitle,
         IonToolbar,
         IonButtons,
         IonBackButton
} from '@ionic/react';
import NewsCard from '../../components/NewsCard';
import { newsArticles } from '../../assets/content/news/content';

type Props = { props: any };
type State = { articles: Array<any>, segment: string};

class News extends React.Component<Props, State> {
  routeLink: string;
  constructor(props: any) {
    super(props);
    this.routeLink = "";
  }
  handleClick(id: string) {
    console.log("id", id);
    this.routeLink = "/news/" + id;
    console.log("this.routeLink", this.routeLink);
  }
  render() {
    return (
      <IonPage>
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
            // <NewsCard title={article.title} date={article.date} id={article.id}
            //           content={article.content}></NewsCard>
            <NewsCard article={article}></NewsCard>
          )}
        </IonContent>
      </IonPage>
    );
  };
};

export default News;