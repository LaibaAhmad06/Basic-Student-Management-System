import { useNavigate } from 'react-router-dom';

function StudentCard({ student, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{student.name}</h5>
          <p className="card-text text-muted">{student.email} | Roll: {student.roll}</p>
        </div>
        <div>
          <button className="btn btn-sm btn-warning me-2"
            onClick={() => navigate(`/edit/${student.id}`)}>Edit</button>
          <button className="btn btn-sm btn-danger"
            onClick={() => onDelete(student.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;