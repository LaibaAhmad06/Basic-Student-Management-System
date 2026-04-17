import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentList from '../components/StudentList';
import { getStudents, saveStudents } from '../utils/storage';

function StudentsList() {
  const [students, setStudents] = useState([]);

  useEffect(() => { setStudents(getStudents()); }, []);

  const handleDelete = (id) => {
    const updated = students.filter(s => s.id !== id);
    saveStudents(updated);
    setStudents(updated);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>All Students</h2>
        <Link to="/add" className="btn btn-success">+ Add New</Link>
      </div>
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
}

export default StudentsList;