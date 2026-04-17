import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentsList from './pages/StudentsList';
import AddStudent from './pages/AddStudent';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<AddStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;