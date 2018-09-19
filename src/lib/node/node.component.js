import React from "react";
import "./node.css";
import { Row, Col, Grid, Button}  from 'react-bootstrap';

export class Node extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isselected:false
    }
  }


  render(){
    let circle_class = " circle center-block";
    circle_class += this.props.completed?" green":"";
    circle_class += this.state.isselected?" selected":"";

    return(
    <div class="node">
    <Row>
      <Col md={6}>
      <Row>
        <Col md={6}><div className={this.props.completed?'line-left-top completed':'line-left-top'}></div></Col>
        <Col md={6}><div className={this.props.completed?'line-right-top completed':'line-right-top'}></div></Col>
      </Row>
        <span onClick={()=>this.setState({isselected:true})} className={circle_class}>{this.props.val}</span>
      <Row>
        <Col md={6}><div className={this.props.completed?'line-left-bottom completed':'line-left-bottom'}></div></Col>
        <Col md={6}><div className={this.props.completed?'line-right-bottom completed':'line-right-bottom'}></div></Col>
    </Row>
    </Col>
    <Col md={6}>
    </Col>
    </Row>
    </div>);
  }
}
