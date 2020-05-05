
import axios from 'axios'
import {takeEvery, put} from "redux-saga/effects";


// these sagas take the dispatch and runs them before they get to the reducers
function* highScoreSaga() {
    yield takeEvery('GET_ALL_HIGH_SCORES', getAllHighScores);
   
}

// gets all high scores from DB
function* getAllHighScores(){
    console.log("We are here in saga GET all High Scores");
    const allHighs = yield axios.get(`/api/high/score/all`);
    console.log('in saga - all high scores GET back with:', allHighs.data);
    yield put({type: 'SET_ALL_HIGH_SCORES', payload: allHighs.data[0]})
}


export default highScoreSaga;