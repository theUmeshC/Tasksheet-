import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Addtask from "./components/Addtask";
import Tasklist from "./components/Tasklist";
import Edit from "./components/Edit";


function App() {
   return (
      <Router>
         <div className="App">
            <Switch>
               <Route exact path='/'>
                  <Login />
                </Route>
                <Route path='/signup'>
                  <SignUp />
                </Route>
                <Route path='/addtask'>
                  <Addtask/>
                </Route>
                <Route path='/tasklist'>
                  <Tasklist/>
                </Route>
                <Route path='/edittask:id'>
                  <Edit/>
                </Route>

            </Switch>
         </div>
      </Router>
   );
}

export default App;
