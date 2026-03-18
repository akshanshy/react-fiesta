import '../styles/ongoing.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function sharePage() {
  if (navigator.share) {
    navigator
      .share({
        title: document.title,
        text: 'Check out this amazing event!',
        url: window.location.href
      })
      .catch(() => {})
  } else {
    alert('Sharing not supported on this browser.')
  }
}

export default function Ongoing() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/events?category=ongoing')
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err))
  }, [])

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen()
    else document.documentElement.requestFullscreen?.()
  }

  return (
    <div className="container">
      <div className="header">
        <div className="live-indicator">
          <div className="live-dot"></div>
          <span>
            <strong>LIVE NOW</strong>
          </span>
        </div>
        <h1>
          <i className="fas fa-broadcast-tower"></i> Ongoing Events
        </h1>
        <p>Join the action happening right now!</p>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-number">{events.length}</span>
          <span className="stat-label">Live Events</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">1,247</span>
          <span className="stat-label">Active Participants</span>
        </div>
      </div>

      {/* 🔥 DYNAMIC EVENTS */}
      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event._id}>
            <div className="event-header">
              <div className="live-badge">
                <div className="live-dot"></div>
                LIVE
              </div>

              <h3 className="event-title">{event.title}</h3>

              <div className="event-time">
                <i className="fas fa-clock"></i>
                {new Date(event.date).toDateString()}
              </div>
            </div>

            <div className="event-content">
              <p className="event-description">{event.description}</p>

              <div className="action-buttons">
                <Link to="/registration" className="btn-register">
                  <i className="fas fa-user-plus"></i> Register
                </Link>

                <button className="btn-share" onClick={sharePage}>
                  <i className="fas fa-share-alt"></i> Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="floating-actions">
        <button className="floating-btn" onClick={() => location.reload()}>
          <i className="fas fa-sync-alt"></i>
        </button>
        <button className="floating-btn" onClick={() => alert('Notifications coming soon')}>
          <i className="fas fa-bell"></i>
        </button>
        <button className="floating-btn" onClick={toggleFullscreen}>
          <i className="fas fa-expand"></i>
        </button>
      </div>
    </div>
  )
}