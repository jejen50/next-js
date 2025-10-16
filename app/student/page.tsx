export {};
const students = [
  { id: 1, name: "Dhama", age: 20 },
  { id: 2, name: "Jejen", age: 21 },
  { id: 3, name: "Lala", age: 19 },
];

export default function StudentPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Student List</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}
