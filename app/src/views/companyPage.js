import {Route, Switch, useParams} from 'react-router-dom';
import AppBar from "../components/appBar";
import React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {createTheme} from "@material-ui/core/styles";
import ProposalsOfCompany from "../components/proposalsOfCompany";

const theme = createTheme({
    palette: {
        primary: {
            main: '#A68617'
        },
        secondary: {
            main: '#1F75A6'
        }
    }
});

export default function CompanyPage() {
    const {id} = useParams()
    return(
        <MuiThemeProvider theme={theme}>
            <AppBar companyId={id}/>
            <Switch>
                <Route path={`/companies/${id}/proposals`}>
                    <ProposalsOfCompany id={id}/>
                </Route>
            </Switch>
        </MuiThemeProvider>
    )
}