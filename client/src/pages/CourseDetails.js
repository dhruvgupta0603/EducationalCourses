import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const enroll = async () => {
    try {
      await api.post(`/enroll/${id}`, {}, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      });
      setMsg("Enrolled successfully!");
    } catch (err) {
      setMsg(err.response?.data?.msg || "Enrollment failed");
    }
  };

  useEffect(() => {
    api.get(`/courses/${id}`)
      .then(res => setCourse(res.data))
      .catch(()=>setCourse(null))
      .finally(()=>setLoading(false));
  }, [id]);

  if(loading) return <div>Loading...</div>;
  if(!course) return <div>Course not found</div>;

  return (
    <div>
      <h2>{course.title}</h2>
      <div>{course.description}</div>
      <button onClick={enroll}>Enroll</button>
      {msg && <div>{msg}</div>}
    </div>
  );
}