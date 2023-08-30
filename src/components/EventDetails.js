import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';

const EventDetails = ({ events }) => {
    const { eventId } = useParams();

    // Find the selected event based on the eventId
    const selectedEvent = events.find(event => event.link === eventId);

    if (!selectedEvent) {
        return <div>Event not found</div>;
    }

    return (
        <div className="event-details-container">
        <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="event-details-image" />
        <div className="event-details-content">
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.description}</p>
            <p> Date: {selectedEvent.date}</p>
            <p> Time: {selectedEvent.time}</p>
        </div>
        </div>
    );
};

export default EventDetails;
