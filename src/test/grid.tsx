import React from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonInput
} from '@ionic/react';

export const GridExample: React.FC = () => (
  <IonContent>
    {/* <IonGrid>
      <IonRow>
        <IonCol>IonCol</IonCol>
        <IonCol>IonCol</IonCol>
        <IonCol>IonCol</IonCol>
        <IonCol>IonCol</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6">IonCol size="6"</IonCol>
        <IonCol>IonCol</IonCol>
        <IonCol>IonCol</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="3">IonCol size="3"</IonCol>
        <IonCol>IonCol</IonCol>
        <IonCol size="3">IonCol size="3"</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="3">IonCol size="3"</IonCol>
        <IonCol size="3" offset="3">
          IonCol size="3" offset="3"
        </IonCol>
      </IonRow>
    </IonGrid> */}

  {/* <IonGrid>
      <IonRow>
        <IonCol>IonCol</IonCol>
        <IonCol>
          IonCol
          <br />#
        </IonCol>
        <IonCol>
          IonCol
          <br />#
          <br />#
        </IonCol>
        <IonCol>
          IonCol
          <br />#
          <br />#
          <br />#
        </IonCol>
      </IonRow>
    </IonGrid> */}

    {/* <IonGrid>
      <IonRow>
        <IonCol className="ion-align-self-start">IonCol start</IonCol>
        <IonCol className="ion-align-self-center">IonCol center</IonCol>
        <IonCol className="ion-align-self-end">IonCol end</IonCol>
        <IonCol>
          IonCol
          <br />#
          <br />#
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="4">1</IonCol>
        <IonCol>2</IonCol>
        <IonCol>3</IonCol>
      </IonRow>
      <IonRow>
        <IonCol>1</IonCol>
        <IonCol>2</IonCol>
        <IonCol>3</IonCol>
      </IonRow>
    </IonGrid> */}

    {/* <IonGrid>
      {/* <IonRow className="ion-align-items-start">
        <IonCol>start IonCol</IonCol>
        <IonCol>start IonCol</IonCol>
        <IonCol className="ion-align-self-end">start IonCol end</IonCol>
        <IonCol>
          IonCol
          <br />#
          <br />#
        </IonCol>
      </IonRow>
    </IonGrid> */}

    {/* <IonGrid>
      <IonRow className="ion-align-items-center">
        <IonCol>center IonCol</IonCol>
        <IonCol>center IonCol</IonCol>
        <IonCol>center IonCol</IonCol>
        <IonCol>
          IonCol
          <br />#
          <br />#
        </IonCol>
      </IonRow>
    </IonGrid> */}

    {/* <IonGrid>
      <IonRow className="ion-align-items-end">
        <IonCol>end IonCol</IonCol>
        <IonCol className="ion-align-self-start">end IonCol start</IonCol>
        <IonCol>end IonCol</IonCol>
        <IonCol>
          IonCol
          <br />#
          <br />#
        </IonCol>
      </IonRow>
    </IonGrid> */}

    {/* <IonGrid>
      <IonRow>
        <IonCol size="12" sizeSm="true">
          IonCol size="12" sizeSm="true"
        </IonCol>
        <IonCol size="12" sizeSm="true">
          IonCol size="12" sizeSm="true"
        </IonCol>
        <IonCol size="12" sizeSm="true">
          IonCol size="12" sizeSm="true"
        </IonCol>
        <IonCol size="12" sizeSm="true">
          IonCol size="12" sizeSm="true"
        </IonCol>
      </IonRow>
    </IonGrid> */}

    {/* <IonGrid>
      <IonRow>
        <IonCol size="12" sizeMd="true">
          IonCol size="12" sizeMd="true"
        </IonCol>
        <IonCol size="12" sizeMd="true">
          IonCol size="12" sizeMd="true"
        </IonCol>
        <IonCol size="12" sizeMd="true">
          IonCol size="12" sizeMd="true"
        </IonCol>
        <IonCol size="12" sizeMd="true">
          IonCol size="12" sizeMd="true"
        </IonCol>
      </IonRow>
    </IonGrid> */}

    {/* <IonGrid>
      <IonRow>
        <IonCol size="6" size-lg offset="3">
          IonCol size="6" size-lg offset="3"
        </IonCol>
        <IonCol size="3" size-lg>
          IonCol size="3" size-lg
        </IonCol>
      </IonRow>
    </IonGrid> */}

    {/* Auto-layout columns */}

    {/* Equal-width */}
    {/* <IonGrid>
      <IonRow>
        <IonCol>
          <div>
            1 of 2
          </div>
        </IonCol>
        <IonCol>
          <div>
            2 of 2
          </div>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <div>
            1 of 3
          </div>
        </IonCol>
        <IonCol>
          <div>
            2 of 3
          </div>
        </IonCol>
        <IonCol>
          <div>
            3 of 3
          </div>
        </IonCol>
      </IonRow>
    </IonGrid> */}

    {/* Setting one column width */}
    {/* <IonGrid>
      <IonRow>
        <IonCol>
          <div>
            1 of 3
          </div>
        </IonCol>
        <IonCol size="8">
          <div>
            2 of 3 (wider)
          </div>
        </IonCol>
        <IonCol>
          <div>
            3 of 3
          </div>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <div>
            1 of 3
          </div>
        </IonCol>
        <IonCol size="6">
          <div>
            2 of 3 (wider)
          </div>
        </IonCol>
        <IonCol>
          <div>
            3 of 3
          </div>
        </IonCol>
      </IonRow>
    </IonGrid> */}

    {/* Variable-width */}
    {/* <IonGrid>
      <IonRow>
        <IonCol>
          <div>
            1 of 3
          </div>
        </IonCol>
        <IonCol size="auto">
          <div>
            Variable width content
          </div>
        </IonCol>
        <IonCol>
          <div>
            3 of 3
          </div>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <div>
            1 of 4
          </div>
        </IonCol>
        <IonCol>
          <div>
            2 of 4
          </div>
        </IonCol>
        <IonCol size="auto">
          <div>
            <IonInput placeholder="Variable width input"></IonInput>
          </div>
        </IonCol>
        <IonCol>
          <div>
            4 of 4
          </div>
        </IonCol>
      </IonRow>
    </IonGrid> */}

    {/* Responsive */}

    {/* All breakpoints  */}
    {/* <IonGrid>
      <IonRow>
        <IonCol size="4">
          <div>
            1 of 4
          </div>
        </IonCol>
        <IonCol size="2">
          <div>
            2 of 4
          </div>
        </IonCol>
        <IonCol size="2">
          <div>
            3 of 4
          </div>
        </IonCol>
        <IonCol size="4">
          <div>
            4 of 4
          </div>
        </IonCol>
      </IonRow>
    </IonGrid> */}
    
    {/* Stacked to horizontal */}
    {/* Note:
    This:         <IonCol size="12" sizeSm="true">
    Needs to be:  <IonCol size="12" sizeSm="true"> */}
    {/* <IonGrid>
      <IonRow>
        <IonCol className="ion-align-items-end" size="12" sizeSm="true">
          <div>
            1 of 4
          </div>
        </IonCol>
        <IonCol size="12" sizeSm="true">
          <div>
            2 of 4
          </div>
        </IonCol>
        <IonCol size="12" sizeSm="true">
          <div>
            3 of 4
          </div>
        </IonCol>
        <IonCol size="12" sizeSm="true">
          <div>
            4 of 4
          </div>
        </IonCol>
      </IonRow>
    </IonGrid> */}

    <h2>Reordering</h2>

    <h3>Offsetting columns</h3>
    <IonGrid>
      <IonRow>
        <IonCol size="3">
          <div>
            1 of 2
          </div>
        </IonCol>
        <IonCol size="3" offset="3">
          <div>
            2 of 2
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>

    <IonGrid>
      <IonRow>
        <IonCol sizeMd="3">
          <div>
            1 of 3
          </div>
        </IonCol>
        <IonCol sizeMd="3">
          <div>
            2 of 3
          </div>
        </IonCol>
        <IonCol sizeMd="3" offsetMd="3">
          <div>
            3 of 3
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>

    {/* Push and pull */}
    <h3>Push and pull</h3>
    <IonGrid>
      <IonRow>
        <IonCol size="9" push="3">
          <div>
            1 of 2
          </div>
        </IonCol>
        <IonCol size="3" pull="9">
          <div>
            2 of 2
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>

    <IonGrid>
      <IonRow>
        <IonCol sizeMd="6" pushMd="3">
          <div>
            1 of 3
          </div>
        </IonCol>
        <IonCol sizeMd="3" pushMd="3">
          <div>
            2 of 3
          </div>
        </IonCol>
        <IonCol sizeMd="3" pullMd="9">
          <div>
            3 of 3
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>

    <h3>Vertical alignment</h3>
    <IonGrid>
      <IonRow className="ion-align-items-start">
        <IonCol>
          <div>
            1 of 4
          </div>
        </IonCol>
        <IonCol>
          <div>
            2 of 4
          </div>
        </IonCol>
        <IonCol>
          <div>
            3 of 4
          </div>
        </IonCol>
        <IonCol>
          <div>
            4 of 4 <br />
            # <br />
            # <br />
            #
          </div>
        </IonCol>
      </IonRow>

      <IonRow className="ion-align-items-center">
        <IonCol>
          <div>
            1 of 4
          </div>
        </IonCol>
        <IonCol>
          <div>
            2 of 4
          </div>
        </IonCol>
        <IonCol>
          <div>
            3 of 4
          </div>
        </IonCol>
        <IonCol>
          <div>
            4 of 4 <br />
            # <br />
            # <br />
            #
          </div>
        </IonCol>
      </IonRow>

      <IonRow className="ion-align-items-end">
        <IonCol>
          <div>
            1 of 4
          </div>
        </IonCol>
        <IonCol>
          <div>
            2 of 4
          </div>
        </IonCol>
        <IonCol>
          <div>
            3 of 4
          </div>
        </IonCol>
        <IonCol>
          <div>
            4 of 4 <br />
            # <br />
            # <br />
            #
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>

  </IonContent>
);

export default GridExample;