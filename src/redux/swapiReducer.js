const initialState = {
  people: []
}

const SET_CHARACTERS = "SET_CHARACTERS"

export function getCharacters() {
  return {
    type: SET_CHARACTERS
  }
}


export default function swapiReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_CHARACTERS:
      return { ...state, payload }
    default:
      return state
  }
}