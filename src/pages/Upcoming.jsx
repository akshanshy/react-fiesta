import { useMemo, useState } from 'react'
import '../styles/upcoming.css'

export default function Upcoming() {
  const events = useMemo(
    () => [
      {
        id: 'ai-workshop',
        dateBadge: 'Sep 25',
        title: 'AI & Machine Learning Workshop',
        datetime: 'September 25, 2025 • 10:00 AM - 5:00 PM',
        location: 'Tech Lab A, Innovation Center',
        description: 'Learn AI fundamentals through hands-on workshops and real-world projects.',
        category: 'workshop'
      },
      {
        id: 'startup-pitch',
        dateBadge: 'Oct 5',
        title: 'Startup Pitch Competition',
        datetime: 'October 5, 2025 • 2:00 PM - 6:00 PM',
        location: 'Innovation Hub, Main Campus',
        description: 'Pitch your startup ideas to industry experts and win exciting prizes.',
        category: 'technical'
      },
      {
        id: 'basketball-championship',
        dateBadge: 'Nov 10',
        title: 'Basketball Championship',
        datetime: 'November 10-15, 2025 • 9:00 AM - 5:00 PM',
        location: 'Basketball Court, Sports Complex',
        description: 'Inter-college basketball tournament with teams competing for the championship.',
        category: 'sports'
      },
      {
        id: 'tech-summit',
        dateBadge: 'Dec 2',
        title: 'Winter Tech Summit',
        datetime: 'December 2-3, 2025 • 9:00 AM - 6:00 PM',
        location: 'Main Auditorium & Conference Halls',
        description: 'Two-day tech summit featuring industry leaders and innovative workshops.',
        category: 'technical'
      }
    ],
    []
  )

  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? events : events.filter((e) => e.category === filter)

  return (
    <div className="container">
      <div className="header">
        <div className="coming-soon-indicator">
          <i className="fas fa-clock timer-icon"></i>
          <span>
            <strong>COMING SOON</strong>
          </span>
        </div>
        <h1>
          <i className="fas fa-calendar-plus"></i> Upcoming Events
        </h1>
        <p>Register now and secure your spot!</p>
      </div>

      <div className="filter-section">
        {[
          { id: 'all', label: 'All Events' },
          { id: 'technical', label: 'Technical' },
          { id: 'cultural', label: 'Cultural' },
          { id: 'sports', label: 'Sports' },
          { id: 'workshop', label: 'Workshops' }
        ].map((b) => (
          <button
            key={b.id}
            className={`filter-btn ${filter === b.id ? 'active' : ''}`}
            data-filter={b.id}
            onClick={() => setFilter(b.id)}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="events-grid">
        {filtered.map((e) => (
          <div key={e.id} className="event-card">
            <div className="event-header">
              <div className="event-date-badge">{e.dateBadge}</div>
              <h3 className="event-title">{e.title}</h3>
              <div className="event-datetime">
                <i className="fas fa-calendar"></i>
                {e.datetime}
              </div>
              <div className="event-location">
                <i className="fas fa-map-marker-alt"></i>
                {e.location}
              </div>
            </div>
            <div className="event-content">
              <div className="countdown-timer">
                <div className="countdown-label">
                  <i className="fas fa-hourglass-half"></i> Event starts in:
                </div>
                <div className="countdown-display">
                  <div className="time-unit">
                    <span className="time-number">--</span>
                    <span className="time-label">Days</span>
                  </div>
                  <div className="time-unit">
                    <span className="time-number">--</span>
                    <span className="time-label">Hours</span>
                  </div>
                  <div className="time-unit">
                    <span className="time-number">--</span>
                    <span className="time-label">Minutes</span>
                  </div>
                  <div className="time-unit">
                    <span className="time-number">--</span>
                    <span className="time-label">Seconds</span>
                  </div>
                </div>
              </div>

              <p className="event-description">{e.description}</p>

              <div className="action-buttons">
                <button className="btn btn-register" onClick={() => alert('Registration modal coming soon')}>
                  <i className="fas fa-user-plus"></i> Register Now
                </button>
                <button
                  className="btn btn-secondary notification-btn"
                  data-event={e.id}
                  onClick={() => alert('You will be notified')}
                >
                  <i className="fas fa-bell"></i> Notify Me
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

