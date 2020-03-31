import React, { Component } from 'react';
const axios = require('axios').default;
export default class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_github: '',
      user_linkedin:'',
      user_codechef: '',
      user_hackerrank: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    
    this.setState({[nam]: val});
  }

    handleSubmit=(event)=> {
        event.preventDefault();
        axios.post('http://localhost:4000/api/users/'+this.state.user_github, {
            github:this.state.user_github,
            linkedin:this.state.user_linkedin,
            codechef:this.state.user_codechef,
            hackerrank:this.state.user_hackerrank,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  render() {
    return (
      <form >
        <h1>Hello</h1>
        <p>Enter your github user name:</p>
        <input type='text' name='user_github' onChange={this.myChangeHandler}/>
        <p>Enter your linkedin url:</p>
        <input type='text' name='user_linkedin' onChange={this.myChangeHandler}/>
        <p>Enter your codechef handle:</p>
        <input type='text' name='user_codechef' onChange={this.myChangeHandler}/>
        <p>Enter your hackerrank handle:</p>
        <input type='text' name='user_hackerrank' onChange={this.myChangeHandler}/>
        <br/>
        <input
          type='submit'
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}