import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Principal from './views/principal/Principal';
import Desempate from './views/desempate/Desempate';
import FormularioFacebook from './views/formulariofacebook/FormularioFacebook';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/principal" component={Principal} />
            <Route exact path="/desempate" component={Desempate} />
            <Route exact path="/smartphone" component={Desempate} />
            <Route exact path="/whatsapp" component={Desempate} />
            <Route exact path="/facebook" component={FormularioFacebook} />
            <Route exact path="/internet" component={Desempate} />
            <Route exact path="/resultado" component={Desempate} />
            <Route path="/" component={Main} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));