import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { settingsOutline, shareSocial } from 'ionicons/icons'

type Props = { btn: string }

const SettingsBtn = () => {
  return (
    <IonButton routerLink="/settings" slot="primary" fill="clear">
      <IonIcon icon={settingsOutline}></IonIcon>
    </IonButton>
  )
}

const ShareBtn = () => {
  return (
    <IonButton slot="primary" fill="clear">
      <IonIcon icon={shareSocial}></IonIcon>
    </IonButton>
  )
}

/**
 * Props:
 * @param btn (string) "settings", "shared", ...
 */
const ToolbarBtn = (props: Props) => {
  console.log("ToolbarBtn", props)
  if (props.btn == "settings") {
    return ( <SettingsBtn /> )
  }
  else if (props.btn == "share") {
    return ( <ShareBtn /> )
  }
  // catch the rest
  else {
    return (<></>)
  }
}

export default ToolbarBtn;