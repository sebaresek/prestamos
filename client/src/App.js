import './App.css';
import { Route } from 'react-router-dom';
import Landing from '../src/views/Landing/Landing';
import Quoter from '../src/views/Quoter/Quoter';
import About from './views/About/About';



function App() {
  return (
    <div className="App"> 
      <Route exact path='/' component={Landing} /> 
      <Route exact path='/about' component={About} />  
      <Route exact path='/quoter' component={Quoter} /> 
    </div>
  );
}
 
export default App;
