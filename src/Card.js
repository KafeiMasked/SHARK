import React, {Component} from 'react';

class Card extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
      //  this.closeMenu = this.closeMenu.bind(this);
        this.clicked = this.clicked.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true })
    } 
/** 
    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    } */

    clicked = (name) => {
        this.props.clicked(name)
        //this.setState()
    }

    render() {
        console.log("here")
        console.log(this.clicked)
        const name0 = "Mako Shark"
        const name1 = "Blahaj Shark"
        const name2 = "Dwarf Lanternshark"
        const name3 = "Hammerhead Shark"
        const name4 = "Sawshark"
        return (
            <div>
                <button onClick={this.showMenu}>Pick a Shark</button>
                {
                    this.state.showMenu ? (
                        <div className="menu">
                            <button type="button" value="submit" onClick={() => this.clicked(name0)}> {name0} </button>
                            <button onClick={() => this.clicked(name1)}> {name1} </button>
                            <button onClick={() => this.clicked(name2)}> {name2} </button>
                            <button  onClick={() => this.clicked(name3)}> {name3} </button>
                            <button onClick={() => this.clicked(name4)}> {name4} </button>
                        </div>
                    )
                    : (
                        null
                    )
                }
                
            </div>
        );
    }

}

export default Card;