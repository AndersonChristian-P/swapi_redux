import axios from "axios"
import * as constants from "../constants"

export const getPeople = () => {
  return axios.get(`${constants.API_URL}people`)
    .then(res => res.data.results)
}


