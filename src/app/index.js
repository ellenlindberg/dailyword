import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Root from './routes/root/Root';
import FavouriteWords from './routes/favouritewords/FavouriteWords';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

        <div class="container">
          <Switch>
            <Route exact path="/" component={Root} />
            <Route path="/favouritewords" component={FavouriteWords} />
          </Switch>
        </div>
        
      <Footer />
    </div>
  );
}


export default App;
