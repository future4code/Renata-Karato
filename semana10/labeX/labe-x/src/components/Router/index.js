import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";

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
                    <DocumentTitle title="LabeX - Home">
                        <PublicHomePage />
                    </DocumentTitle>
                </Route>
                <Route exact path="/trips/form/:id">
                    <DocumentTitle title="LabeX - Formulário de Inscrição">
                        <PublicApplicationFormPage />
                    </DocumentTitle>
                </Route>
                <Route exact path="/trips/public-list">
                    <DocumentTitle title="LabeX - Lista de Viagens">    
                        <PublicListTripsPages />
                    </DocumentTitle>
                </Route>
                <Route exact path="/login">
                    <DocumentTitle title="LabeX - Login Administrador">
                        <PublicLoginPage />
                    </DocumentTitle>
                </Route>
                <Route exact path="/logged">
                    <DocumentTitle title="LabeX - Logado">
                        <AdmLoggedPage />
                    </DocumentTitle>
                </Route>
                <Route exact path="/trips/create/">
                    <DocumentTitle title="LabeX - Criar Viagem">
                        <AdmCreateTripPage />
                    </DocumentTitle>
                </Route>
                <Route exact path="/trips/list">
                    <DocumentTitle title="LabeX - Lista de Viagens">
                        <AdmListTripsPage />
                    </DocumentTitle>
                </Route>
                <Route exact path="/trips/details/:id">
                    <DocumentTitle title="LabeX - Detalhes da Viagem">    
                        <AdmTripDetailsPage />
                    </DocumentTitle>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;