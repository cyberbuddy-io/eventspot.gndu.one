import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const EventDetails = () => {
    const { eventId } = useParams();
    console.log(eventId);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        async function fetchEvent() {
            const db = getFirestore();
            const eventRef = doc(db, 'events', eventId);
            const eventDoc = await getDoc(eventRef);
            if (eventDoc.exists()) {
                setEvent(eventDoc.data());
            } else {
                console.log('Event not found');
            }
        }

        fetchEvent();
    }, [eventId]);

    const handleNotifyClick = () => {
        // Implement the notification logic here, e.g., send a notification to the user.
        alert('You will be notified about this event.');
    };

    if (!event) {
        return <div>Event Not Found</div>;
    }

    return (
        <div className="event-details-container">
            <img src={event.eventImage} alt={event.eventName} className="event-details-image" />
            <div className="event-details-content">
                <h2>Name: {event.eventName}</h2>
                <p>Description: {event.eventDescription}</p>
                <p>Date & Time: {event.eventDateTime}</p>
                <p>Mode: {event.mode}</p>
                <p>Venue: {event.venue}</p>
                <button onClick={handleNotifyClick} className="notify-button">
                    Notify
                </button>
            </div>
        </div>
    );
};

export default EventDetails;
