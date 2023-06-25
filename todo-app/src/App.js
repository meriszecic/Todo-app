import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import './App.css';
import Studiranje from './components/Studiranje';
import Rekreativno from './components/Rekreativno';
import Plans from './components/Plans'
import DetailsOfStuding from './components/DetailsOfStuding';

function App() {
  return (
    <>
    <Router>
      <ul>
        <li><Link to='studiranje'>Studiranje</Link></li>
      </ul>
      <ul>
        <li><Link to='rekreacija'>Rekreacija</Link></li>
      </ul>
      <ul>
        <li><Link to='plans'>Todos</Link></li>
      </ul>
    <Routes>
      <Route path='studiranje' element={<Studiranje></Studiranje>}></Route>
      <Route path='rekreacija' element={<Rekreativno></Rekreativno>}></Route>
      <Route path='/studies/:id' element={<DetailsOfStuding></DetailsOfStuding>}></Route>
      <Route path='plans' element={<Plans></Plans>}></Route>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;