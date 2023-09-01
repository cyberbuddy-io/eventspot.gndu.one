import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import EventCard from './EventCard';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const db = getFirestore();
        const eventsCollection = collection(db, 'events');
        const querySnapshot = await getDocs(eventsCollection);

        const eventData = [];
        querySnapshot.forEach((doc) => {
            eventData.push({ id: doc.id, ...doc.data() });
        });

        setEvents(eventData);
        };

        fetchData();
    }, []);

    return (
        <div className="event-list">
        {events.map((event) => (
            <EventCard key={event.id} event={event} />
        ))}
        </div>
    );
};

export default EventList;
