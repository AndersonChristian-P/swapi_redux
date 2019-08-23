const initialState = {

}

export default function swapiReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    default:
      return state
  }
}


/* const initialState = {
  people: []
}

const SET_CHARACTERS = "SET_CHARACTERS"

export function getCharacters(people) {
  return {
    type: SET_CHARACTERS,
    payload: people
  }
}


export default function swapiReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_CHARACTERS:
      return { ...state, people: payload }
    default:
      return state
  }
} */