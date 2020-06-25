import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Importando os components
import PublicHomePage from "../PublicHomePage";
import PublicApplicationFormPage from "../PublicApplicationFormPage";
import PublicListTripsPages from "../PublicListTripsPage";
import PublicLoginPage from "../PublicLoginPage";
import AdmLoggedPage from "../AdmLoggedPage"
import AdmCreateTripPage from "../AdmCreateTripPage";
import AdmListTripsPage from "../AdmListTripsPage";
import AdmTripDetailsPage from "../AdmTripDetailsPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PublicHomePage />
                </Route>
                <Route exact path="/application-form">
                    <PublicApplicationFormPage />
                </Route>
                <Route exact path="/trips/public-list">
                    <PublicListTripsPages />
                </Route>
                <Route exact path="/login">
                    <PublicLoginPage />
                </Route>
                <Route exact path="/logged">
                    <AdmLoggedPage />
                </Route>
                <Route exact path="/trips/create">
                    <AdmCreateTripPage />
                </Route>
                <Route exact path="/trips/list">
                    <AdmListTripsPage />
                </Route>
                <Route exact path="/trips/details">
                    <AdmTripDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;