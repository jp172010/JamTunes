import { configureStore } from 'redux-starter-kit';
import player from './reducers/player';
import firebase from './reducers/firebase';

const store = configureStore({
  reducer: {
      player,
      firebase
  }
});

export default store;