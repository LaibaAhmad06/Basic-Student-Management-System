import StudentCard from './StudentCard';

function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return <p className="text-muted">No students found.</p>;
  }

  return (
    <div>
      {students.map(student => (
        <StudentCard key={student.id} student={student} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default StudentList;