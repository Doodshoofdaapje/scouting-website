import React from 'react';
import './GoogleCalendar.scss'

const Calendar = () => {
  return (
    <div className='calendar'>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=peterselie4231%40gmail.com&ctz=Europe%2FAmsterdam"
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default Calendar;