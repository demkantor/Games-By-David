
import axios from 'axios'
import {takeEvery, put} from "redux-saga/effects";


// these sagas take the dispatch and runs them before they get to the reducers
function* highScoreSaga() {
    yield takeEvery('GET_ALL_HIGH_SCORES', getAllHighScores);
    yield takeEvery('GET_GAMES_PLAYED', getGamesPlayed);
    yield takeEvery('ANOTHER_GAME_PLAYED', anotherGamePlayed);
   
}

// gets all high scores from DB
function* getAllHighScores(){
    console.log("We are here in saga GET all High Scores");
    const allHighs = yield axios.get(`/api/high/score/all`);
    console.log('in saga - all high scores GET back with:', allHighs.data);
    yield put({type: 'SET_ALL_HIGH_SCORES', payload: allHighs.data[0]});
}

// gets games played from DB
function* getGamesPlayed(){
    console.log("We are here in saga GET games played");
    const gamesPlayed = yield axios.get(`/api/high/score/games/played`);
    console.log('in saga - games played GET back with:', gamesPlayed.data);
    yield put({type: 'SET_GAMES_PLAYED', payload: gamesPlayed.data[0]});
}

// updates game played count in DB
function* anotherGamePlayed(game){
    try {
        const anotherGame = yield axios.put(`/api/high/score/games/played/update`, game.payload);
        console.log('in SAGA returning from update games played PUT', anotherGame);
        yield put({type: 'GET_GAMES_PLAYED'});
    } catch(error){
        console.log('error in saga update games played:', error);
    }
}

export default highScoreSaga;