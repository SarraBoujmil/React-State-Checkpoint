
import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

export default class Person extends Component {
 
constructor(props){
    super(props);
    this.state={timer:0,fullName:"Sarra",bio:"this is a bio",imgSrc:"https://images.pexels.com/photos/4946515/pexels-photo-4946515.jpeg?auto=compress&cs=tinysrgb&w=600",profession:"job"}
}

componentDidMount(){
  setInterval(()=>{this.setState({timer:this.state.timer + 1})},1000) //fonction prédéfinie

}



componentDidUpdate()
{console.log("modification effecctuée?")}
componentWillUnmount(){
  console.log("composant va se fermer")
}
    render() {
        let updateName=()=>{
        this.setState({fullName:"Another new name",bio:"hahaaa, this is a new bio!"})
        }
        
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.state.imgSrc} height="350px"/>
        <Card.Body>
          <Card.Title>{this.state.fullName}</Card.Title>
          <Card.Text>
            {this.state.bio}
          </Card.Text>
          <Button on variant="primary" onClick={updateName}>Change Name and bio</Button>
          <h1>{this.state.timer}</h1>
        </Card.Body>
      </Card>


    )
  }

}
