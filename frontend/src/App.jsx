import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import EditEvent from './pages/EditEvent';
import EventList from './components/EventList';
import EventForm from './components/EventForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/events/" element={<EventList />} />
        <Route path="/events/:id" element={<EventForm />} />
        <Route path="/edit/:id" element={<EditEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
