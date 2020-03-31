import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './users/AddUser.js';
import UserData from './users/UserData.js';
import UserList from './users/UserList.js'
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
        <div>
          <Route exact={true} path='/users/add' render={() => (
            <div className="App">
              <AddUser />
            </div>
          )}/>

          <Route exact={true} path='/users' render={() => (
            <div className="App">
              <UserList />
            </div>
          )}/>

          <Route exact={true} path='/users/:user' render={() => (
            <div className="App">
              <UserData />
            </div>
          )}/>


          <Route exact={true} path='/' render={() => (
            <div className="App">
              <div className="App">
      <header className="App-header">
      <h1>USER DATABASE MANAGEMENT SYSTEM</h1>
      <h2>WELCOME</h2>
        <a
          className="App-link"
          href="/users"
          rel="noopener noreferrer"
        >
          list all user
        </a>
        <a
          className="App-link"
          href="/users/add"
          rel="noopener noreferrer"
        >
          add new user
        </a>
      </header>
    </div>
            </div>
          )}/>
        </div>
    
      </BrowserRouter>
  );
}

export default App;
