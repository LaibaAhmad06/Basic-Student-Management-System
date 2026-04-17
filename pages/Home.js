import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1>Student Management System</h1>
      <p className="lead">Manage students easily</p>
      <Link to="/students" className="btn btn-primary me-2">View Students</Link>
      <Link to="/add" className="btn btn-success">Add Student</Link>
    </div>
  );
}
export default Home;