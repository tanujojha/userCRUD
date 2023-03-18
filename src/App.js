import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import CreatePage from './pages/createPage/createPage';
import EditPage from './pages/editPage/editPage';
import MainPage from './pages/mainPage/mainPage';
import ProfilePage from './pages/profilePage/profilePage';




function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/edit' element={<EditPage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
