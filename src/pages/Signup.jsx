import { Link } from 'react-router-dom'
import '../styles/signup.css'

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>
        <p>Join Eventura and stay updated with events!</p>

        <form
          className="signup-form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="input-group">
            <i className="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-group">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>

          <div className="input-group">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Confirm Password" required />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="redirect-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

