import { Route, Routes } from 'react-router';
import './App.scss';
import HomePage from './pages/HomePage';
import LosePage from './pages/LosePage';
import NotFoundPage from './pages/NotFoundPage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:category' element={<QuizPage />} />
        <Route path='/:category/lose' element={<LosePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
