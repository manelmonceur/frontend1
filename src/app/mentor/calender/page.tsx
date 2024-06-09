'use client';
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { getMeetings } from '@/services/apiService';

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

  const _getMeetings = async () => {
    const meetings = await getMeetings();
    const data = window.localStorage.getItem('user');
    if (!data) return;
    const user = JSON.parse(data);
    if (user?.user?.role != 3) return;

    const final = meetings
      .filter((m: any) => m.mentor_email == user?.user?.email)
      .map((m: any) => ({
        title: m.name,
        date: m.date.split(' ')[0],
      }));
    setEvents(final);
  };

  useEffect(() => {
    _getMeetings();
  }, []);

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
