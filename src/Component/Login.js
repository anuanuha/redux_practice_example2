import { useDispatch } from "react-redux";
import { login ,logout} from "../feature/User";
//used to modify values over state.
export const Login =()=>{
    const dispatch = useDispatch();
    return(
          <div>
           <button onClick={()=>{
                dispatch(login({name:"kavya",age:28,email:"kavya@gmail.com"}))
            }}>Login</button>
            <button onClick={()=>{
                dispatch(logout())
            }}>Logout</button>
                 
          </div>
    )
}