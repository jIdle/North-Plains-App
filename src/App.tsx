import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import News from './pages/News/News';
import NewsArticle from './pages/News/NewsArticle';
import { History } from 'history';
import { useHistory } from 'react-router';
import { GridExample } from './test/grid';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Add custom property 'apphistory' to the global window object
// https://github.com/ionic-team/ionic/issues/20297
declare global {
  interface Window { appHistory: History }
}

const App: React.FC = () => {
  // Store the history object globally so we can access it outside of React components
  window.appHistory = useHistory()
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/news" component={News} exact={true} />
          <Route path="/news/:id" component={NewsArticle} exact={true} />
          <Route exact path="/grid" component={GridExample} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          {/* <Route exact path="/" render={() => <Redirect to="/grid" />} /> */}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
