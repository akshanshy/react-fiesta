import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ongoing.css'

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
  const initialStats = useMemo(
    () => [
      { label: 'Performances', value: 15 },
      { label: 'Modules Left', value: 3 },
      { label: 'Artworks Displayed', value: 45 },
      { label: 'Teams Left', value: 8 }
    ],
    []
  )

  const [liveStats, setLiveStats] = useState(initialStats)

  useEffect(() => {
    const id = setInterval(() => {
      setLiveStats((prev) =>
        prev.map((s) => ({
          ...s,
          value: Math.max(0, s.value + (Math.floor(Math.random() * 10) - 5))
        }))
      )
    }, 10_000)
    return () => clearInterval(id)
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
          <span className="stat-number">5</span>
          <span className="stat-label">Live Events</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">1,247</span>
          <span className="stat-label">Active Participants</span>
        </div>
      </div>

      <div className="events-grid">
        <div className="event-card">
          <div className="event-header">
            <div className="live-badge">
              <div className="live-dot"></div>
              LIVE
            </div>
            <h3 className="event-title">Annual Cultural Fest 2025</h3>
            <div className="event-time">
              <i className="fas fa-clock"></i>
              Started 2 hours ago • Ends in 6 hours
            </div>
          </div>
          <div className="event-content">
            <div className="live-stats">
              <div className="stat-box">
                <div className="number">{liveStats[0].value}</div>
                <div className="label">{liveStats[0].label}</div>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '35%' }}></div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', marginBottom: 15 }}>
              Event Progress: 35% Complete
            </p>
            <p className="event-description">
              Experience three days of incredible performances featuring music, dance, and drama from talented students across the region.
            </p>
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

        <div className="event-card">
          <div className="event-header">
            <div className="live-badge">
              <div className="live-dot"></div>
              LIVE
            </div>
            <h3 className="event-title">AI Workshop Series</h3>
            <div className="event-time">
              <i className="fas fa-clock"></i>
              Started 30 minutes ago • Ends in 3 hours
            </div>
          </div>
          <div className="event-content">
            <div className="live-stats">
              <div className="stat-box">
                <div className="number">{liveStats[1].value}</div>
                <div className="label">{liveStats[1].label}</div>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '60%' }}></div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', marginBottom: 15 }}>
              Workshop Progress: 60% Complete
            </p>
            <p className="event-description">
              Interactive hands-on workshop covering machine learning fundamentals, neural networks, and practical AI applications.
            </p>
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

        <div className="event-card">
          <div className="event-header">
            <div className="live-badge">
              <div className="live-dot"></div>
              LIVE
            </div>
            <h3 className="event-title">Photography Exhibition</h3>
            <div className="event-time">
              <i className="fas fa-clock"></i>
              Started 4 hours ago • Ends in 2 hours
            </div>
          </div>
          <div className="event-content">
            <div className="live-stats">
              <div className="stat-box">
                <div className="number">{liveStats[2].value}</div>
                <div className="label">{liveStats[2].label}</div>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '80%' }}></div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', marginBottom: 15 }}>
              Exhibition Progress: 80% Complete
            </p>
            <p className="event-description">
              Virtual gallery showcasing stunning photography from talented student artists, featuring nature, portraits, and urban scenes.
            </p>
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

        <div className="event-card">
          <div className="event-header">
            <div className="live-badge">
              <div className="live-dot"></div>
              LIVE
            </div>
            <h3 className="event-title">Inter-College Debate</h3>
            <div className="event-time">
              <i className="fas fa-clock"></i>
              Started 1 hour ago • Ends in 4 hours
            </div>
          </div>
          <div className="event-content">
            <div className="live-stats">
              <div className="stat-box">
                <div className="number">{liveStats[3].value}</div>
                <div className="label">{liveStats[3].label}</div>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '45%' }}></div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', marginBottom: 15 }}>
              Tournament Progress: 45% Complete
            </p>
            <p className="event-description">
              Intense intellectual battle between the brightest minds from colleges across the state on contemporary social issues.
            </p>
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
      </div>

      <div className="floating-actions">
        <button className="floating-btn" title="Refresh Live Events" onClick={() => location.reload()}>
          <i className="fas fa-sync-alt"></i>
        </button>
        <button className="floating-btn" title="Notifications" onClick={() => alert('Notifications coming soon')}>
          <i className="fas fa-bell"></i>
        </button>
        <button className="floating-btn" title="Full Screen" onClick={toggleFullscreen}>
          <i className="fas fa-expand"></i>
        </button>
      </div>
    </div>
  )
}

