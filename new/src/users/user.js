import React, { Component } from 'react';
import './../App.css';
import SignUp from './add.js';
import {BrowserRouter, Route} from 'react-router-dom';

function user() {
  return (
    <BrowserRouter>
        <div>
          <Route exact={true} path='/user/signup' render={() => (
            <div className="App">
              <SignUp />
            </div>
          )}/>
        </div>
      </BrowserRouter>
  );
}

export default user;
