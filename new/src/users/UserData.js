import React, { Component } from 'react';
import "./user.css";
const axios = require('axios').default;

export default class UserData extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      response:' hi',
      data: []
    };

  }
  async componentDidMount(){
    console.log(window.location.pathname.substring(6))
     setTimeout(function() { //Start the timer
      this.setState({render: true}) //After 1 second, set render to true
  }.bind(this), 1000)

    const res =await axios.get('http://localhost:4000/users/'+window.location.pathname.substring(6))
    this.state.data=await res.data;
  }
  render () {
      return (
        this.state.data.map((s)=>(
            <div class="row userblock">
              <div class="col-lg-4">
                <img src={s.imageUrl} alt="image" />
              </div>
              <div class="col-lg-4">
                  <p>{s.github}</p>
                  <p>{s.linkedin}</p>
                  <p>{s.codechef}</p>
                  <p>{s.hackerrank}</p>
              </div>
              <div class="col-lg-4">
                  <p>{s.name}</p>
                  <p>{s.location}</p>
                  <p>{s.company}</p>
                  <p>{s.followers}</p>
                  <p>{s.following}</p>
                  <p>{s.publicRepo}</p>
              </div>
          </div>
        ))
      )
   }
}