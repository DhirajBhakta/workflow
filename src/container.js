import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Grid}  from 'react-bootstrap';


import {Node} from './lib/node/node.component';
import {NavBar} from './lib/navbar/navbar.component';



export class Container extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      completed :[false, false, false, false, false, false]
    }
  }

  componentDidMount(){
  for(let i=0;i<6;i++){
    let that = this;
    setTimeout(function(){
      let arr = that.state.completed;
      arr[i] = true;
      that.setState({completed: arr});
    },500*i)
  }
  }

  render(){
    return <div>
    <NavBar></NavBar>
    <Col md={6}>
    <Node val={0} completed={this.state.completed[0]}></Node>
    <Node val={1} completed={this.state.completed[1]}></Node>
    <Node val={2} completed={this.state.completed[2]}></Node>
    <Node val={3} completed={this.state.completed[3]}></Node>
    <Node val={4} completed={this.state.completed[4]}></Node>
    <Node val={5} completed={this.state.completed[5]}></Node>
    </Col>
    </div>
  }


}
