import React, {Component} from 'react'

class Form extends Component {
    initialState = {
        name: '',
        color: '',
        eats: '',
        friends: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, talent } = this.state;

        return (
            <form>
                <label htmlFor = "name">Name</label>
                <input 
                    type = "text"
                    name = "name"
                    id = "name"
                    value = {name}
                    onChange = {this.handleChange} />
                <label htmlFor = "color">Color</label>
                <input
                    type = "text"
                    name = "color"
                    id = "color"
                    value = {talent}
                    onChange = {this.handleChange} />
                <label htmlFor = "eats">Eats</label>
                <input
                    type = "text"
                    name = "eats"
                    id = "eats"
                    value = {talent}
                    onChange = {this.handleChange} />
                    <label htmlFor = "friends">Friends</label>
                <input
                    type = "text"
                    name = "friends"
                    id = "friends"
                    value = {talent}
                    onChange = {this.handleChange} />

                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
            
        );
    }
}

export default Form;