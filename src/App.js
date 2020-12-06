import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import Info from './Info'
import Result from './Result'

class App extends Component {
  state = {
    name: '',
    type: '',
  }
  
  removeCharacter = (index) => {
    const {characters, sharkData} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({name: character.name})
  }

  render() {
    return (
      <div className="container">
        <Info />
        <h2 id="parHeading" style={{marginTop:100}}>Create Your Own Shark!!!!!</h2>
        <Form handleSubmit = {this.handleSubmit} />
        <h2 id="parHeading" style={{marginTop:100}} >Your shark's name is {this.state.name}</h2>
      </div>
    )

  }
}

export default App
