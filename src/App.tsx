import './App.css';
import {Services} from "./layout/section/services/Services";
import React from "react";
import {Header} from "./layout/header/Header";
import {LeftMain} from "./layout/section/main/leftMain/LeftMain";
import {RightMain} from "./layout/section/main/rightMain/RightMain";
import {PricePlans} from "./layout/section/pricePlans/PricePlans";
import {Recommendations} from "./layout/section/recommendations/Recommendations";
import {Education} from "./layout/section/education/Education";
import {WorkHistory} from "./layout/section/workHistory/WorkHistory";


function App() {
    return (
        <div className="App">
            {/*<LeftMain/>*/}
            <Header/>
            {/*<RightMain/>*/}
            <Services/>
            <PricePlans/>
            <Recommendations/>
            <Education/>
            <WorkHistory/>
        </div>
    );
}

export default App;
