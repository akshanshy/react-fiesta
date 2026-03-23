import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/admin-dashboard.css";

export default function AdminDashboard() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    category: ""
  });

  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token"); // 🔐 IMPORTANT

  // 🔄 Fetch events
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/events");
      setEvents(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ✍️ Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ➕ Add / ✏️ Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(
          `http://localhost:5000/events/${editId}`,
          form,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        alert("Event updated ✅");
        setEditId(null);
      } else {
        await axios.post(
          "http://localhost:5000/events",
          form,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        alert("Event added ✅");
      }

      setForm({ title: "", description: "", date: "", category: "" });
      fetchEvents();

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Error occurred");
    }
  };

  // ❌ Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("Deleted successfully");
      fetchEvents();
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  // ✏️ Edit
  const handleEdit = (event) => {
    setForm({
      title: event.title,
      description: event.description,
      date: event.date?.split("T")[0], // 🔥 FIX DATE FORMAT
      category: event.category
    });

    setEditId(event._id);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* FORM */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <input name="title" value={form.title} placeholder="Title" onChange={handleChange} required />
        <input name="description" value={form.description} placeholder="Description" onChange={handleChange} required />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="category" value={form.category} placeholder="Category" onChange={handleChange} required />

        <button type="submit">
          {editId ? "Update Event" : "Add Event"}
        </button>
      </form>

      <hr />

      {/* LOADING */}
      {loading ? (
        <p className="loading-state">Loading events...</p>
      ) : (
        <div className="event-list">
          {events.map((e) => (
            <div className="event-card" key={e._id}>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
              <p><strong>Date:</strong> {new Date(e.date).toDateString()}</p>
              <p><strong>Category:</strong> {e.category}</p>

              <div className="card-actions">
                <button type="button" onClick={() => handleEdit(e)}>✏️ Edit</button>
                <button type="button" onClick={() => handleDelete(e._id)}>❌ Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}