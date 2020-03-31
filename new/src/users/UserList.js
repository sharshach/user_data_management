import React, { Component } from 'react';
import "./user.css";
const axios = require('axios').default;

export default class UserList extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      response:' hi',
      data: []
    };

  }
  async componentDidMount(){
     setTimeout(function() { //Start the timer
      this.setState({render: true}) //After 1 second, set render to true
  }.bind(this), 1000)
    const res =await axios.get('http://localhost:4000/api/users')
    this.state.data=await res.data;
  }
  render () {
    
      return (
        this.state.data.map((s)=>(
          <div class=" userlist">
            <a href={"users/"+s.github} class="userlistitem">{s.github}</a>
            <p> </p>
          </div>
        ))
      )
   }
}