import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EventForm({ editMode = false }) {
  const [form, setForm] = useState({ title: '', date: '', location: '', description: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (editMode && id) {
      axios.get(`http://localhost:3000/api/events/${id}`)
        .then(res => setForm(res.data))
        .catch(err => console.error(err));
    }
  }, [editMode, id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      await axios.put(`http://localhost:3000/api/events/${id}`, form);
    } else {
      await axios.post('http://localhost:3000/api/events', form);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' placeholder='Title' value={form.title} onChange={handleChange} /><br />
      <input name='date' placeholder='Date' value={form.date} onChange={handleChange} /><br />
      <input name='location' placeholder='Location' value={form.location} onChange={handleChange} /><br />
      <textarea name='description' placeholder='Description' value={form.description} onChange={handleChange} /><br />
      <button type='submit'>{editMode ? 'Update' : 'Create'} Event</button>
    </form>
  );
}

export default EventForm;
