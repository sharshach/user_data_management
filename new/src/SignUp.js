import React, { Component } from 'react';
export default class SignUp extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div>
             <div id='signinContainer'>
                  <form id='form'>       
                      <input className='input' type="text"   
                       placeholder="user_git"/>
                      <input className='input' type="text"  
                       placeholder="user_codechef"/>          
                      <input className='input' type="text"  
                       placeholder="user_hackerrank"/>
                      <input className='input' type="mail"  
                       placeholder="email"/>
                      <input className='input' type="password" 
                       placeholder="Password"/>
                       <input className='input' type="password" 
                       placeholder="Password_conf"/>
                      <button id='submit'>Sign Up</button>
                  </form>
             </div>
        </div>
      )
   }
}