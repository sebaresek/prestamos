import './App.css';
import { Route } from 'react-router-dom';
import Quoter from '../src/views/Quoter/Quoter';
import About from './views/About/About';
import Home from './views/Home/Home';
import Dashboard from './views/Dashboard/Dashboard'


function App() {
  return (
    <div className="App"> 
      <Route exact path='/about' component={About} />  
      <Route exact path='/quoter' component={Quoter} /> 
      <Route exact path='/dash' component={Dashboard} /> 
      <Route exact path='/' component={Home} /> 
    </div>
  );
}
 
export default App;
