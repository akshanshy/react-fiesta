import '../styles/upcoming.css'

export default function Upcoming() {
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
        <button className="filter-btn active" data-filter="all">
          All Events
        </button>
        <button className="filter-btn" data-filter="technical">
          Technical
        </button>
        <button className="filter-btn" data-filter="cultural">
          Cultural
        </button>
        <button className="filter-btn" data-filter="sports">
          Sports
        </button>
        <button className="filter-btn" data-filter="workshop">
          Workshops
        </button>
      </div>

      <div className="events-grid">
        <div className="event-card">
          <div className="event-header">
            <div className="event-date-badge">Sep 25</div>
            <h3 className="event-title">AI &amp; Machine Learning Workshop</h3>
            <div className="event-datetime">
              <i className="fas fa-calendar"></i>
              September 25, 2025 • 10:00 AM - 5:00 PM
            </div>
            <div className="event-location">
              <i className="fas fa-map-marker-alt"></i>
              Tech Lab A, Innovation Center
            </div>
          </div>
          <div className="event-content">
            <div className="countdown-timer">
              <div className="countdown-label">
                <i className="fas fa-hourglass-half"></i> Event starts in:
              </div>
              <div className="countdown-display">
                <div className="time-unit">
                  <span className="time-number">8</span>
                  <span className="time-label">Days</span>
                </div>
                <div className="time-unit">
                  <span className="time-number">14</span>
                  <span className="time-label">Hours</span>
                </div>
                <div className="time-unit">
                  <span className="time-number">25</span>
                  <span className="time-label">Minutes</span>
                </div>
                <div className="time-unit">
                  <span className="time-number">30</span>
                  <span className="time-label">Seconds</span>
                </div>
              </div>
            </div>

            <p className="event-description">
              Learn AI fundamentals through hands-on workshops and real-world projects.
            </p>

            <div className="action-buttons">
              <button className="btn btn-register" onClick={() => alert('Registration coming soon')}>
                <i className="fas fa-user-plus"></i> Register Now
              </button>

              <button className="btn btn-secondary notification-btn" data-event="ai-workshop">
                <i className="fas fa-bell"></i> Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

