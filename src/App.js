import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Cart from './views/Cart'
import Home from './views/Home'
import Mine from './views/Mine'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div style={{height: '100%'}}>
            <Route path="/" exact render={(props) =><MainLayout {...props}><Home></Home></MainLayout>}></Route>
            <Route path="/cart" render={(props) =><MainLayout {...props}><Cart></Cart></MainLayout>}></Route>
            <Route path="/mine" render={(props) =><MainLayout {...props}><Mine></Mine></MainLayout>}></Route>
          </div>
        </Router>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div>

//     </div>
//   );  
// }


export default App;
