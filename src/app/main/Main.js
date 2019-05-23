import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Root from './routes/root/Root';
import FavouriteWords from './routes/favouritewords/FavouriteWords';


class Main extends React.Component {
  constructor() {
    super();
      this.getRoot = this.getRoot.bind(this);
      this.getFavouriteWords = this.getFavouriteWords.bind(this);
  }

  getRoot() {
    return (
      <Root />
    );
  }

  getFavouriteWords() {
    return (
      <FavouriteWords />
    );
  }
  render() {

    return (
      <main>
        <Switch>
          <Route exact path="/" component={this.getRoot} />
          <Route path="/favouritewords" component={this.getFavouriteWords} />
        </Switch>
      </main>
    )
  }
}
export default Main;
