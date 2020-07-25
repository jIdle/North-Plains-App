import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// Page imports
import Home from './pages/Home';
import News from './pages/News/News';
import NewsArticle from './pages/News/NewsArticle';
import Settings from './pages/Settings';
import ParksPage from './pages/Parks/ParksPage';
import ParkDetail from './pages/Parks/ParkDetail';
import CityCouncil from './pages/CityCouncil/CityCouncil';
// Testing imports
import { LabelExample } from './test/button';

import { History } from 'history';
import { useHistory } from 'react-router';

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
import './theme/App.css';

// Add custom property 'apphistory' to the global window object
// https://github.com/ionic-team/ionic/issues/20297
declare global {
  interface Window { appHistory: History }
};

const App: React.FC = () => {
  // Store the history object globally so we can access it outside of React components
  window.appHistory = useHistory();
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/news" component={News} exact={true} />
          <Route path="/news/:id" render={(state) => <NewsArticle article={state} />} />
          <Route path="/settings" component={Settings} exact={true} />
          <Route path="/parks" component={ParksPage} exact={true} />
          <Route path="/parks/:id" component={ParkDetail} />
          <Route path="/citycouncil" component={CityCouncil} exact={true} />
          <Route path="/buttons" component={LabelExample} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
