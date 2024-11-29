import './App.css';
import {Profile} from "./Component/Profile";
import { Login } from './Component/Login';
import { ChangeColor } from './Component/ChangeColor';

function App() {
  return (
    <div className="App">
   <h1>this is redux project</h1>
   <Profile/>
   <Login/>
   <ChangeColor/>
    </div>
  );
}

export default App;

// commands to install redux libray
//npx create-react-app my-project
//npm install redux react-redux @reduxjs/toolkit

