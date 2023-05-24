
import './App.css';

import React, { Component } from 'react'
import Person from './composants/Person';
export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={show:true}
    
  }
  
  render() {
    let setShow=()=>{
      this.setState({show:!this.state.show}) 
    }
    return (
      <div>  
        
{this.state.show && <Person/>}
<button onClick={setShow} >Afficher/Masquer Profile</button>

      </div>
    )
  }
}

