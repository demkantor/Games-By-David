import { combineReducers } from 'redux';

// stores all high scores
const allHighs = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ALL_HIGH_SCORES':
            return state = action.payload;
        default:
            return state;
    }
}

// stores memory win count
const memory = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MEMORY_HIGH_SCORE':
            return state = action.payload;
        default:
            return state;
    }
}

// stores whack-a-mole high score
const whack = (state = {}, action) => {
    switch (action.type) {
        case 'SET_WHACK_HIGH_SCORE':
            return state = action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    allHighs,
    memory,
    whack
  });
