import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import EventCard from './EventCard';
import styled from 'styled-components';

// Define your styled components
const CenteredContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const EventViewerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-left: 80px;
`;

const EventCardContainer = styled.div`
    flex: 0 0 calc(33.3333% - 60px); /* Adjust the width as needed */
    /* Other styling for individual event cards */
`;

const StyledHeading = styled.h2`
    font-size: 40px;
    font-weight: bold;
    color: #000;
    text-align: center;
    padding-top: 30px;
`;

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const eventsCollection = collection(db, 'events');
            const eventsQuery = query(eventsCollection, orderBy('createdAt', 'desc'));
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
        <CenteredContent>
            <StyledHeading>GNDU Event Listing</StyledHeading>
            <EventViewerContainer>
                {events.map((event) => (
                    <EventCardContainer key={event.id}>
                        <EventCard event={event} />
                    </EventCardContainer>
                ))}
            </EventViewerContainer>
        </CenteredContent>
    );
};

export default EventList;
