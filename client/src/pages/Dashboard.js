import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    api.get("/enroll/my", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
    .then(res => setCourses(res.data))
    .catch(()=>setCourses([]))
    .finally(()=>setLoading(false));
  }, []);

  if(loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Your Enrolled Courses</h2>
      <ul>
        {courses.map(c=>(
          <li key={c._id}>
            <Link to={`/courses/${c._id}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}