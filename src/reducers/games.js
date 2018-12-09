import { keyMap } from '../constants/games';
const {
  INPUT,
  INPUTEND,
  COMPUTE 
} = keyMap;

const INITIAL_STATE = {
  value: 3,
  results: [],
  endValue: 100
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        value: action.payload
      }
    case INPUTEND:
      return {
        ...state,
        endValue: action.payload
      }
    case COMPUTE:
        const results = [];
        let i = 1;
        for(; i < state.endValue; i++) {
          if (i % state.value === 0 || String(i).indexOf(String(state.value)) !== -1) {
            results.push(i);
          }
        }
        return {
         ...state,
         results
       }
     default:
       return state
  }
}
