import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event, events }) => {
    return (
        <div className="card m-4" style={{ width: '270px', borderRadius: '15px', overflow: 'hidden', border: '1px solid #000'}}>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img
            src={event.imageUrl}
            alt={event.title}
            style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
            />
            <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">{event.description}</p>
            <p className="card-text">{event.date}</p>
            <p className="card-text">{event.time}</p>
            <Link to={`/event/${event.link}`} className="btn btn-primary">
                Learn More
            </Link>
            </div>
        </div>
        </div>
    );
};

export default EventCard;
