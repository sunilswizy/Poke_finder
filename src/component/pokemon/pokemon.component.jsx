import React from "react";
import Overview from "../overview/overview.component";
import InputBox from "../input-box/input-box.component";

import './pokemon.styles.css'

class Pokemon extends React.Component {

    constructor() {
        super()
        this.state = {
            poke: '',
            pokemon:[]
        }
    }

    componentDidMount() {
        const fetching = async () =>{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=300&offset=200')
            const data = await response.json();
            this.setState({pokemon: data.results})
        }

        fetching();
    }

    generator = id =>{
        if(String(id).length === 2) {
            return ("0"+id)
        }
        if(String(id).length === 1 ){
            return ("00"+id)
        }
        return id
    }

    handleChange = e => {
        const {value} = e.target
        this.setState({poke: value})
    }

    render() {
        const { poke, pokemon } = this.state

        const filterPoke = pokemon.filter(el => el.name.toLowerCase()
        .includes(poke.toLocaleLowerCase()))

        return <div>
        <div className="Pokemon-header">
            <h1 className="Pokemon-head">Pokemon</h1>
            <InputBox value={poke} onChange={this.handleChange} />
        </div>
            <div className="Pokemon-con">
            {
                filterPoke.map( ({id,...OtherProps}, idx) => 
                 <Overview 
                 key={idx} 
                 id={this.generator(idx + 1)}
                 {...OtherProps} 
              />)
            }
            </div>
        </div>
    }
}

export default Pokemon