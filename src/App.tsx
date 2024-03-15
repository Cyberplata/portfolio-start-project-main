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
import {Info} from "./layout/section/info/Info";
import {Map} from "./layout/section/map/Map";
import {Logo} from './layout/section/logo/Logo';
import {Footer} from "./layout/footer/Footer";
import { ContainerLayout } from './components/ContainerLayout';
import { PricesSupport} from "./layout/section/pricesSupport/PricesSupport";


function App() {
    return (
        <div className="App">
            <LeftMain/>
            <ContainerLayout>
                <Header/>
                <Services/>
                <PricePlans/>
                <PricesSupport/>
                <Recommendations/>
                <Education/>
                <WorkHistory/>
                <Portfolio/>
                <Blog/>
                <Info/>
                <Map/>
                <Logo/>
                <Footer/>
            </ContainerLayout>
            <RightMain/>
        </div>
    );
}

export default App;

// Нужно эти стили задать для класса App
// display: flex;
// max-height: 100vh;
// overflow: hidden;
