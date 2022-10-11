import './App.css';
import React from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div className="App"> 
    <Router>  
      <Link to="/createpost">Create A Post</Link>
      <Link to="/">Home Page</Link>
      <Switch>
        <Route path="/"  exact component={Home} />
        <Route path="/createpost" exact component={CreatePost}/>
      </Switch>  
    </Router>
    </div>
  );
}
export default App;
