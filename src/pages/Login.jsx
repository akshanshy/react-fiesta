import { Link } from 'react-router-dom'
import '../styles/login.css'

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Login to continue exploring Eventura</p>

        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="input-group">
            <i className="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="input-group">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="redirect-text">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

