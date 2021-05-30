import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';
import Api from './Api';
import Redux from './Components/Redux';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/service' component={Service} />
                <Route exact path='/Api' component={Api} />
                <Route exact path='/components/Redux' component={Redux} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
};

export default App;