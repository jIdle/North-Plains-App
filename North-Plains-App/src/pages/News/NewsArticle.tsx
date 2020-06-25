import React from 'react';
import { IonPage,
         IonHeader,
         IonToolbar,
         IonTitle,
         IonContent,
         IonList,
         IonItem,
         IonThumbnail,
         IonImg,
         IonLabel,
         IonButtons,
         IonBackButton
} from '@ionic/react';
import { render } from '@testing-library/react';
import { RouteComponentProps } from 'react-router-dom';

// type Item = {
//   src: string;
//   text: string;
// };
// const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }];

// interface NewsArticleProps extends RouteComponentProps<{
//   id: string;
// }> {}

type Props = {
  title: string,
  date: string,
  id: string,
  content: string
  // img: string
}

type State = {
  title: string,
  date: string,
  id: string,
  content: string
  // img: string
}

// const NewsArticle: React.FC<NewsArticleProps> = ({match}) => {
//   return (
//       <IonContent>
//       <IonList>
//         {items.map((image, i) => (
//           <IonItem key={i}>
//             <IonThumbnail slot="start">
//               <IonImg src={image.src} />
//             </IonThumbnail>
//             <IonLabel>{image.text}</IonLabel>
//           </IonItem>
//         ))}
//       </IonList>
//         Hello
//         {match.params.id}
//       </IonContent>
//   )
// };
class NewsArticle extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log("initial props", props)
    this.state = {
      title: props.title,
      date: props.date,
      id: props.id,
      content: props.content
      // img: ''
    }
  }

  showLoc() {
    console.log("newsarticle");
  }

  // showFile = async (e: any) => {
  //   if (e === null) {
  //     console.log("file is null")
  //     return
  //   }
  //   e.preventDefault()
  //   const reader = new FileReader()
  //   reader.onload = async (e) => {
  //     const text = (e.target.result)
  //     console.log(text)
  //     alert(text)
  //   };
  //   reader.readAsText(e.target.files[0])
  // }

  showImage() {

  }

  render() {
    console.log("newsarticlesss");
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
          {console.log("state", this.state)}
        {/* <div>
          <input type="file" onChange={(e) => this.showFile(e)} />
        </div> */}
        {/* <img src={ require("../../assets/img/news/2.jpg") }/> */}
        {/* <div dangerouslySetInnerHTML={} /> */}
      </IonPage>
    )
  };
};

export default NewsArticle;