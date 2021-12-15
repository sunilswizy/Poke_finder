import React from "react";
import './overview.styles.css'

const Overview = ({name,type, base_experience,id}) => {
return(
   <div className="Overview-con">
    <div className="Overview-container">
         <h1 className="Overview-head">{name}</h1>
      <div className="Overview-img">
         <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt={name} />
      </div>
         <div className="Overview-span">
            <span>{type}</span><br/>
            <span>{base_experience}</span>
         </div>  
    </div>
   </div>
)}

// Overview.defaultProps = {
//    type: Poke.map(el => el.type[rand]),
//    base_experience: Math.floor(Math.random() * 100)
// }

export default Overview