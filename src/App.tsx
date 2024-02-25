import './App.css';
import {Services} from "./layout/section/services/Services";
import React from "react";
import {CenterMain} from "./layout/section/main/centerMain/CenterMain";
import {LeftMain} from "./layout/section/main/leftMain/LeftMain";
import {RightMain} from "./layout/section/main/rightMain/RightMain";
import {PricePlans} from "./layout/section/pricePlans/PricePlans";


function App() {
    return (
        <div className="App">
            {/*<LeftMain/>*/}
            <CenterMain/>
            {/*<RightMain/>*/}
            <Services/>
            <PricePlans/>
        </div>
    );
}

export default App;
