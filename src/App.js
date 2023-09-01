import React from 'react';
import './App.css';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import EventViewer from './components/EventViewer';
import EventDetails from './components/EventDetails';
import { events } from './components/eventsData';
import EventCreation from './components/EventCreation';
import EventList from './components/EventList';
import { auth } from './firebase-config';

function App() {
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Events Viewer
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create-event">
                  Create Event
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<EventViewer />} />
          {/* <Route path="/" element={<EventList />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/event/:eventId" element={<EventDetails events={events} />} />
          <Route path="/create-event" element={<EventCreation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
