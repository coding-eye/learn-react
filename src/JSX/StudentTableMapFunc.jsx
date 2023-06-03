import { studentData } from "./assets/data/studentData";
import "./css/StudentTableMapFunc.css";

const StudentTableMapFunc = () => {
  return (
    <table>
      <tr>
        <th>Stu. ID</th>
        <th>Stu. Name</th>
        <th>Stu. Age</th>
        <th>Stu. Marks</th>
      </tr>
      {studentData.map((stu) => (
        <tr>
          <td>{stu.id}</td>
          <td>{stu.name}</td>
          <td>{stu.age}</td>
          <td>{stu.marks}</td>
        </tr>
      ))}
    </table>
  );
};

export default StudentTableMapFunc;
