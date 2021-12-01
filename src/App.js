import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomeView from './Views/HomeView';
import Register from './Views/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomeView />} />
      </Routes>
    </div>
  );
}

export default App;
