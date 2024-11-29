
import { useState } from "react";
import { useDispatch } from "react-redux";
import {changeColor} from "../feature/theme"

export const ChangeColor =()=>{
    const[color, setColor] = useState("");
    const dispatch = useDispatch();
    return(
    <div>
        <input onChange={(event)=>{
            setColor(event.target.value);
        }}></input>
        <button onClick={()=>{
            dispatch(changeColor(color))
        }}>changeColor</button>
    </div>
    )
    
}