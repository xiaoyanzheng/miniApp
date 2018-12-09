import { keyMap } from '../constants/games';
const {
  INPUT,
  INPUTEND,
  COMPUTE 
} = keyMap;

export function input(value) {
    return {
        type: INPUT,
        payload: value
    }
}

export function inputEnd(value) {
    return {
        type: INPUTEND,
        payload: value
    }
}

export function compute() {
    console.info(COMPUTE)
    return {
        type: COMPUTE
    }
}