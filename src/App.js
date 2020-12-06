import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import Info from './Info'

class App extends Component {
  state = {
    characters: [],
  }
  sharkData = {
    name: 'a',
    eats: 'b',
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
    this.state.sharkName = character
   // this.setState({sharkData: character})//[...this.state.sharkData, character]})
  }

  render() {
  //  const { characters, sharkData, sharkName } = this.state
    const { sharkData } = this.sharkData
    /*const sharkName = sharkData.map((row, index) => {
      return (
        <tr key = {index}>
          <td>{ row.name } </td>
        </tr>
      )
    })
    const sharkColor = sharkData.map((row, index) => {
      return (
        <tr key = {index}>
          <td>{row.name} </td>
        </tr>
      )
    })
    const sharkEats = sharkData.map((row, index) => {
      return (
        <tr key = {index}>
          <td>{row.name} </td>
        </tr>
      )
    })
    const sharkFriends = sharkData.map((row, index) => {
      return (
        <tr key = {index}>
          <td>{row.name} </td>
        </tr>
      )
    })
    const a = "hello"*/
    return (
      <div className="container">
        <h1>{ sharkData.name } is your pet shark :)
        <h3>{sharkData.name} is hungry for
        Feed {sharkData.name}?
        </h3>
        
        </h1>
        <Info />
        <Form handleSubmit = {this.handleSubmit} />
      </div>
    )
  }
}

export default App
