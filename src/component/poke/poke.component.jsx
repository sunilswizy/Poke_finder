import React from "react";
import Overview from "../overview/overview.component";
import Poke from '../pokemon/pokemon'
import './poke.styles.css'

const game1 = []
let game2 = [...Poke]

for(let i = 0; i< game2.length; i++){
    let rand = Math.floor(Math.random() * 4)
    game1.push(game2[rand])
    game2 = [...game2.slice(0, rand), ...game2.slice(rand + 1, game2.length)]
}

const generator = id =>{
    if(String(id).length === 2) {
        return ("0"+id)
    }
    if(String(id).length === 1 ){
        return ("00"+id)
    }
    return id
}

const game1_res = game1.reduce((el, ex) => el + ex.base_experience , 0)
const game2_res = game2.reduce((el, ex) => el + ex.base_experience , 0)
const res = (game1_res > game2_res) ? true : false

const Pokee = () => {
    return (
        <div>
            <h1 className="Pokemon-header">Poke Game!</h1>
            <div className="Poke-con">
            {
                game1.map( ({id,...others },idx) => {
                    return <Overview key={idx} id={generator(id)} {...others}/>
                })
            }
            </div>
            <div className="Poke-con">
            {
                game2.map( ({id,...others },idx) => {
                    return <Overview key={idx} id={generator(id)} {...others}/>
                })
            }
            </div>
        </div>
    )
}

export default Pokee