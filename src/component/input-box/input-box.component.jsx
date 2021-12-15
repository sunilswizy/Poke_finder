import React from "react";
import './input.box.styles.css'

const InputBox = ({...props}) => (
    <div className="input-con">
        <input
          type="text"
          name="poke"
          className="input-text" 
          placeholder="find..." 
          {...props} 
          />
    </div>
)

export default InputBox