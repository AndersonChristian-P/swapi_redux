import React, { Component } from 'react';
import { getPeople } from "../../redux/starWarsReducer"
import { connect } from "react-redux"

class GetCharacters extends Component {
  render() {

    const people = this.props.people.map((person, i) => (
      <div key={i}>{person.name}</div>
    ))

    return (
      <div className="get_char">
        <button onClick={this.props.getPeople} className="get_char_button" >Get Star Wars Characters</button>
        <div className="characters">
          {this.props.loading ? 'Fetching people...' : people}
        </div>
      </div>
    )
  }
}

// when redux looks at state it will see state.starwars because we used combineReducers() in our store
function mapStateToProps(state) {
  return {
    people: state.starwars.people,
    loading: state.starwars.loading
  }
}

// the object is how redux finds your action creators to dispatch
export default connect(mapStateToProps, { getPeople })(GetCharacters);
