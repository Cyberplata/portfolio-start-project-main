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
import {Portfolio} from "./layout/section/portfolio/Portfolio";
import {Blog} from "./layout/section/blog/Blog";



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
            <Portfolio/>
            <Blog/>
        </div>
    );
}

export default App;
