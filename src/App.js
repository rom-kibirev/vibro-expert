import React from "react";
import HeadSite from "./components/HeadSite";
import FooterSite from "./components/FooterSite";
import MainPage from "./components/MainPage";

function App() {
    return (
        <React.Fragment>
            <HeadSite />
            <MainPage />
            <FooterSite />
        </React.Fragment>
    );
}

export default App;
