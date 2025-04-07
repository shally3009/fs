import EventList from '../components/EventList';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>All Events</h1>
      <Link to='/create'>Create New Event</Link>
      <EventList />
    </div>
  );
}

export default Home;
