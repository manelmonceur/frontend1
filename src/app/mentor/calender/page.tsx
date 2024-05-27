'use client';
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
const Calender = () => {
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2024-05-20' },
    { title: 'Event 2', date: '2024-05-21' },
  ]);

  const handleDateClick = (arg: any) => {
    const title = prompt('Enter event title:');
    if (title) {
      setEvents([...events, { title, date: arg.dateStr }]);
    }
  };

  return (
    <div className="p-16">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        height={900}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default Calender;
