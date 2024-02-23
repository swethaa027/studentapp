
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Addstudent from './components/Addstudent';
import ViewStudent from './components/Viewstudenet';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      {/* <Route path='/Login'element={<Login/>}/> */}
       <Route path='/Addstudent'element={<Addstudent/>}/>
       <Route path='ViewStudent'element={<ViewStudent/>}/>
      </Routes>
    </div>
  );
}

export default App;
