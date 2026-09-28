import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [students, setStudents] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    phone: ''
  })
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = () => {
    setLoading(true)
    axios.get('http://localhost:8080/students')
      .then((response) => {
        setStudents(response.data)
      })
      .catch((error) => {
        console.error('Error fetching students:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAddStudent = () => {
    axios.post('http://localhost:8080/students', formData)
      .then(() => {
        fetchStudents()
        setFormData({ name: '', email: '', department: '', phone: '' })
      })
      .catch((error) => {
        console.error('Error adding student:', error)
      })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/students/${id}`)
      .then(() => {
        fetchStudents()
      })
      .catch((error) => {
        console.error('Error deleting student:', error)
      })
  }

  const handleEditClick = (student) => {
    setEditingId(student.id)
    setFormData({
      name: student.name,
      email: student.email,
      department: student.department,
      phone: student.phone
    })
  }

  const handleUpdateStudent = () => {
    axios.put(`http://localhost:8080/students/${editingId}`, formData)
      .then(() => {
        fetchStudents()
        setFormData({ name: '', email: '', department: '', phone: '' })
        setEditingId(null)
      })
      .catch((error) => {
        console.error('Error updating student:', error)
      })
  }

  return (
    <div style={{ backgroundColor: '#f4f5f7', minHeight: '100vh' }}>
      <nav className="navbar navbar-dark mb-4" style={{ backgroundColor: '#312e81' }}>
        <div className="container">
          <span className="navbar-brand mb-0 h1">🎓 Student Management System</span>
        </div>
      </nav>

      <div className="container">
        <div className="card p-4 mb-4 shadow-sm border-0" style={{ borderRadius: '10px' }}>
          <h4 className="mb-3" style={{ color: '#312e81' }}>
            {editingId ? 'Edit Student' : 'Add New Student'}
          </h4>

          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="department"
                placeholder="Department"
                className="form-control"
                value={formData.department}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {editingId ? (
            <button className="btn" style={{ backgroundColor: '#16a34a', color: 'white' }} onClick={handleUpdateStudent}>
              Update Student
            </button>
          ) : (
            <button className="btn" style={{ backgroundColor: '#312e81', color: 'white' }} onClick={handleAddStudent}>
              Add Student
            </button>
          )}
        </div>

        {loading ? (
          <p>Loading students...</p>
        ) : students.length === 0 ? (
          <p>No students found. Add one using the form above!</p>
        ) : (
          <div className="card shadow-sm border-0 p-3" style={{ borderRadius: '10px' }}>
            <table className="table table-hover mb-0">
              <thead>
                <tr style={{ backgroundColor: '#312e81' }}>
                  <th style={{ color: 'white' }}>ID</th>
                  <th style={{ color: 'white' }}>Name</th>
                  <th style={{ color: 'white' }}>Email</th>
                  <th style={{ color: 'white' }}>Department</th>
                  <th style={{ color: 'white' }}>Phone</th>
                  <th style={{ color: 'white' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.department}</td>
                    <td>{student.phone}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(student)}>
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default App