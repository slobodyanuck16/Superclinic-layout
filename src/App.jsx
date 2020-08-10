import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from './components/Header'
import MainDescription from './components/MainDescription'
import Directions from './components/Directions'

function App() {
    return (
        <div className="page">
            <Header />
            <MainDescription />
            <Route path="/:direction">
                <Directions />
            </Route>
            <Redirect to="/neurology" />
        </div>
    );
}

export default App;
