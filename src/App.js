import { Routes, Route} from 'react-router-dom'
import Header from "./Pages/Header";
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';

function App() {
  return (
      <div className="App">
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/search' element={<SearchPage/>}/>
          </Routes>
      </div>
  );
}

export default App;
