import { useState, useEffect } from 'react';

function StudentForm({ onSubmit, existing }) {
  const [name, setName]     = useState('');
  const [email, setEmail]   = useState('');
  const [roll, setRoll]     = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (existing) {
      setName(existing.name);
      setEmail(existing.email);
      setRoll(existing.roll);
    }
  }, [existing]);

  const validate = () => {
    let errs = {};
    if (!name.trim())  errs.name  = 'Name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email required';
    if (!roll.trim())  errs.roll  = 'Roll number is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    onSubmit({ name, email, roll });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Name</label>
        <input className="form-control" value={name} onChange={e => setName(e.target.value)} />
        {errors.name && <small className="text-danger">{errors.name}</small>}
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
        {errors.email && <small className="text-danger">{errors.email}</small>}
      </div>
      <div className="mb-3">
        <label>Roll Number</label>
        <input className="form-control" value={roll} onChange={e => setRoll(e.target.value)} />
        {errors.roll && <small className="text-danger">{errors.roll}</small>}
      </div>
      <button className="btn btn-primary" type="submit">
        {existing ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  );
}

export default StudentForm;