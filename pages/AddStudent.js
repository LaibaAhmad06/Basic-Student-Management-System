import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import StudentForm from '../components/StudentForm';
import { getStudents, saveStudents } from '../utils/storage';

function AddStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [existing, setExisting] = useState(null);

  useEffect(() => {
    if (id) {
      const students = getStudents();
      setExisting(students.find(s => s.id === id));
    }
  }, [id]);

  const handleSubmit = (data) => {
    const students = getStudents();
    if (id) {
      const updated = students.map(s => s.id === id ? { ...s, ...data } : s);
      saveStudents(updated);
    } else {
      const newStudent = { ...data, id: Date.now().toString() };
      saveStudents([...students, newStudent]);
    }
    navigate('/students');
  };

  return (
    <div className="container mt-4">
      <h2>{id ? 'Edit Student' : 'Add New Student'}</h2>
      <StudentForm onSubmit={handleSubmit} existing={existing} />
    </div>
  );
}
export default AddStudent;