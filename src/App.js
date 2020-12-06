import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import Info from './Info'
import Result from './Result'
import Card from './Card'
import Mako from "./mako.png";

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

  clicked = (typeName) => {
    console.log("PIXEL IS CUTE!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log(typeName)
    this.setState({type: typeName})
  }

  render() {
    let sorce;
    let w;
    let h;
    if (this.state.type == "Mako Shark") {
      sorce = "https://i.postimg.cc/gjCnMnt7/mako.png"
    } else if (this.state.type == "Hammerhead Shark") {
      sorce = "https://i.postimg.cc/50kHCPBb/hammerhead.png"
    } else if (this.state.type == "Sawshark") {
      sorce = "https://i.postimg.cc/0jMzdpnm/saw.png"
    } else if (this.state.type == "Dwarf Lanternshark") {
      sorce = "https://i.postimg.cc/tTgZ70VB/dwarf.png"
    } else if (this.state.type == "Blahaj Shark") {
      sorce = "https://i.postimg.cc/g0b2LxnS/blahaj.png"
    }
    return (
      <div className="container">
        <Info />
        <h2 id="parHeading" style={{marginTop:100}}>Create Your Own Shark!!!!!</h2>
        <Form handleSubmit = {this.handleSubmit} />
        <h2 id="parHeading" style={{marginTop:100}} >Your shark's name is {this.state.name}</h2>
        <Card clicked = {this.clicked}/>
        <img src={sorce} />
        <img />
      </div>

    )

  }
}

export default App
