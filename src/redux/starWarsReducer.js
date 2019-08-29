import * as starwars from "../services/starwars"

const initialState = {
  people: [],
  loading: false
}

const GET_PEOPLE = 'GET_PEOPLE'

export function getPeople() {
  return {
    type: GET_PEOPLE,
    payload: starwars.getPeople()
  }
}

export default function starWarsReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {

    case `${GET_PEOPLE}_PENDING`:
      return { ...state, loading: true }

    case `${GET_PEOPLE}_FULFILLED`:
      return { ...state, loading: false, people: payload }

    default:
      return state
  }
}