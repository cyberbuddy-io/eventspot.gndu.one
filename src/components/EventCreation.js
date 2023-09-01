import React, { useState } from 'react';
import './EventCreation.css';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const EventCreation = () => {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventDateTime, setEventDateTime] = useState('');
    const [eventImage, setEventImage] = useState('');
    const [message, setMessage] = useState('');
    const [createdEvent, setCreatedEvent] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const db = getFirestore();
            const eventsCollection = collection(db, 'events');

            // Add event data to Firestore
            const docRef = await addDoc(eventsCollection, {
                eventName,
                eventDescription,
                eventDateTime,
                eventImage,
            });

            setCreatedEvent({
                id: docRef.id,
                eventName,
                eventDescription,
                eventDateTime,
                eventImage,
            });

            setEventName('');
            setEventDescription('');
            setEventDateTime('');
            setEventImage('');
            setMessage('Event created successfully!');
        } catch (error) {
            console.error('Event creation error:', error);
            setMessage('Event creation error. Please try again.');
        }
    };

    return (
        <div className="event-creation-container">
            <h2 className="event-creation-title">Create Event</h2>
            <form className="event-creation-form" onSubmit={handleSubmit}>
                <div className="event-creation-group">
                    <label htmlFor="eventName" className="event-creation-label">
                        Event Name
                    </label>
                    <input
                        type="text"
                        id="eventName"
                        className="event-creation-input"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                    />
                </div>
                <div className="event-creation-group">
                    <label htmlFor="eventDescription" className="event-creation-label">
                        Event Description
                    </label>
                    <textarea
                        id="eventDescription"
                        className="event-creation-textarea"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="event-creation-group">
                    <label htmlFor="eventDateTime" className="event-creation-label">
                        Date and Time
                    </label>
                    <input
                        type="datetime-local"
                        id="eventDateTime"
                        className="event-creation-input"
                        value={eventDateTime}
                        onChange={(e) => setEventDateTime(e.target.value)}
                        required
                    />
                </div>
                <div className="event-creation-group">
                    <label htmlFor="eventImage" className="event-creation-label">
                        Event Image
                    </label>
                    <input
                        type="file"
                        id="eventImage"
                        className="event-creation-input"
                        value={eventImage}
                        onChange={(e) => setEventImage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="event-creation-button">
                    Create Event
                </button>
            </form>
            {message && <p className="event-creation-message">{message}</p>}
        </div>
    );
};

export default EventCreation;
