import '../src/css/App.css'
import '../src/css/Utilities.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/'component={Home} exact /> 
          <Route path='/post/:id' component={Post} /> 
          <Route path='/posts/:category' component={Posts} /> 
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
