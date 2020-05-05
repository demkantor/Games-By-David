import { combineReducers } from 'redux';
import highScore from './highScoreReducer';





const rootReducer = combineReducers({
    highScore,
  });
  
  export default rootReducer;