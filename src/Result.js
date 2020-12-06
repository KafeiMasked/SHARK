import React, {Component} from 'react'

class Result extends Component {
    render() {
        return (
            <h2 id="parHeading" style={{marginTop:100}}>Your shark's name is {this.props.characterData.name}</h2>
        )
    };
    /*const workPlease = (props) => {
        const lst = Object.entries(this.state.name)
        return (
            <div>
                {lst.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </div>
        )
    }*/
}
/*
const Result = (props) => {
    const {characterData} = this.props

    return (
        <h2 id="parHeading" style={{marginTop:100}}>Your shark's name is {characterData.name}</h2>
    )
}*/

export default Result