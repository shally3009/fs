import EventForm from '../components/EventForm';

function EditEvent() {
  return (
    <div>
      <h1>Edit Event</h1>
      <EventForm editMode={true} />
    </div>
  );
}

export default EditEvent;