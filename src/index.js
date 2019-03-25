import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './views/Main';
import Principal from './views/principal/Principal';
import Desempate from './views/desempate/Desempate';
import FormularioFacebook from './views/formulariofacebook/FormularioFacebook';
import FormularioInternet from './views/formulariointernet/FormularioInternet';
import Resultado from './views/resultado/Resultado';
import FormularioSmartphone from './views/formulariosmartphone/FormularioSmartphone';
import FormularioWhatsapp from './views/formulariowhatsapp/FormularioWhatsapp';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/principal" component={Principal} />
            <Route exact path="/desempate" component={Desempate} />
            <Route exact path="/smartphone" component={FormularioSmartphone} />
            <Route exact path="/whatsapp" component={FormularioWhatsapp} />
            <Route exact path="/facebook" component={FormularioFacebook} />
            <Route exact path="/internet" component={FormularioInternet} />
            <Route exact path="/resultado" component={Resultado} />
            <Route path="/" component={Main} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));