import { combineReducers } from 'redux'
import counter from './counter'
import games from './games'

export default combineReducers({
  counter,
  games
})
