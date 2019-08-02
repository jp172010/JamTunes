import { configureStore } from 'redux-starter-kit'
import player from './reducers/player'

const store = configureStore({
  reducer: {
      player
  }
})

export default store