import React,{Component} from 'react'
import {BrowserRouter , Route} from 'react-router-dom';
import LoginHandeler from './Components/FrontEnd/LoginHandeler';
import Portal from './Components/Portal/Portal'
import './App.css';

class App extends Component{
  render(){

    return(
      <BrowserRouter>
      <div>
           <Route path = "/" exact component = {LoginHandeler}/>
           <Route path = "/portal" exact component = {Portal}/>
      </div>
         </BrowserRouter>
    )
  }
}

export default App;
