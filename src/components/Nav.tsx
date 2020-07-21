import React from 'react';
import { IonNav } from '@ionic/react';

interface IonReactNavProps {
  detail: Function
}

const Nav: React.FC<IonReactNavProps> = ({ children, detail }) => {
  const handleNavWillChange = async (navEl: HTMLIonNavElement) => {
    const rootView = await navEl.getByIndex(0)

    if(rootView == undefined) {
      const home = navEl.querySelector('#home-wrapper') as HTMLDivElement
      const detail = navEl.querySelector('#detail-wrapper') as HTMLDivElement

      navEl.setRoot(home)

      if(customElements.get('nav-detail') === undefined) {
        const detailNodes: ChildNode[] = []
        detail.childNodes.forEach(node => {
          detailNodes.push(node)
        })

        customElements.define('nav-detail', class NavDetail extends HTMLElement {
          connectedCallback() {
            this.append(...detailNodes)
          }
        })
      }

      navEl.querySelectorAll('.ion-react-nav-detail-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          navEl.push('nav-detail')
        })
      })
    }
  }
  
  return (
    <IonNav onIonNavWillChange={(e) => handleNavWillChange(e.target as HTMLIonNavElement)} root="nav-home">
      <div id="home-wrapper">
        {children}
      </div>
      <div id="detail-wrapper" style={{ display: 'none' }}>
        {detail()}
      </div>
    </IonNav>
  )
}

export default Nav