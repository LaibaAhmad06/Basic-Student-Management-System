export const getStudents = () => {
  return JSON.parse(localStorage.getItem('students')) || [];
};

export const saveStudents = (students) => {
  localStorage.setItem('students', JSON.stringify(students));
};