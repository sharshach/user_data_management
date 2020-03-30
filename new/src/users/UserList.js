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
    const res =await axios.get('http://localhost:4000/users')
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
                  <pre class="singleitem"> NAME        :{s.name}</pre>
                  <pre class="singleitem"> LOCATION    :{s.location}</pre>
                  <pre class="singleitem"> COMPANY     :{s.company}</pre>
                  <pre class="singleitem"> FOLLOWERS   :{s.followers}</pre>
                  <pre class="singleitem"> FOLLOWING   :{s.following}</pre>
                  <pre class="singleitem"> PUBLIC REPOS:{s.publicRepo}</pre>
              </div>
          </div>
        ))
      )
   }
}