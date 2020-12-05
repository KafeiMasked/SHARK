import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    team_party: [],
  }
  removeTeamParty = (index) => {
    const {team_party} = this.state

    this.setState({
      team_party: team_party.filter((team_element, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (teamElement) => {
    this.setState({team_party: [...this.state.team_party, teamElement]})
  }

  render() {
    const { team_party } = this.state
    return (
      <div className="container">
        <Table teamPartyData={team_party} removeTeamParty={this.removeTeamParty} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )

  }

}

export default App
