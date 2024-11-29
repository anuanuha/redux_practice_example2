import { useSelector } from "react-redux";
//useselector hook is used to access values from state.
export const Profile=()=>{
    const user = useSelector((state)=>state.user.value);
    const themeColor = useSelector((state)=>state.theme.value);
    return(
              <div style={{color:themeColor}}>
                   <h1>Name:{user.name}</h1>
                    <h1>age:{user.age}</h1>
                     <h1>Email:{user.email}</h1>
                    
              </div>
    )
}