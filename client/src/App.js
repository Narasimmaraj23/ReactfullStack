import './App.css';
import React from 'react';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <div className="App"> 
    <Router> 
      <div className="navbar"> 
      <Link to="/">Home Page</Link>
      <Link to="/createpost">Create A Post</Link>
     </div>
      <Switch>
        <Route path="/"  exact component={Home} />
        <Route path="/createpost" exact component={CreatePost}/>
        <Route path="/post/:id" exact component={Post}/>

      </Switch>  
    </Router>
    </div>
  );
}
export default App;