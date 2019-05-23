import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Root from './routes/root/Root';
import FavouriteWords from './routes/favouritewords/FavouriteWords';
import Footer from './footer/Footer';
import { Provider } from '../Contexts/Contexts';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Root} />
              <Route path="/favouritewords" component={FavouriteWords} />
            </Switch>
          </div>

        <Footer />
      </div>
    </Provider>
  );
}


export default App;
