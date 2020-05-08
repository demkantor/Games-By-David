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

// stores number of games played
const gamesPlayed = (state = {}, action) => {
    switch (action.type) {
        case 'SET_GAMES_PLAYED':
            return state = action.payload;
        default:
            return state;
    }
}

// stores memory best time
const memory = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MEMORY_BEST_TIME':
            return state = action.payload;
        default:
            return state;
    }
}

// stores player wins in tic-tac-toe
const tic = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TIC_WINS':
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

// stores snake high score
const snake = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SNAKE_HIGH_SCORE':
            return state = action.payload;
        default:
            return state;
    }
}

// stores player wins in connect four
const connect = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CONNECT_WINS':
            return state = action.payload;
        default:
            return state;
    }
}

// stores tetris high score
const tetris = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TETRIS_HIGH_SCORE':
            return state = action.payload;
        default:
            return state;
    }
}

// stores space invaders best time
const space = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SPACE_BEST_TIME':
            return state = action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    allHighs,
    gamesPlayed,
    memory,
    tic,
    whack,
    snake,
    connect,
    tetris,
    space
  });
