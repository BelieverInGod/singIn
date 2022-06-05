
import './App.css';
import SignIn from '../signIn/SignIn'
import '../signIn/SignIn.css'
import HomePage from '../home/Home'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/login'>
            <SignIn/>
          </Route>
          <Route path='/'>
            <HomePage/>
          </Route>
        </Switch>
        

        {/* <header className="App-header">
        </header> */}
      </div>
    </Router>
  );
}

export default App;
