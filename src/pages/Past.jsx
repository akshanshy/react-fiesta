import { useMemo, useState } from 'react'
import '../styles/past.css'

export default function Past() {
  const events = useMemo(
    () => [
      {
        id: 'cricket-2025',
        year: '2025',
        title: 'Inter-College Cricket Tournament',
        date: 'Aug 15-20, 2025',
        location: 'Sports Complex',
        description:
          'A thrilling 5-day cricket tournament that showcased exceptional talent and unforgettable matches.',
        images: [
          'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=150',
          'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=150',
          'https://images.unsplash.com/photo-1593766827139-6c3e7fb2d43e?w=150',
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150'
        ],
        extraCount: '+127'
      },
      {
        id: 'techfest-2024',
        year: '2024',
        title: 'Winter Tech Fest 2024',
        date: 'Dec 10-12, 2024',
        location: 'Main Auditorium & Tech Labs',
        description:
          'A tech festival featuring workshops, expert talks, and competitions for enthusiasts across the region.',
        images: [
          'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=150',
          'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150',
          'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=150',
          'https://images.unsplash.com/photo-1515378791036-0648a814c963?w=150'
        ],
        extraCount: '+85'
      }
    ],
    []
  )

  const [year, setYear] = useState('all')
  const filtered = year === 'all' ? events : events.filter((e) => e.year === year)

  return (
    <div>
      <div className="header">
        <h1>
          <i className="fas fa-history"></i> Past Events
        </h1>
        <p>Relive the amazing moments and achievements!</p>
      </div>

      <div className="timeline-filter">
        {[
          { id: 'all', label: 'All Years' },
          { id: '2025', label: '2025' },
          { id: '2024', label: '2024' }
        ].map((b) => (
          <button
            key={b.id}
            className={`timeline-btn ${year === b.id ? 'active' : ''}`}
            data-year={b.id}
            onClick={() => setYear(b.id)}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="events-grid">
        {filtered.map((e) => (
          <div key={e.id} className="event-card" data-year={e.year}>
            <div className="event-header">
              <div className="completed-badge">
                <i className="fas fa-check-circle"></i> COMPLETED
              </div>
              <h3 className="event-title">{e.title}</h3>
              <div>
                <i className="fas fa-calendar"></i> {e.date}
              </div>
              <div>
                <i className="fas fa-map-marker-alt"></i> {e.location}
              </div>
            </div>
            <div className="event-content">
              <p className="event-description">{e.description}</p>
              <div className="gallery-preview">
                {e.images.slice(0, 3).map((src) => (
                  <div key={src} className="gallery-item">
                    <img src={src} alt="" />
                  </div>
                ))}
                <div className="gallery-item">
                  <img src={e.images[3]} alt="" />
                  <div className="gallery-count">{e.extraCount}</div>
                </div>
              </div>
              <span className="view-all-gallery">View All Photos & Videos</span>
              <div className="action-buttons">
                <button className="btn btn-gallery" onClick={() => alert('Gallery coming soon')}>
                  <i className="fas fa-images"></i> View Gallery
                </button>
                <button className="btn btn-secondary" onClick={() => alert('Shared')}>
                  <i className="fas fa-share"></i> Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

