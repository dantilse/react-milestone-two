// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom'; // flow type provided by router
import styled from 'styled-components';
// Components
import About from './About';
import Contact from './Contact';
import Details from './Details';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

import preload from '../data.json';

const Site = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SiteBody = styled.section`
  flex-grow: 1;
  width: 100%;
  max-width: 1200px;
  padding: 30px;
  margin-right: auto;
  margin-left: auto;
`;


const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Site className="site">
      <Header />
      <SiteBody className="site-body">
        <Switch>
          <Route exact path="/" component={(props: { match: Match}) => (
              <Home image={preload.images} {...props} />
            )} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/details/:id" component={(props: { match: Match }) => (
              <Details image={preload.images.find(image => props.match.params.id === image.id)} {...props} />
            )}
          />
          <Route component={FourOhFour} />
        </Switch>
      </SiteBody>
      <Footer />
    </Site>
  </BrowserRouter>
);

export default App;