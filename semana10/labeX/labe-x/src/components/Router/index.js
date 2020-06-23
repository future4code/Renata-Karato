import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Importando os components
import HomePage from "../HomePage";
import ApplicationFormPage from "../ApplicationFormPage";
import PublicListTripsPages from "../PublicListTripsPage";
import LoginPage from "../LoginPage";
import LoggedPage from "../LoggedPage"
import CreateTripPage from "../CreateTripPage";
import ListTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/application-form">
                    <ApplicationFormPage />
                </Route>
                <Route exact path="/trips/public-list">
                    <PublicListTripsPages />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/logged">
                    <LoggedPage />
                </Route>
                <Route exact path="/trips/create">
                    <CreateTripPage />
                </Route>
                <Route exact path="/trips/list">
                    <ListTripsPage />
                </Route>
                <Route exact path="/trips/details">
                    <TripDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;