import React from 'react';
import EventCard from './EventCard';
import { events } from './eventsData';

const EventViewer = () => {
    return (
        <div className="container mt-5">
        <h2>GNDU EVENTS LISTING</h2>
        <div className="d-flex flex-wrap">
            {events.map((event, index) => (
            <EventCard key={index} event={event} events={events} />
            ))}
        </div>
        </div>
    );
};

export default EventViewer;
