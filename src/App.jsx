import {BrowserRouter as Router , Routes , Route, Form} from 'react-router-dom';
import Login from './Components/Login';
import Browse from './Components/Browse';


function App() {

  return (  
    <Router>
      <Routes>
        <Route path = '/' element = {<Login/>}/>
        <Route path = '/Browse' element = {<Browse/>}/>
      </Routes>
    </Router>
  )
}

export default App
