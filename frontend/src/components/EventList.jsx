import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/events/${id}`);
    setEvents(events.filter(e => e._id !== id));
  };

  return (
    <ul>
      {events.map(e => (
        <li key={e._id}>
          <strong>{e.title}</strong> - {e.date} at {e.location}
          <Link to={`/edit/${e._id}`}> edit </Link>
          <button onClick={() => handleDelete(e._id)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
