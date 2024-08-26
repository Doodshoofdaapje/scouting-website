import React from 'react';
import './GoogleCalendar.scss'

const Calendar = () => {
  return (
    <div className='calendar'>
      <iframe
        src="https://calendar.google.com/calendar/u/2/embed?height=700&wkst=2&bgcolor=%23ffffff&ctz=Europe/Amsterdam&src=c2NvdXRpbmdhc2dicmVkYUBnbWFpbC5jb20&src=bmwuZHV0Y2gjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%239DE05C&color=%230B8043&title=scouting+ASG+Breda&showTz=0&showTabs=1&showDate=1"
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