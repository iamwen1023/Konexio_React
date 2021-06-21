
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Weekly from './components/Weekly';
import WeeklyBattle from './components/WeeklyBattle';
import Popular from './components/Popular';
import PopularBattle from './components/PopularBattle';
import Favorites from './components/Favorites';
import Home from './components/Home';

function App(){
    return (
      <BrowserRouter> 
      <div>
        <nav> 
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/weekly">Weekly</Link></li>
            <li><Link to="/weekly-battle">WeeklyBattle</Link></li>
            <li><Link to="/popular">Popular</Link></li>
            <li><Link to="/popular-battle">PopularBattle</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
        </nav>

        <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/weekly-battle" component={WeeklyBattle}/>
          <Route path="/popular" component={Popular}/>
          <Route path="/popular-battle" component={PopularBattle}/>
          <Route path="/favorites" component={Favorites}/>
        </Switch>
      </div>
    </BrowserRouter>
    )
}
export default App;
