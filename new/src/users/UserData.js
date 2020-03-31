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
  hii(props){
    return <p>hello</p>;
  }
  hi(props){
    return <p>hello</p>;
  }
  async componentDidMount(){
    console.log(window.location.pathname.substring(6))
     setTimeout(function() { //Start the timer
      this.setState({render: true}) //After 1 second, set render to true
  }.bind(this), 1000)

    const res =await axios.get('http://localhost:4000/api/users/'+window.location.pathname.substring(6))
    this.state.data=await res.data;
  }
  render () {
      return (
        this.state.data.map((s)=>(
            <div class="row userblock">
              <div class="col-lg-4">
                <div class="row">
                    <img src={s.imageUrl} alt="image" />
                  </div>
                  <br/>
                  <div class="row">
                    <div class="col-3 col-xs-3">
                      <a href={"https://github.com/"+s.github} >
                        <img style={{width:50}} src="https://avatars1.githubusercontent.com/u/9919?s=200&v=4" alt="github"/>
                      </a>
                    </div>
                    <div class="col-3 col-xs-3">
                      <a href={"https://codechef.com/users/"+s.codechef} >
                        <img style={{width:100}} src="https://www.codechef.com/sites/all/themes/abessive/logo.svg" alt="codechef"/>
                      </a>
                    </div>
                    <div class="col-3 col-xs-3">
                      <a href={s.linkedin} >
                        <img style={{width:50}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACtklEQVR4AeyVA5AkQRREZ862bTMcZ9u2wzrbtm3bWNvmaW3b3rzKRa+NOWVEDoqvqv//LZPtUpoubC2cLIxKMveyku1UmkYAG2EoyFYESFEgQIos346dX7K7YiFyN8iFB17Sxx4NRxzVdcbYO6aotke5cgB42sFXDGDjF4FM+UbGY+5TK9FXKQBKOKTtjNz68CMAdQ+oVjyAXPicoRtyS8M5GA0PqRGwgm9gxxdMf2SBkNhEZCoxORXbVH9CXllBWHOvCla9sQNPbegRit3qDmhyWL1SYkCKA7kIxvoH1MBrr5KZllJ/IWnK3zskZ/SXEIDB1vm0trAO6K5ndNCYN5DRz9tgWxdhfnc8pQ2madXdSmDb7CeWWPfOHite22LoDWMegiDFj4GJ983hFBLD9IOPcEB0AjZ8+S6daIeaAwJFG/v8ouJh4ROB3uf1sFHpB34GRSMmMRlJKalISE5hLEHJIRCjbptAXlyAmY8tEZ2QjOzaK4qSbHs6AItTdhHwvpU3N0ZB+hYQhcGXDTi//AFSUtNPW5SY3lX3KJc7gKSwuESYeIXByDMM4XFJyC1bv0i0PKbJoCx/ALewWMwSwccApZe9skFwTAKyiXEjPYZyBziq48zUlVK09j4VvLL3Q3ZFxCdh/D0z7lG+AHFJKVj03DrHwhxHqOzimjMeWZQ/QKQ42ZQH5jkW5u896o7IJmYJa0T5A/BqJ+S6Wv7eqebwH+A/QOUBTMwHYFdpAaY9tACrVqyYECPMOr9d1UF6Gx7QcgLb2McxfCOOu2uaB2CLyk/EJ6WPo4PEmtOLqgOsZK2Pa4IDSUvPeWKFXud1pRre94Ie5jy1kvqnC+AWxzTYn2Odnud0MSdjDM0i1ObXOvDVBQjNEFciMJrhKHJwH5FmDgIPfNds4DuniO75P3r6HNY9BwATNI1Cu+uNpgAAAABJRU5ErkJggg==" alt="linkedin"/>
                      </a>
                    </div>
                    <div class="col-3 col-xs-3">
                      <a href={"https://hackerrank.com/"+s.hackerrank} >
                        <img style={{width:50}} src="https://hrcdn.net/fcore/assets/brand/h_mark_sm-966d2b45e3.svg" alt="hackerrank"/>
                      </a>
                    </div>
                  </div>
              </div>
              <div class="col-lg-8">
                  <hii/>
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